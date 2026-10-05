# Xetup

Una sola pantalla para los cinco videojuegos de Xetup: Cursed, Bumper Balls, Casting para ser Mujer, NOK y BUNNER (El Conejo Norberto). Todas las tarjetas aparecen juntas sobre el fondo azul en escritorio; en pantallas más pequeñas se recorren horizontalmente con gestos, botones o teclado. No hay portada circular, sección inferior, juegos ficticios ni sección de software.

En móviles de hasta 600 px, cada tarjeta ocupa el 64 % del ancho de pantalla, con un máximo de 260 px y 12 px entre tarjetas. Así se ve una tarjeta completa y una parte amplia de la siguiente desde el inicio. Los títulos y márgenes interiores son más compactos; las portadas conservan la proporción 9:16 y el carrusel mantiene sus gestos y controles.

Casting mantiene su enlace a https://casting-gb-films.web.app/ y su portada final de CASTING/portada-casting-v6.png, con los logos oficiales. Todas las portadas llenan bloques de proporción 9:16 con `object-fit: cover` y recorte centrado, sin franjas ni márgenes interiores. NOK usa la portada entregada por el usuario en `assets/nok-cover.png`. No se inventan enlaces de juego ni disponibilidad.

NOK tiene como eslogan «Tu vida en modo juego». Su concepto es un simulador personalizado que recrea y gamifica la vida cotidiana de forma divertida e interactiva: reúne información personal, tareas, finanzas y metas en un solo lugar para ayudar a evitar la procrastinación y avanzar día a día. Ese mundo también puede incluir mascotas, pareja, casa y trabajo. La tarjeta resume el concepto en «Tu vida en modo juego. Organizá tareas, finanzas y metas en tu propio mundo». Sigue marcado como próximo lanzamiento, sin afirmar que estas funciones estén ya disponibles.

BUNNER es el juego del Conejo Norberto del repositorio GB-Films/BUNNER, no un sexto juego. Su portada vertical `assets/bunner-cover-v2.png` (1024 × 1536) fue generada con la herramienta integrada usando el personaje y el bosque originales del proyecto como referencias. La segunda versión deja margen lateral al título para el recorte 9:16. Los prompts y las referencias se conservan en `assets/bunner-cover-v1-prompt.txt` y `assets/bunner-cover-v2-prompt.txt`. La descripción refleja el juego real: saltar obstáculos y recoger zanahorias. El botón «Jugar ahora» abre el juego alojado en `bunner/`, dentro de este mismo sitio.

El favicon conserva el isotipo original blanco sobre un fondo oscuro.

La portada de Casting ocupa todo el bloque hasta sus bordes redondeados. El recorte puede ocultar las líneas claras del afiche; el archivo original no se modifica.

Bumper Balls usa la cápsula vertical oficial `CapsulaBiblioteca_v02.png`, copiada sin alteraciones a `assets/bumper-balls-cover-v2.png` (600 × 900). Cursed usa `assets/cursed-cover-v1.png` (1024 × 1536), generada con la herramienta integrada a partir de la referencia original de la mansión, con composición vertical y el título CURSED. El prompt se conserva en `assets/cursed-cover-v1-prompt.txt`. Los archivos originales se conservan; el ajuste y el recorte se realizan únicamente al mostrarlos en la página.

## Publicación

Repositorio: https://github.com/GB-Films/Xetup

La publicación usa GitHub Pages. En **Settings → Pages → Build and deployment → Source**, seleccionar **GitHub Actions**. Cada actualización de `main` publica automáticamente la página.

El flujo incluye `index.html`, `styles.css`, `script.js` y la carpeta `assets`, y extrae la versión web compilada de `assets/bunner-web-v3.zip` en `_site/bunner/`. El paquete contiene solo HTML, CSS, JavaScript de navegador y recursos gráficos públicos del juego, no el repositorio de desarrollo, archivos de entorno ni reglas de la base de datos. Las rutas de los recursos son relativas, compatibles con GitHub Pages y un dominio propio. La versión v3 incorpora el bosque con estética de maqueta 2.5D, personajes y objetos con volumen, juego que ocupa toda la ventana y controles superpuestos adaptados a móvil y escritorio. Conserva el arreglo de la versión v2, que genera identificadores de jugador mediante `crypto.getRandomValues` cuando `crypto.randomUUID` no está disponible, evitando la pantalla en blanco al abrir por HTTP; este ajuste no sustituye el certificado HTTPS.

