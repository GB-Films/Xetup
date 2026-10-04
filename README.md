# Xetup

Una sola página de videojuegos de Xetup: Cursed y Bumper Balls como juegos principales, con su selector de imágenes y descripción. Al bajar aparece directamente un catálogo de cuatro portadas con descripción, sin títulos de sección. Casting para ser Mujer enlaza a su versión jugable. Neon Run, Órbita y Pixel Match son ejemplos ficticios de diseño, marcados como conceptos y sin enlaces de juego activos. No hay sección de software ni páginas separadas.

El ícono de la pestaña está en `assets/favicon.svg`: incorpora el isotipo original de Xetup en blanco sobre fondo oscuro.

Casting se encuentra en https://github.com/GB-Films/CASTING y se juega en https://casting-gb-films.web.app/. Su tarjeta utiliza la portada final de `CASTING/portada-casting-v6.png`, con los logos oficiales de Xetup y GB Films y el crédito de dirección en la caja del afiche. La portada se muestra completa, sin recortes, en escritorio y celular. El juego no se copia ni se modifica en este proyecto.

## Publicación

Repositorio: https://github.com/GB-Films/Xetup

La publicación usa GitHub Pages. En **Settings → Pages → Build and deployment → Source**, seleccionar **GitHub Actions**. Cada actualización de `main` publica automáticamente la página.

El flujo incluye únicamente `index.html`, `styles.css`, `script.js` y la carpeta `assets`. Las rutas de los recursos son relativas, compatibles con la ruta del proyecto en GitHub Pages.

Página pública: https://gb-films.github.io/Xetup/
