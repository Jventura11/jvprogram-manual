# Manual de JV Program 5.0

Manual de uso de JV Program, el sistema de control de producción de VLR México.
Sitio estático: se publica con GitHub Pages y se consulta desde cualquier navegador,
sin instalar ni iniciar sesión.

## Qué hay aquí

| Archivo | Contenido |
|---|---|
| `index.html` | Cómo funcionan todas las pantallas: capturar, buscar, filtrar, exportar, atajos |
| `produccion.html` | Las diez pantallas de producción, de corte a embarque |
| `calidad.html` | Inspecciones y los tres catálogos de calidad |
| `lineas.html` | Pantallas de TV por línea y la captura diaria que las alimenta |
| `catalogos.html` | Plantilla, áreas, supervisores, markers y usuarios |
| `datos.html` | Master Plan, tiempos, cancelados y los tres reportes |
| `preguntas.html` | Mensajes del sistema, qué hacer cuando algo no aparece, y preguntas frecuentes |
| `estilo.css` | Hoja de estilo única, con tema claro y oscuro |
| `buscar.js` | Buscador dentro de cada página. No consulta nada externo |

## Este repositorio es público. Qué NO va aquí

Este manual está escrito **sin datos reales** y debe seguir así:

- Sin nombres de empleados, supervisores ni usuarios.
- Sin nombres de servidores, bases de datos, rutas internas ni cadenas de conexión.
- Sin nombres de clientes, números de orden reales ni volúmenes de producción.
- Sin capturas de pantalla que muestren cualquiera de lo anterior.
- Sin código fuente del sistema.

Todos los ejemplos son ficticios. Si hace falta ilustrar algo con datos verdaderos,
no va en este repositorio.

## Cómo publicarlo

1. Subir este repositorio a GitHub, en **público**.
2. En GitHub: **Settings → Pages**.
3. En *Source*, elegir **Deploy from a branch**; rama `main`, carpeta `/ (root)`.
4. Guardar. En un par de minutos queda en
   `https://<usuario>.github.io/<repositorio>/`.

El archivo `.nojekyll` está a propósito: evita que GitHub intente procesar el sitio
con Jekyll y lo sirve tal cual.

## Cómo editarlo

Son archivos HTML normales, sin compilación ni dependencias. Se editan con cualquier
editor de texto y los cambios se ven al recargar el navegador.

Para agregar una pantalla nueva, copiar un bloque `<div class="pantalla" id="...">`
de `produccion.html`, cambiarle el contenido, y agregar el enlace correspondiente en
el `<nav>` de las tres páginas.

## Estado

Las treinta pantallas del sistema están cubiertas. Lo que puede mejorar:

- Capturas de pantalla (hoy no lleva ninguna, a propósito: ver la regla de arriba
  antes de agregar una).
- Una guía corta de primer día para alguien que nunca ha usado el sistema.
- Traducción, si alguna vez hace falta.

---

Uso interno de VLR México. Autor: Jorge Ventura.
