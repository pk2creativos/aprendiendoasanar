# Landing Page — León Fu: Talleres + Sesión Privada

## Briefing para Antigravity — Instituto Sana para Sanar®

> Este documento contiene TODAS las instrucciones para construir la landing page.
> Seguir bloque por bloque, respetando paleta, tipografía, copy y estructura.

---

## 1. IDENTIDAD VISUAL

### Paleta de colores — "Azul noche + Ámbar cálido" (Paleta D)

| Nombre | Hex | Uso |
|--------|-----|-----|
| Azul noche | `#0F2A4A` | Fondos hero, secciones oscuras, botones secundarios. Texto blanco encima. |
| Ámbar claro | `#E2AD45` | CTAs principales, títulos sobre fondo oscuro, acentos. Texto negro encima. |
| Celeste claro | `#6BB0D0` | Tercer color para secciones alternativas, botón sesión privada. Texto negro encima. |
| Marfil | `#FAF6F0` | Fondo general de la página. Texto negro encima. |
| Blanco | `#FFFFFF` | Fondo de tarjetas y bloques de contenido. Texto negro encima. |
| Negro | `#000000` | Texto body sobre fondos claros (marfil, blanco, ámbar, celeste). |

### Reglas de contraste

- Fondo azul noche → texto blanco, títulos en ámbar
- Fondo ámbar → texto negro, botones en azul noche con texto blanco
- Fondo celeste claro → texto negro, botones en azul noche con texto blanco
- Fondo marfil/blanco → texto negro
- Botones ámbar → siempre texto negro
- Botones azul noche → siempre texto blanco
- Botones celeste → siempre texto negro
- NUNCA texto blanco sobre ámbar ni celeste
- NUNCA texto gris claro en ningún lado. Todo negro o blanco según fondo.

### Tipografía — Lora + DM Sans

**Fuentes (Google Fonts):**
- Títulos (serif): `Lora` — pesos 400, 600, 700, Italic
- Body (sans-serif): `DM Sans` — pesos 400, 500, 600, 700

**Escala de tamaños:**

| Elemento | Desktop | Mobile | Fuente | Peso |
|----------|---------|--------|--------|------|
| H1 — Título hero | 48–56px | 32–36px | Lora | 600–700 |
| H2 — Títulos de sección | 32–36px | 26–28px | Lora | 600 |
| H3 — Subtítulos | 24–28px | 22–24px | Lora | 600 |
| Subtítulos itálica | 22–26px | 20–22px | Lora Italic | 400 + letter-spacing: 0.03em |
| Body principal | 20px | 18–19px | DM Sans | 400 |
| Body secundario | 18px | 18px | DM Sans | 400 |
| Botones CTA | 18–20px | 18px | DM Sans | 700 |
| Badges/etiquetas | 14–16px | 14px | DM Sans | 600 |

**Reglas tipográficas:**
- Mínimo absoluto en mobile: 18px. Nada más chico.
- Line-height títulos: 1.2–1.3
- Line-height body: 1.6–1.7
- Subtítulos en itálica siempre con letter-spacing: 0.03–0.04em
- Párrafos cortos: máximo 3–4 líneas en mobile
- Mucho espacio entre secciones (mínimo 60px mobile, 80px desktop)

---

## 2. ESTRUCTURA DE LA PÁGINA

La página es un scroll largo con 9 bloques. Arriba hay botones ancla para ir directo a los productos.

### Navegación superior (sticky o fija)

Logo Instituto Sana para Sanar + tres botones ancla:

```
[Taller Teórico — 2 meses]  [Taller Terapéutico — 1 año]  [Sesión Privada]
```

- Botón "Taller Teórico": fondo ámbar, texto negro → ancla a Bloque 5
- Botón "Taller Terapéutico": fondo azul noche, texto blanco → ancla a Bloque 7
- Botón "Sesión Privada": fondo celeste claro, texto negro → ancla a Bloque 8
- En mobile: los tres botones en fila horizontal, scrolleable si hace falta

---

## 3. BLOQUES — COPY Y DISEÑO

### BLOQUE 1: El gancho — "¿Te pasa esto?"

