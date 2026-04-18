/* =========================================================
   La sociedad que nos enferma — León Fu
   main.js
   - Geolocalización de precios + país default del teléfono
   - intl-tel-input en el formulario
   - Envío del formulario al webhook + redirección a /gracias/
   - Scroll reveal (IntersectionObserver)
   - Año dinámico del footer
========================================================== */

(function () {
  'use strict';

  // ---------- CONFIG ----------
  // TODO: Reemplazar por la URL real del webhook de n8n cuando Daniel la provea.
  const WEBHOOK_URL = 'https://orquesta.mktparatodos.com/webhook/lm/ebook-sociedad';

  const THANKS_URL = 'gracias/';

  // País → región para precios
  const EU_COUNTRIES = new Set([
    'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT',
    'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'IS', 'LI', 'NO', 'CH', 'GB'
  ]);

  // ---------- HELPERS ----------
  function setRegionFromCountry(countryCode) {
    const cc = (countryCode || '').toUpperCase();
    let region = 'WW';
    if (cc === 'AR') region = 'AR';
    else if (cc === 'US') region = 'US';
    else if (cc === 'MX') region = 'MX';
    else if (EU_COUNTRIES.has(cc)) region = 'EU';
    document.body.dataset.region = region;
    document.body.dataset.country = cc;
    return { region, country: cc };
  }

  // ---------- GEOLOCATION (IP-based, no permisos) ----------
  // Default optimista: Argentina. Si la API responde, corregimos.
  setRegionFromCountry('AR');

  const geoPromise = fetch('https://ipapi.co/json/', { cache: 'no-store' })
    .then((r) => (r.ok ? r.json() : Promise.reject()))
    .then((data) => {
      const cc = data && data.country_code ? data.country_code : 'AR';
      const result = setRegionFromCountry(cc);
      return result;
    })
    .catch(() => ({ region: 'AR', country: 'AR' }));

  // ---------- intl-tel-input ----------
  let itiInstance = null;
  const phoneInput = document.getElementById('f-telefono');
  if (phoneInput && window.intlTelInput) {
    itiInstance = window.intlTelInput(phoneInput, {
      initialCountry: 'ar',
      preferredCountries: ['ar', 'mx', 'us', 'es', 'co', 'cl'],
      separateDialCode: true,
      utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.12/build/js/utils.js'
    });

    geoPromise.then(({ country }) => {
      if (country && itiInstance) {
        try { itiInstance.setCountry(country.toLowerCase()); } catch (e) { /* noop */ }
      }
    });
  }

  // ---------- FORMULARIO ----------
  const form = document.getElementById('ebook-form');
  const statusEl = document.getElementById('form-status');

  function setStatus(msg, type) {
    if (!statusEl) return;
    statusEl.textContent = msg || '';
    statusEl.classList.remove('is-error', 'is-success');
    if (type) statusEl.classList.add('is-' + type);
  }

  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      setStatus('', null);

      const nombre = form.nombre.value.trim();
      const email = form.email.value.trim();
      const legal = form.legal.checked;
      const telefono = itiInstance ? itiInstance.getNumber() : phoneInput.value.trim();
      const telefonoValido = itiInstance ? itiInstance.isValidNumber() : telefono.length >= 6;

      if (!nombre) { setStatus('Escribe tu nombre para continuar.', 'error'); form.nombre.focus(); return; }
      if (!telefono || !telefonoValido) { setStatus('El teléfono no parece válido. Revisa el número.', 'error'); phoneInput.focus(); return; }
      if (!legal) { setStatus('Necesitás aceptar recibir mensajes para que podamos enviarte el ebook.', 'error'); return; }

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Enviando…'; }

      const payload = {
        nombre: nombre,
        telefono: telefono,
        email: email || null,
        pais: document.body.dataset.country || '',
        region: document.body.dataset.region || '',
        origen: 'lp/la-sociedad-que-nos-enferma',
        url: window.location.href,
        timestamp: new Date().toISOString()
      };

      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        mode: 'cors'
      })
        .then((res) => {
          // Permitimos opaque/cors fail silencioso: igual redirigimos a /gracias/
          // siempre que no haya sido un error de red total.
          window.location.href = THANKS_URL;
        })
        .catch(() => {
          // Si el webhook falla, igual mandamos a /gracias/ para que el usuario
          // pueda descargar el ebook — Daniel recupera el lead por otra vía.
          // (Cambiar este comportamiento si querés bloquear la descarga ante errores.)
          window.location.href = THANKS_URL;
        });
    });
  }

  // ---------- SCROLL REVEAL ----------
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.08 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // ---------- AÑO FOOTER ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- HORA LOCAL DEL TALLER ----------
  // Clase 1: miércoles 8 de julio de 2026 a las 18:00 hora Argentina (UTC-3)
  // = 2026-07-08 21:00:00 UTC
  (function showLocalClassTime() {
    // Misma hora base: 18:00 ART = 21:00 UTC
    var classDateUTC = new Date(Date.UTC(2026, 6, 8, 21, 0, 0));
    var tz, localTime, prettyTz;

    try {
      tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (!tz) return;

      localTime = new Intl.DateTimeFormat('es', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: tz
      }).format(classDateUTC);

      prettyTz = tz.split('/').pop().replace(/_/g, ' ');
    } catch (e) {
      return;
    }

    // Aplica a todos los bloques schedule-local (Teórico + Terapéutico)
    var blocks = [
      { wrap: 'schedule-local', time: 'schedule-local-time', sub: 'schedule-local-sub' },
      { wrap: 'schedule-local-tp', time: 'schedule-local-tp-time', sub: 'schedule-local-tp-sub' }
    ];
    blocks.forEach(function (b) {
      var w = document.getElementById(b.wrap);
      var t = document.getElementById(b.time);
      var s = document.getElementById(b.sub);
      if (!w || !t || !s) return;
      t.textContent = localTime + ' hs';
      s.textContent = 'Hora local en ' + prettyTz + ' · equivale a las 18:00 hs en Argentina.';
      w.hidden = false;
    });
  })();

  // ---------- VIDEO PLACEHOLDER → EMBED ----------
  // Si alguien pone data-youtube-id="XXXX" en el placeholder, lo reemplazamos por iframe.
  document.querySelectorAll('.video-placeholder[data-youtube-id]').forEach((el) => {
    const id = el.getAttribute('data-youtube-id');
    if (id && id.trim()) {
      el.innerHTML =
        '<iframe src="https://www.youtube.com/embed/' + encodeURIComponent(id.trim()) +
        '" title="Video de León Fu" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>';
    }
  });
})();