Página pública: https://gb-films.github.io/Xetup/

Juego público: https://gb-films.github.io/Xetup/bunner/

## Dominio propio

Dominio comprado por el usuario: `xetup.com.ar`, en NIC Argentina, delegado a Cloudflare. GitHub Pages tiene el dominio personalizado guardado y el DNS público ya devuelve las cuatro IP de GitHub Pages; `www` apunta a `gb-films.github.io`. El catálogo y BUNNER responden por HTTP y HTTPS. El 5 de octubre de 2026 se verificó que el juego responde con estado 200 por HTTPS y validación normal del certificado. Las direcciones finales son `https://xetup.com.ar/` y `https://xetup.com.ar/bunner/`. El enlace relativo `bunner/` se conserva.

La versión web de BUNNER se compiló con `tsc --noEmit` y `vite build --base ./` para que pueda alojarse bajo cualquiera de esas rutas. La carpeta local `bunner/` es una copia de prueba ignorada por Git; la publicación utiliza el ZIP versionado. Para actualizar el juego, compilar una nueva versión del repo BUNNER con base relativa, empaquetar solo el contenido de la salida compilada y actualizar el archivo ZIP usado por el flujo. Esta integración no cambia la visibilidad del repo BUNNER ni los permisos de Firestore. La tabla mundial sigue dependiendo de la configuración existente del juego.

Actualización v4: nueva portada 3D en assets/bunner-cover-v3.png; selector persistente de Norberto y Filiberta; al perder, solo Volver a jugar inicia otra partida. El botón de trofeo abre los récords globales.

Versión web v5: menú principal con selección de modo, personaje y récords; aventura de 10 niveles en preparación y accesos desde la pantalla de derrota.

Versión web v6: indicadores compactos de zanahorias, vidas y supersalto arriba a la izquierda; sin nombre ni etiqueta día/noche en la partida.

Versión web v7: terreno y arbustos cercanos con texturas de maqueta 3D, relieve y sombras, adaptados a día/noche.

Versión web v8: piso más ancho, separado del borde frontal; plantas y flores variadas y espaciadas en lugar de la fila densa de arbustos.

Versión web v9: recupera el terreno y los arbustos originales, con un ensanche pequeño de la cara superior para apoyar correctamente las patas y las piedras. Flores y helechos decoran los arbustos. Toda la vegetación cercana se desplaza a la misma velocidad que el piso.

Versión web v10: pequeñas matas de hojas y césped cruzan la unión entre arbustos y piso con alturas y tamaños variados. Rompen el corte recto y se desplazan junto con el terreno; el ancho del camino se conserva.

Versión web v11: Aventura pasa a ser un juego de plataformas con control izquierda/derecha y cámara que solo avanza. Diez recorridos de prueba combinan salto, supersalto, agacharse, deslizamiento, mordida, descanso, agua, precipicios, troncos móviles, túneles, lobos y arañas. Conserva los gráficos actuales y agrega poses de Norberto y Filiberta y objetos con el mismo estilo. Incluye controles táctiles, pausa, selección de nivel y progreso local. Los niveles son borradores para diseñar y equilibrar; los récords mundiales siguen correspondiendo al modo Infinito. El flujo publica assets/bunner-web-v11.zip.

Versión web v12: las orillas de precipicios y ríos usan dos terminaciones 3D con musgo, tierra y raíces. El barranco tiene un fondo con profundidad y el río combina superficie horizontal, espuma y una catarata vertical. Conserva las distancias y colisiones del recorrido. El flujo publica assets/bunner-web-v12.zip.

Versión web v13: los huecos secos se ven excavados en el terreno, con borde de pasto y pared interior de tierra, raíces y piedras. La textura se mueve junto al piso y lleva sombra para dar profundidad. El flujo publica assets/bunner-web-v13.zip.