**Fondo:** Azul noche (#0F2A4A)
**Función:** Primer scroll. Que la persona se vea reflejada y se quede.

**Título hero (Lora 600, blanco):**
```
¿Sabés por qué vivís como vivís?
```

**Subtítulo (Lora Italic, ámbar, letter-spacing 0.03em):**
```
Lo que te enferma no empezó con vos. Lo que te hace sufrir no lo elegiste.
Y lo que repetís tiene una explicación que nadie te dio.
```

**Después del hero, sobre fondo marfil, cuatro bloques de identificación (los 4 mundos como preguntas):**

> Bloque emocional (fondo ámbar, texto negro):
> "¿Repetís el mismo tipo de pareja? ¿Tu relación se desgasta sin que entiendas por qué? ¿Sentís que amás pero no te alcanza?"

> Bloque material (fondo blanco, borde, texto negro):
> "¿Trabajás todo el día y sentís que no avanzás? ¿Hay una creencia en tu familia de que la plata no alcanza, de que no se puede?"

> Bloque sexual-creativo (fondo celeste claro, texto negro):
> "¿Hay tabúes que no podés tocar? ¿Tu sexualidad te genera culpa o conflicto? ¿Sentís que tu creatividad está bloqueada?"

> Bloque intelectual (fondo azul noche, texto blanco):
> "¿Vivís pensando lo que otros esperan de vos? ¿Te dijeron qué podías y qué no podías ser? ¿Sentís que tu vida sigue un guion que no escribiste?"

**Cierre del bloque (Lora Italic, sobre marfil):**
```
Si te viste reflejado en al menos una de estas preguntas,
lo que sigue te va a cambiar la forma de entender tu vida.
```

---

### BLOQUE 2: La explicación — "Por qué te pasa"

**Fondo:** Marfil
**Función:** Dar la explicación sin jerga. Creencias heredadas → conflictos → enfermedad.

**Título (Lora 600, azul noche):**
```
No es tu culpa. Es tu herencia.
```

**Body (DM Sans 400, negro, 20px):**
```
Lo que vivís hoy — los conflictos que repetís, las enfermedades que padecés,
las relaciones que no funcionan — no empezó con vos. Viene de tu árbol
genealógico. De creencias que tu familia heredó de la cultura, de la religión,
de una sociedad que necesita que creas ciertas cosas para funcionar.

Esas creencias operan como programas invisibles en cuatro dimensiones de tu
vida: lo que pensás, lo que sentís, tu sexualidad y creatividad, y tu relación
con el dinero, el cuerpo y la salud.

Cuando esos programas generan estrés crónico, tu biología responde. El sistema
nervioso se desfasa, el sistema endocrino se altera, el sistema inmune se
debilita. Y aparece la enfermedad. No como mala suerte — como respuesta
biológica a un conflicto que nadie te enseñó a ver.
```

**Cierre en bold (DM Sans 700):**
```
La buena noticia: si se puede ver, se puede cambiar.
```

---

### BLOQUE 3: El ebook — Lead magnet

**Fondo:** Ámbar (#E2AD45)
**Función:** Capturar email/WhatsApp a cambio del ebook gratuito.

**Título (Lora 600, negro):**
```
Descargá gratis: La sociedad que nos enferma
```

**Body (DM Sans 400, negro):**
```
Un ebook de León Fu que explica en profundidad por qué vivimos como vivimos,
por qué enfermamos como enfermamos, y qué tiene que ver tu árbol genealógico
con todo esto. 7 capítulos que te van a cambiar la forma de ver tu vida.
```

**Formulario:** Nombre + Email + WhatsApp (opcional)
**Botón:** "Quiero descargarlo" — fondo azul noche, texto blanco

---

### BLOQUE 4: León Fu — Quién es

**Fondo:** Blanco
**Función:** Generar confianza y autoridad.

**Título (Lora 600, azul noche):**
```
¿Quién es León Fu?
```

**Body (DM Sans 400, negro):**
```
Creador de la Psicogenealogía Sistémica y de los Arquetipos Familiares®.
Más de 20 años de práctica terapéutica acompañando a miles de personas en
Argentina, México, Colombia, Chile y España. Autor de 4 libros. Actualmente
en la 9na edición de su Maestría "Sanando tu Árbol Genealógico". Licenciado
en Artes Plásticas, formado en el Sistema Stanislavski — su enfoque cruza
arte, filosofía, terapia y ciencia de una manera que nadie más hace.
```

**Foto de León Fu.** Link a bio completa: aprendiendoasanar.com/leonfu/

---

### BLOQUE 5: Taller Teórico — 2 meses (ancla: #taller-teorico)

**Fondo:** Azul noche (#0F2A4A)
**Función:** Primera oferta. Precio bajo, barrera baja.

**Título (Lora 600, blanco):**
```
Taller Teórico: La sociedad que nos enferma
```

**Subtítulo (Lora Italic, ámbar, letter-spacing 0.03em):**
```
Por qué vivimos como vivimos, por qué enfermamos como enfermamos
```

**Body (DM Sans 400, blanco):**
```
2 meses de teoría transformadora con León Fu. 8 encuentros semanales de
3 horas donde vas a comprender en profundidad el origen de tus conflictos
emocionales, familiares y de salud.

No necesitás exponerte. No necesitás contar tu vida.
Solo necesitás escuchar con la mente abierta.
```

**Qué vas a descubrir (DM Sans, blanco, items sobre fondo levemente más claro):**
```
- Por qué la sociedad en que vivimos produce enfermedad, depresión y conflictos
- Cómo las creencias heredadas operan como programas invisibles en tu vida
- Qué son los cuatro mundos y cómo los conflictos se manifiestan en cada uno
- Cómo funciona la cadena creencia → estrés → enfermedad
- Qué es la Psicogenealogía Sistémica y por qué es la terapia del siglo XXI
- Cómo podés empezar a desmantelar el guion que heredaste
```

**Formato:** Online en vivo por Zoom · 1 vez por semana · 3 horas · Con grabación
**Inversión:** Argentina: $50.000/mes (2 cuotas) · Exterior: USD 50/mes (2 cuotas)
**Botón CTA:** "Quiero inscribirme en el Taller Teórico" — fondo ámbar, texto negro

---

### BLOQUE 6: Transición

**Fondo:** Marfil
**Función:** Conectar el taller teórico con el terapéutico. No venta agresiva — invitación.

**Título (Lora 600, azul noche):**
```
Comprender es el primer paso. Sanar es el siguiente.
```

**Body (DM Sans 400, negro):**
```
La teoría te abre los ojos. Pero para transformar tu vida, necesitás
llevar esa comprensión al cuerpo, a las emociones, al inconsciente.
Eso es lo que hacemos en el Taller Terapéutico.
```

---

### BLOQUE 7: Taller Terapéutico — 1 año (ancla: #taller-terapeutico)

**Fondo:** Blanco con borde superior ámbar
**Función:** Producto premium.

**Título (Lora 700, azul noche):**
```
Taller Terapéutico con León Fu: Aprendiendo a Sanar
```

**Body (DM Sans 400, negro):**
```
Práctica profunda donde León trabaja con cada participante usando la
Psicogenealogía Sistémica, la biodescodificación y los Arquetipos
Familiares®. Aquí es donde la teoría se convierte en transformación real.
```

**Frase clave (Lora 600 Italic, ámbar sobre fondo azul noche, padding generoso, letter-spacing 0.03em):**
```
"En cada historia que escuches, vas a encontrar la tuya."
```

**Texto debajo de la frase (DM Sans 400, negro):**
```
Cuando León trabaja con un compañero, prestá atención — porque lo que vas a
ver ahí tiene algo que ver con vos. Los conflictos humanos se repiten. Las
historias familiares se parecen. Y lo más transformador de este espacio no es
solo tu propio proceso — es todo lo que descubrís escuchando al otro.

Por eso la gente se queda. Por eso la gente vuelve. Porque cada sesión te
muestra algo nuevo sobre vos mismo, aunque no sea tu turno.
```

**Duración:** Se adapta al grupo para garantizar que cada persona reciba la atención que necesita.
**Requisito:** Haber completado el Taller Teórico, o pagar el 50% del valor del taller teórico como nivelación.
**Inversión:** Cuotas mensuales en USD (precio a definir).
**Botón CTA:** "Quiero inscribirme en el Taller Terapéutico" — fondo azul noche, texto blanco

---

### BLOQUE 8: Sesión Privada (ancla: #sesion-privada)

**Fondo:** Celeste claro (#6BB0D0)
**Función:** La puerta individual. Para quienes no se animan al grupo o prefieren lo exclusivo.

**Título (Lora 600, negro):**
```
Si preferís un espacio individual y confidencial
```

**Body (DM Sans 400, negro):**
```
León Fu trabaja en sesiones privadas de 2 horas donde se puede resolver lo que
otras terapias no logran en años. Un espacio exclusivo, sin grupo, sin
exposición — solo vos y tu historia.
```

**Inversión:** $200.000 ARS / ~USD 144 por sesión de 2 horas.
**Botón CTA:** "Agendar sesión privada" — fondo azul noche, texto blanco

---

### BLOQUE 9: Cierre

**Fondo:** Azul noche (#0F2A4A)
**Función:** La frase que queda.

**Frase (Lora 600 Italic, ámbar, centrada, grande — 32px desktop / 26px mobile, letter-spacing 0.03em):**
```
"No importa quién seas ni cuánto tengas — todos heredamos
conflictos que no elegimos. Y todos podemos resolverlos."
```

**Footer:** Logo Instituto Sana para Sanar® · Redes sociales (IG, YouTube, TikTok, Facebook) · WhatsApp · Email

---

## 4. NOTAS TÉCNICAS

- **Plataforma:** Antigravity (visual builder). NO escribir HTML/CSS/JS.
- **URL:** `aprendiendoasanar.com/lp/la-sociedad-que-nos-enferma/`
- **Mobile first:** Todo se diseña primero para celular, después para desktop.
- **CTA principal:** Scroll-to-section con anclas. Sin popups.
- **Velocidad:** Optimizar imágenes. Lazy loading. Fuentes desde Google Fonts CDN.

### Geolocalización de precios

Usar geolocalización para mostrar precios según país del visitante:

| Zona | Moneda | Taller Teórico (mensual) | Sesión Privada |
|------|--------|--------------------------|----------------|
| Argentina | ARS | $50.000/mes | $200.000 |
| México | MXN | Preguntar a Daniel | Preguntar a Daniel |
| Estados Unidos | USD | USD 50/mes | USD 144 |
| Europa | EUR | Preguntar a Daniel | Preguntar a Daniel |
| Resto del mundo | USD | USD 50/mes | USD 144 |

> NOTA: Los precios de México y Europa quedan como placeholder. Daniel los definirá en Antigravity directamente. Dejar el sistema preparado para que sean editables fácilmente.

### Formulario del ebook (Bloque 3)

Campos:
- **Nombre** (obligatorio)
- **Teléfono** (obligatorio) — usar librería `intl-tel-input` con código de país preconfigurado por geolocalización
- **Email** (opcional)

Legales (checkbox obligatorio):
```
Acepto recibir mensajes por WhatsApp y email con contenido del Instituto Sana para Sanar®.
```

Acción del botón "Quiero descargarlo":
- Enviar datos a **webhook** (URL placeholder: dejar campo configurable, Daniel lo completa con la URL de n8n)
- Redirigir a página de agradecimiento: `aprendiendoasanar.com/lp/la-sociedad-que-nos-enferma/gracias/`

### Página de agradecimiento (CREAR)

URL: `aprendiendoasanar.com/lp/la-sociedad-que-nos-enferma/gracias/`

Contenido:
- Mensaje: "¡Gracias! Tu ebook está listo para descargar."
- **Botón de descarga del ebook** (link al PDF)
- Debajo: sección con link a la editorial de León Fu:
  - Texto: "Conocé los libros de León Fu"
  - Link a: `masalladelasnormas.com`
  - NO mostrar los libros individuales ni precios — solo el link a la editorial
- Los tres botones ancla a los productos (Taller Teórico, Taller Terapéutico, Sesión Privada)
- Misma paleta y tipografía que la landing principal

### Logo

Los logos del Instituto Sana para Sanar® están en la carpeta `assets/` del proyecto en formato SVG:
- **Versión blanco:** para fondos oscuros (azul noche)
- **Versión negro:** para fondos claros (marfil, blanco, ámbar, celeste)

Usar el logo blanco en la navegación sticky si el fondo es azul noche, y el negro si el fondo es claro. En el footer (fondo azul noche) usar el blanco.

### Imágenes

- **Fotos de León Fu:** Dejar placeholders con las medidas recomendadas. Daniel las colocará después.
- **Video de YouTube:** Embeber un video destacado de León Fu (del canal youtube.com/leonfu) en el Bloque 4 (sección "¿Quién es León Fu?"). Dejar placeholder para que Daniel elija el video específico.

### Footer (Bloque 9)

Incluir:
- Logo Instituto Sana para Sanar®
- Link a biografía completa: `aprendiendoasanar.com/leonfu/`
- Link a canal YouTube: `youtube.com/leonfu`
- Redes sociales: Instagram (`@leonfu.terapeuta`), TikTok (`@leonfu.terapeuta`), Facebook (`leonfu.terapeuta`)
- WhatsApp: `+54 9 11 2732 8123`
- Email: `hola@aprendiendoasanar.com`
- Link a editorial: `masalladelasnormas.com`

---

## 5. RESUMEN DE ARCHIVOS RELACIONADOS

| Archivo | Contenido |
|---------|-----------|
| ebook-la-sociedad-que-nos-enferma.docx | Ebook lead magnet — 7 capítulos. Convertir a PDF para descarga. |
| posicionamiento-leon-fu-completo.docx | Documento base con reflexión + Moreno + eslogan + estrategia de clases. |
| critica-sociedad-enferma-leon-fu.docx | Pensamiento crítico fundamentado — base teórica de todo. |
| ecosistema-leon-fu-v3.html | Simulador interactivo de pricing (referencia interna). |
| guia-tipografica-leon-fu.html | Muestras visuales de tipografía (referencia interna). |

---

*Instituto Sana para Sanar® — León Fu & Daniel Meade*
*Briefing v1.0 — Abril 2026*
