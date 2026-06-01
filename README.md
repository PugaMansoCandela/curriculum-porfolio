Portfolio Web - Candela Puga Manso
- Desarrollado con: HTML5, CSS y Java script (pata galerías y carrouseles).
- Editor de código: Visual Studio Code.
- Tamaño de pantalla de desarrollo: 1920 x 1080px.
- Navegador de prueba: Google Chrome.

---

## Estructura de archivos:
```
portfolio/
├── index.html          → Página de entrada (portada)
├── inicio.html         → Página principal con carrusel
├── curriculum.html     → Sobre mí, educación, experiencia e idiomas
├── proyectos.html      → Galería de trabajos con lightbox
├── contacto.html       → Formulario de contacto
├── estilos.css         → Todos los estilos del sitio
├── script.js           → Carrusel e interacciones JS
├── img/                → Imágenes y GIFs
└── fuentes/            → Tipografías variables locales
```
---

## Páginas (html):

- index.html:
Página de bienvenida. Muestra el logo SVG, el nombre y la palabra PORTFOLIO que al hover se pone en bold y al clickear lleva a inicio.html. Fondo verde, sin header ni footer.

- inicio.html:
Página principal. Tiene header con logo (que vuelve al index) y navegación. El hero es un carrusel de imágenes a pantalla completa que cambia con flechas o automáticamente cada 4 segundos. Footer con bio, links a redes y frase tipo "llamado a la acción".

- curriculum.html:
Dos secciones: la primera con foto a la izquierda y presentación personal a la derecha; la segunda con tres columnas (Educación, Experiencia, Idiomas) sobre fondo verde con separadores horizontales.

- proyectos.html:
Hero con GIF de fondo a pantalla completa y texto "PROYECTOS" con flecha animada. Debajo una galería en grilla de 3 columnas; al clickear cualquier imagen se abre un lightbox. Se cierra con la X, clickeando afuera o con Escape.

- contacto.html:
Hero con imagen de fondo. Formulario en dos columnas: datos personales (nombre, email, teléfono) a la izquierda; checkboxes de áreas de trabajo y campo de detalles a la derecha. Botones Borrar y Enviar.

---

## Tipografías:

- Alegreya (Regular) para texto general y párrafos.
- Alegreya (Italic) para textos en itálica, descripciones.
- Lexend para títulos, headers, nav, botones.

---

## Colores:
Fondo: rgb(220, 191, 168)
Verde: rgb(80, 108, 97)
Verde oscuro: rgb(54, 73, 65)

---

## JavaScript (script.js)

El archivo maneja dos funcionalidades:

- Carrusel (inicio.html): cambia entre imágenes con opacidad, controlado por flechas y con autoplay.
- Lightbox (proyectos.html): abre la imagen clickeada en pantalla completa sobre fondo oscuro.

