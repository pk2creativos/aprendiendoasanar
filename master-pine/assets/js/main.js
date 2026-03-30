/* ============================================================
   MÁSTER PINE — main.js v2
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Scroll reveal ---------------------------------------- */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));


  /* --- Generic accordion ------------------------------------ */
  function initAccordion({ itemSel, triggerAttr, panelAttr, groupSel }) {
    document.querySelectorAll(itemSel).forEach(item => {
      const trigger = item.querySelector(`[${triggerAttr}]`);
      const panel   = item.querySelector(`[${panelAttr}]`);
      if (!trigger || !panel) return;

      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Close siblings
        const group = item.closest(groupSel);
        if (group) {
          group.querySelectorAll(itemSel).forEach(sib => {
            sib.classList.remove('open');
            const p = sib.querySelector(`[${panelAttr}]`);
            if (p) p.style.maxHeight = '0';
          });
        }

        if (!isOpen) {
          item.classList.add('open');
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    });
  }

  initAccordion({
    itemSel:    '.acc-item',
    triggerAttr: 'data-trigger',
    panelAttr:   'data-panel',
    groupSel:    '[data-accordion]',
  });

  initAccordion({
    itemSel:    '.faq-item',
    triggerAttr: 'data-trigger',
    panelAttr:   'data-panel',
    groupSel:    '[data-accordion]',
  });


  /* --- Recalculate open panels on resize -------------------- */
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.querySelectorAll('.acc-item.open, .faq-item.open').forEach(item => {
        const panel = item.querySelector('[data-panel]');
        if (panel) panel.style.maxHeight = panel.scrollHeight + 'px';
      });
    }, 150);
  });


  /* --- Lead magnet form ------------------------------------- */
  const LM_WEBHOOK = 'https://YOUR_N8N_WEBHOOK_URL'; // ← reemplazar con URL de n8n

  const lmForm    = document.getElementById('lm-form');
  const lmSuccess = document.getElementById('lm-success');
  const lmError   = document.getElementById('lm-error');

  // Inicializar intl-tel-input con geolocalización automática
  let iti = null;
  const phoneInput = document.getElementById('lm-telefono');

  if (phoneInput && window.intlTelInput) {
    iti = window.intlTelInput(phoneInput, {
      initialCountry: 'auto',
      geoIpLookup: (callback) => {
        fetch('https://ipapi.co/json/')
          .then(r => r.json())
          .then(data => callback(data.country_code))
          .catch(() => callback('ar')); // fallback: Argentina
      },
      preferredCountries: ['ar', 'mx', 'co', 'pe', 'cl', 'uy', 'es', 'us'],
      separateDialCode: true,
      utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.10/build/js/utils.js',
    });
  }

  if (lmForm) {
    lmForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const btn      = lmForm.querySelector('.form-submit');
      const nombre   = lmForm.querySelector('#lm-nombre');
      const email    = lmForm.querySelector('#lm-email');

      // Reset errors
      [nombre, email, phoneInput].forEach(f => f && f.classList.remove('error'));
      lmError.style.display = 'none';

      // Validate
      let valid = true;
      if (!nombre.value.trim())
        { nombre.classList.add('error'); valid = false; }
      if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
        { email.classList.add('error'); valid = false; }
      if (!phoneInput.value.trim() || (iti && !iti.isValidNumber()))
        { phoneInput.classList.add('error'); valid = false; }
      if (!valid) return;

      // Loading state
      btn.classList.add('loading');
      btn.disabled = true;

      // Número completo con código de país
      const telefonoCompleto = iti ? iti.getNumber() : phoneInput.value.trim();

      const payload = {
        nombre:    nombre.value.trim(),
        email:     email.value.trim(),
        telefono:  telefonoCompleto,
        pais:      iti ? iti.getSelectedCountryData().name : '',
        source:    window.location.href,
        timestamp: new Date().toISOString(),
        lead_type: 'pdf_programa',
      };

      try {
        const res = await fetch(LM_WEBHOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error('webhook_error');

        // Success
        document.getElementById('lm-form-wrap').style.display = 'none';
        lmSuccess.style.display = 'flex';

      } catch (err) {
        btn.classList.remove('loading');
        btn.disabled = false;
        lmError.style.display = 'block';
      }
    });

    // Clear error on input
    lmForm.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', () => input.classList.remove('error'));
    });
  }


  /* --- Smooth scroll ---------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 16,
        behavior: 'smooth',
      });
    });
  });

});
