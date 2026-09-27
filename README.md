# Cafetería D'Mona ☕

Sitio web oficial de la **Cafetería D'Mona**, ubicada en **Cartago, Costa Rica**, al costado sur de la Basílica de los Ángeles. Un espacio *pet friendly* con vista privilegiada al atardecer, postres artesanales y la mejor torta chilena de la zona.

Sitio **100 % estático** construido con HTML, CSS y JavaScript puros. Sin frameworks, sin paso de build, sin dependencias.

---

## ✨ Características

| Sección | Contenido |
| --- | --- |
| **Inicio** | Hero a pantalla completa con la vista del espacio. |
| **Nosotros** | Historia de la cafetería y su ubicación privilegiada. |
| **Experiencia** | "Lo que nos distingue": espacio, torta chilena, postres y atardeceres. |
| **Galería** | Carrusel de imágenes con autoplay, flechas, puntos y soporte táctil/swipe. |
| **Ubicación** | Mapas y Waze con la dirección exacta al sur de la Basílica. |
| **Horario** | Tabla de horarios por día (lunes cerrado). |
| **Contacto** | WhatsApp directo para reservas, consultas y pedidos para llevar. |

### Interactividad (JavaScript vanilla)
- **Header** que cambia de estado al hacer scroll (`class="scrolled"`).
- **Menú móvil** con botón hamburguesa, `aria-expanded` y overlay.
- **Carrusel de galería** con:
  - Autoplay de 4.2 s que se pausa al pasar el mouse o al enfocar.
  - Navegación con flechas, puntos indicadores y **teclado** (← →).
  - **Swipe táctil** con umbral de 40 px.
  - Loop infinito con índice modular.
- **Año del copyright** autogenerado en el footer.

---

## 🛠️ Tecnologías

| Capa | Detalle |
| --- | --- |
| Estructura | **HTML5** semántico, con `<section id>` para ancla por navegación |
| Estilos | **CSS3** moderno — variables, `flexbox`/`grid`, animaciones y diseño responsivo |
| Interactividad | **JavaScript (ES5+)** vanilla, sin librerías |
| Tipografías | **Cormorant Garamond** (serif) + **Inter** (sans) vía Google Fonts |
| Imágenes | **JPG / PNG** optimizados para la galería y el logo |
| Deployment | **Vercel** (CDN global, HTTPS automático) |
| Hosting del código | **GitHub** |

**Cero dependencias.** Sin `package.json`, sin `node_modules`, sin proceso de compilación.

---

## 🚀 Ejecutar el proyecto

No requiere instalación. Es HTML estático puro.

### Opción 1 — Abrir directamente

Haz doble clic en `index.html` y se abrirá en tu navegador.

### Opción 2 — Servidor local (recomendado)

```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx serve .

# Con PHP
php -S localhost:8000
```

Luego abre <http://localhost:8000>.

### Opción 3 — Abrir en VS Code

Instala la extensión **Live Server** y haz clic derecho sobre `index.html` → *Open with Live Server*.

---

## 📁 Estructura

```
cafeteria-dmona/
├── index.html                  # Documento único (estructura y contenido)
├── assets/
│   ├── css/
│   │   └── styles.css          # Estilos completos del sitio
│   ├── js/
│   │   └── main.js             # Header, menú móvil y carrusel
│   └── img/
│       ├── logo.png            # Logo principal
│       ├── logo-256.png        # Logo cuadrado (PWA / apple-touch-icon)
│       ├── favicon.ico
│       ├── hero.jpg            # Fondo del hero
│       ├── espacio.jpg         # Vista del espacio
│       ├── noche.jpg           # Ambiente nocturno
│       ├── postres.jpg         # Postres artesanales
│       ├── torta.jpg           # Torta chilena
│       └── galeria-1..7.jpg    # Imágenes de la galería
├── .gitignore
└── README.md
```

---

## 🔗 Enlaces del sitio

- **Ubicación:** al costado sur de la Basílica de los Ángeles, Cartago, Costa Rica
- **WhatsApp:** Reservas, consultas y pedidos para llevar
- **Navegación:** Waze y Google Maps con la ubicación integrada

---

## 📄 Licencia

MIT — ver [LICENSE](./LICENSE).

---

**Desarrollado por** Bernal Baltodano Leiva · [@bbaltodanodev-lang](https://github.com/bbaltodanodev-lang)
