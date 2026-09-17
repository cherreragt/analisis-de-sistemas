# Análisis de Sistemas II

Cinco exámenes con 60 casos y 5 preguntas de datos clave (65 en total) basados en las presentaciones de las semanas 5 a 9. Incluyen casos fintech, selección de patrones GoF y tres refactorizaciones explicadas.

También incluye cinco pruebas de preguntas directas, una por semana, con 106 preguntas en total y 3 opciones por pregunta. Cada concepto se evalúa por separado: 20 preguntas en las semanas 5, 6, 7 y 9, y 26 en la semana 8 por la amplitud de Nielsen, WCAG 2.2 y POUR. Se accede desde `analisis-de-sistema/preguntas-directas.html`.

La carpeta `analisis-de-sistema` contiene los HTML. Se usa este nombre sin tildes ni espacios para facilitar sus URLs. La portada está en `index.html`.

## Uso

Abre `index.html` o sirve la carpeta con `python -m http.server 8000`. No hay dependencias de ejecución, servicios externos ni recolección de datos. Las selecciones y textos no se guardan al recargar. Las respuestas están disponibles para estudiar: no es un sistema de evaluación vigilada.

Cada examen califica sobre 15: aciertos / total de preguntas × 15. Omitidas e incorrectas valen cero. Al cambiar una respuesta después de calificar, la nota anterior se invalida. Las preguntas abiertas del taller se autoevalúan con rúbricas independientes.

## GitHub Pages

En Settings → Pages selecciona Deploy from a branch, rama `main`, carpeta `/ (root)` y guarda. La URL esperada después de la publicación es https://cherreragt.github.io/analisis-de-sistemas/ . La existencia del código no implica que Pages ya esté activado.

## Edición y referencias

Los casos están en `banco.mjs` y las preguntas conceptuales en `banco-directas.mjs`; `node generar.mjs` regenera los HTML. Se entregan HTML estáticos, por lo que GitHub Pages no necesita ejecutar Node. Las explicaciones citan el nombre del PDF y la página física del archivo, no necesariamente el folio impreso. Los PDF originales no se republican.

Fuentes: Semana5-Componentes-y-Patrones-GoF.pdf; Semana6-Presentacion-APIs-Contratos-OpenAPI.pdf; Semana7-Presentacion-Analisis-Sistemas-II-037.pdf; Semana8-Presentacion-Analisis-Sistemas-II-037.pdf; Semana9_Presentacion.pdf.

Los escenarios y las soluciones de código son adaptaciones didácticas originales. Los fragmentos TypeScript usan contratos del dominio que se señalan explícitamente y no pretenden ser un servicio financiero completo. La fábrica con switch del material se distingue del Factory Method clásico. El ejercicio de mora de Semana 7 sigue el ejemplo numérico de su página física 24.

## UX y UI
Diseño responsive con cuadrícula adaptable, controles táctiles amplios, navegación por teclado, foco visible, radios con etiquetas, grupos con fieldset/legend, estados textuales además del color, aviso de progreso y foco en el resultado. El contenido y las soluciones pueden leerse sin JavaScript; la calificación automática lo requiere. Las respuestas de práctica no son un examen oficial.

## Vista previa del enlace

Ambos índices declaran título y descripción Open Graph y Twitter como «Resumen de casos de uso». Las páginas de examen mantienen metadatos propios. Los metadatos son de texto; la aplicación que recibe el enlace decide cómo mostrarlos y puede conservar una versión en caché.
