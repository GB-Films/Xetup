# Xetup

Una sola pantalla para los cinco videojuegos de Xetup: Cursed, Bumper Balls, Casting para ser Mujer, NOK y BUNNER (El Conejo Norberto). Todas las tarjetas aparecen juntas sobre el fondo azul en escritorio; en pantallas más pequeñas se recorren horizontalmente con gestos, botones o teclado. No hay portada circular, sección inferior, juegos ficticios ni sección de software.

Casting mantiene su enlace a https://casting-gb-films.web.app/ y su portada final de CASTING/portada-casting-v6.png, con los logos oficiales. Todas las portadas llenan bloques de proporción 9:16 con `object-fit: cover` y recorte centrado, sin franjas ni márgenes interiores. NOK usa la portada entregada por el usuario en `assets/nok-cover.png`. No se inventan enlaces de juego ni disponibilidad.

NOK tiene como eslogan «Tu vida en modo juego». Su concepto es un simulador personalizado que recrea y gamifica la vida cotidiana de forma divertida e interactiva: reúne información personal, tareas, finanzas y metas en un solo lugar para ayudar a evitar la procrastinación y avanzar día a día. Ese mundo también puede incluir mascotas, pareja, casa y trabajo. La tarjeta resume el concepto en «Tu vida en modo juego. Organizá tareas, finanzas y metas en tu propio mundo». Sigue marcado como próximo lanzamiento, sin afirmar que estas funciones estén ya disponibles.

BUNNER es el juego del Conejo Norberto del repositorio GB-Films/BUNNER, no un sexto juego. Su portada vertical `assets/bunner-cover-v2.png` (1024 × 1536) fue generada con la herramienta integrada usando el personaje y el bosque originales del proyecto como referencias. La segunda versión deja margen lateral al título para el recorte 9:16. Los prompts y las referencias se conservan en `assets/bunner-cover-v1-prompt.txt` y `assets/bunner-cover-v2-prompt.txt`. La descripción refleja el juego real: saltar obstáculos y recoger zanahorias. El botón sigue deshabilitado porque https://gb-films.github.io/BUNNER/ devolvía 404 al comprobarlo el 4 de octubre de 2026; activar el enlace solo después de verificar una publicación pública operativa.

El favicon conserva el isotipo original blanco sobre un fondo oscuro.

La portada de Casting ocupa todo el bloque hasta sus bordes redondeados. El recorte puede ocultar las líneas claras del afiche; el archivo original no se modifica.

Bumper Balls usa la cápsula vertical oficial `CapsulaBiblioteca_v02.png`, copiada sin alteraciones a `assets/bumper-balls-cover-v2.png` (600 × 900). Cursed usa `assets/cursed-cover-v1.png` (1024 × 1536), generada con la herramienta integrada a partir de la referencia original de la mansión, con composición vertical y el título CURSED. El prompt se conserva en `assets/cursed-cover-v1-prompt.txt`. Los archivos originales se conservan; el ajuste y el recorte se realizan únicamente al mostrarlos en la página.

## Publicación

Repositorio: https://github.com/GB-Films/Xetup

La publicación usa GitHub Pages. En **Settings → Pages → Build and deployment → Source**, seleccionar **GitHub Actions**. Cada actualización de `main` publica automáticamente la página.

El flujo incluye únicamente `index.html`, `styles.css`, `script.js` y la carpeta `assets`. Las rutas de los recursos son relativas, compatibles con la ruta del proyecto en GitHub Pages.

Página pública: https://gb-films.github.io/Xetup/
