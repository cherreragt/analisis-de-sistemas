const pregunta = (tema, texto, opciones, correcta, explicacion, paginas) => ({
  tema, pregunta: texto, opciones, correcta, explicacion, paginas
});

export const pruebasDirectas = [
  {
    semana: 5,
    titulo: 'Preguntas directas: componentes y patrones GoF',
    archivo: 'Semana5-Componentes-y-Patrones-GoF.pdf',
    preguntas: [
      pregunta('Concepto', '¿Qué es un patrón de diseño?', ['Una solución reutilizable a un problema de diseño recurrente', 'Una librería que se instala en el proyecto', 'Una prueba automática del sistema'], 0, 'Un patrón describe una estructura probada y con nombre para resolver un problema que se repite. No es código obligatorio para copiar y pegar.', [12]),
      pregunta('Strategy', '¿Qué resuelve principalmente el patrón Strategy?', ['La creación de familias de objetos', 'El intercambio de algoritmos mediante una interfaz común', 'La construcción de interfaces gráficas'], 1, 'Strategy encapsula algoritmos intercambiables detrás de un contrato común, como distintas formas de calcular interés.', [21]),
      pregunta('Factory Method', '¿Para qué se utiliza Factory Method en el material?', ['Para decidir qué objeto concreto crear', 'Para notificar cambios a varios interesados', 'Para añadir cargos a una cuota'], 0, 'Factory Method desacopla al cliente de las clases concretas que debe instanciar. El ejemplo del curso concentra la creación de los tipos de crédito.', [15]),
      pregunta('Builder', '¿Cuándo resulta útil el patrón Builder?', ['Cuando un objeto complejo se construye paso a paso', 'Cuando varios módulos escuchan un evento', 'Cuando se necesita una única variable global'], 0, 'Builder separa la construcción de la representación final y hace legibles los parámetros de objetos complejos, como un plan de amortización.', [16]),
      pregunta('Decorator', '¿Qué permite hacer Decorator?', ['Añadir responsabilidades combinables sin modificar la clase original', 'Ocultar todos los errores de una operación', 'Crear una base de datos compartida'], 0, 'Decorator envuelve un objeto que cumple la misma interfaz y agrega comportamiento por composición.', [18]),
      pregunta('Facade', '¿Cuál es el propósito de Facade?', ['Ofrecer una interfaz simple para coordinar un subsistema complejo', 'Cambiar el estado interno de un objeto', 'Duplicar las operaciones de varios componentes'], 0, 'Facade ofrece una entrada sencilla y oculta la coordinación interna de varios componentes, como la generación del cierre diario.', [19]),
      pregunta('Observer', '¿Qué ocurre en el patrón Observer?', ['Un objeto notifica a varios suscriptores cuando sucede un evento', 'Un constructor recibe muchos parámetros', 'Una clase crea todos los objetos del sistema'], 0, 'Observer desacopla al emisor de las reacciones concretas de los suscriptores.', [22]),
      pregunta('Catálogo GoF', '¿Cómo se agrupan los 23 patrones GoF?', ['Creacionales, estructurales y de comportamiento', 'Frontend, backend y base de datos', 'Públicos, privados y protegidos'], 0, 'El catálogo contiene 5 patrones creacionales, 7 estructurales y 11 de comportamiento.', [13])
    ]
  },
  {
    semana: 6,
    titulo: 'Preguntas directas: APIs, contratos y OpenAPI',
    archivo: 'Semana6-Presentacion-APIs-Contratos-OpenAPI.pdf',
    preguntas: [
      pregunta('Contrato', '¿Cuáles son las tres partes del diseño por contrato?', ['Precondiciones, poscondiciones e invariantes', 'Rutas, colores y pantallas', 'Controladores, servicios y repositorios'], 0, 'Las precondiciones indican lo que debe cumplirse antes; las poscondiciones, lo garantizado después; las invariantes, lo que siempre debe mantenerse.', [4]),
      pregunta('Idempotencia', '¿Qué evita una Idempotency-Key al registrar un pago?', ['Que un reintento duplique la misma operación', 'Que dos usuarios editen el mismo recurso', 'Que una consulta devuelva información'], 0, 'La clave identifica una intención. Al repetir el mismo cuerpo con la misma clave, el servidor reproduce el resultado sin cobrar nuevamente.', [14]),
      pregunta('Concurrencia', '¿Qué problema resuelven ETag e If-Match?', ['La actualización perdida por escribir sobre una versión antigua', 'La pérdida de conexión del navegador', 'La creación de documentación HTML'], 0, 'El servidor compara la versión utilizada por el cliente y puede rechazar una escritura basada en datos desactualizados.', [15]),
      pregunta('Dinero', '¿Cómo recomienda el material representar un monto en JSON?', ['Como cadena decimal acompañada de la moneda', 'Como número flotante sin moneda', 'Como una frase escrita por el usuario'], 0, 'La cadena preserva los decimales y la moneda evita mezclar unidades distintas.', [19]),
      pregunta('Errores', '¿Qué estándar define el formato Problem Details para errores HTTP?', ['RFC 9457', 'WCAG 2.2', 'ISO 4217 únicamente'], 0, 'RFC 9457 define un formato uniforme para comunicar problemas mediante application/problem+json.', [17]),
      pregunta('OpenAPI', '¿Qué es OpenAPI?', ['Una especificación legible por máquinas para describir contratos de APIs HTTP', 'Un servidor web obligatorio', 'Un lenguaje para diseñar bases de datos'], 0, 'OpenAPI describe rutas, parámetros, cuerpos, respuestas y esquemas del contrato; no implementa las reglas del negocio.', [25, 26]),
      pregunta('Swagger', '¿Quién creó Swagger en 2011?', ['Tony Tam', 'Jakob Nielsen', 'Jesse James Garrett'], 0, 'Tony Tam creó Swagger en Wordnik para describir la API de su diccionario en línea.', [23]),
      pregunta('Vocabulario', '¿Cuál es la diferencia correcta entre OpenAPI y Swagger UI?', ['OpenAPI es la especificación y Swagger UI es una herramienta para visualizarla', 'OpenAPI es el frontend y Swagger UI la base de datos', 'Son dos protocolos de red diferentes'], 0, 'La especificación se denomina OpenAPI; Swagger UI es una herramienta que interpreta y presenta ese contrato.', [23, 25])
    ]
  },
  {
    semana: 7,
    titulo: 'Preguntas directas: experiencia de usuario',
    archivo: 'Semana7-Presentacion-Analisis-Sistemas-II-037.pdf',
    preguntas: [
      pregunta('UX y UI', '¿Cuál es la diferencia principal entre UX y UI?', ['UX abarca la experiencia completa; UI es la superficie de interacción', 'UX se limita a colores; UI incluye toda la experiencia', 'Son exactamente el mismo concepto'], 0, 'UX incluye lo que la persona percibe, hace y siente para alcanzar un objetivo. UI comprende controles, disposición y apariencia.', [6]),
      pregunta('Garrett', '¿Quién propuso el modelo de los cinco planos de la experiencia de usuario?', ['Jesse James Garrett', 'Tony Tam', 'Bertrand Meyer'], 0, 'Jesse James Garrett desarrolló el modelo que organiza estrategia, alcance, estructura, esqueleto y superficie.', [7]),
      pregunta('Estrategia', '¿Qué se define en el plano de estrategia?', ['Necesidades del usuario y objetivos del negocio', 'Colores y tipografía', 'Ubicación exacta de los botones'], 0, 'La estrategia establece para quién se diseña, qué necesita esa persona y qué busca el negocio.', [7]),
      pregunta('Alcance', '¿Qué se define en el plano de alcance?', ['Funciones y contenidos que tendrá el producto', 'La posición de cada control', 'La paleta de colores final'], 0, 'El alcance transforma las necesidades en funciones y contenidos concretos.', [7]),
      pregunta('Estructura', '¿Qué se trabaja en el plano de estructura?', ['La organización de la información y los flujos de interacción', 'El tamaño de la letra', 'La tasa de interés del crédito'], 0, 'La estructura define cómo se organiza el contenido y cómo avanza la persona entre acciones.', [7]),
      pregunta('Esqueleto', '¿Qué se decide en el plano de esqueleto?', ['Dónde se ubican la información, navegación y controles', 'Qué necesita el negocio', 'Qué lenguaje de programación usar'], 0, 'El esqueleto concreta la disposición de los elementos mediante wireframes y decisiones de jerarquía.', [7]),
      pregunta('Persona', '¿Qué es una persona en UX?', ['Un arquetipo fundamentado en datos de usuarios reales', 'Un usuario inventado solo con edad y fotografía', 'El administrador de la base de datos'], 0, 'Una persona resume patrones de objetivos, contexto y frustraciones obtenidos mediante investigación.', [13, 14]),
      pregunta('Journey map', '¿Qué representa un journey map?', ['El recorrido completo del usuario con etapas, acciones, emociones y oportunidades', 'Únicamente las tablas de la base de datos', 'Solo el menú principal de una aplicación'], 0, 'El journey map muestra el recorrido completo y ayuda a localizar dolores y oportunidades de mejora.', [17])
    ]
  },
  {
    semana: 8,
    titulo: 'Preguntas directas: UI, Nielsen y WCAG',
    archivo: 'Semana8-Presentacion-Analisis-Sistemas-II-037.pdf',
    preguntas: [
      pregunta('Design token', '¿Qué es un design token?', ['Una variable con nombre para una decisión visual reutilizable', 'Un código temporal para iniciar sesión', 'Una imagen utilizada como fondo'], 0, 'Un token centraliza valores como colores, tipografía, espaciado o radios y permite reutilizarlos consistentemente.', [4]),
      pregunta('Nielsen', '¿Cuántas heurísticas de usabilidad de Nielsen se estudian?', ['Diez', 'Cuatro', 'Veintitrés'], 0, 'El curso utiliza la lista de diez heurísticas depurada por Jakob Nielsen en 1994.', [13, 14, 15]),
      pregunta('Estado', '¿Qué heurística exige informar al usuario qué está ocurriendo?', ['Visibilidad del estado del sistema', 'Diseño estético y minimalista', 'Ayuda y documentación'], 0, 'La primera heurística busca que el usuario comprenda si una acción está en proceso, terminó o falló.', [14]),
      pregunta('POUR', '¿Qué significa POUR?', ['Perceptible, Operable, Comprensible y Robusto', 'Privado, Ordenado, Uniforme y Rápido', 'Página, Operación, Usuario y Respuesta'], 0, 'POUR agrupa los criterios WCAG en cuatro principios de accesibilidad.', [18]),
      pregunta('Contraste', '¿Cuál es el contraste mínimo AA indicado para texto normal?', ['4.5:1', '3:1', '2:1'], 0, 'El texto normal necesita al menos 4.5:1. El umbral de 3:1 corresponde al texto grande.', [21]),
      pregunta('Tamaño', '¿Cuál es el tamaño mínimo de objetivo táctil presentado para WCAG 2.2?', ['24×24 px CSS', '10×10 px CSS', '100×100 px CSS'], 0, 'El material presenta 24×24 px CSS para 2.5.8 Target Size (Minimum), considerando sus excepciones al evaluar casos reales.', [20]),
      pregunta('Zoom', '¿Qué exige el criterio 1.4.4 Texto redimensionable?', ['Que el contenido siga siendo legible al aumentar el texto hasta 200 %', 'Que todas las imágenes midan 200 px', 'Que el sitio tenga exactamente dos columnas'], 0, 'El contenido debe poder ampliarse hasta 200 % sin perder información o funcionalidad.', [21]),
      pregunta('Severidad', '¿Qué valores utiliza la escala de severidad de Nielsen?', ['De 0 a 4', 'De 1 a 10', 'Solo alto y bajo'], 0, 'La escala va de 0, no es problema, a 4, problema catastrófico.', [16])
    ]
  },
  {
    semana: 9,
    titulo: 'Preguntas directas: movilidad y web',
    archivo: 'Semana9_Presentacion.pdf',
    preguntas: [
      pregunta('PWA', '¿Qué es una PWA?', ['Una aplicación web instalable con capacidades como trabajo sin conexión', 'Una base de datos exclusiva para teléfonos', 'Un lenguaje de programación móvil'], 0, 'Una Progressive Web App es una aplicación web que puede instalarse y utilizar capacidades de la plataforma web.', [5, 7]),
      pregunta('Service Worker', '¿Cuál es la función principal de un Service Worker?', ['Interceptar solicitudes y aplicar estrategias de caché', 'Definir los colores de la aplicación', 'Calcular automáticamente intereses'], 0, 'El Service Worker actúa entre la aplicación y la red y permite servir recursos almacenados.', [7]),
      pregunta('Manifest', '¿Qué información declara el manifest.json?', ['Nombre, iconos, colores y datos de instalación de la aplicación', 'Las tablas y relaciones de la base de datos', 'Las pruebas unitarias del sistema'], 0, 'El manifiesto aporta la identidad necesaria para que la PWA pueda presentarse e instalarse como aplicación.', [7]),
      pregunta('Responsive', '¿Cuáles son los tres mecanismos de diseño responsivo presentados?', ['Cuadrículas fluidas, media queries e imágenes flexibles', 'Tablas fijas, ventanas emergentes y cookies', 'Java, SQL y XML'], 0, 'Estos mecanismos permiten que el contenido se adapte al espacio disponible sin desbordarse.', [8]),
      pregunta('Mobile-first', '¿Qué significa mobile-first?', ['Diseñar primero para el contexto más restringido y luego enriquecer', 'Diseñar en escritorio y ocultar lo que no quepa', 'Crear únicamente una aplicación nativa'], 0, 'Mobile-first obliga a priorizar lo esencial para pantallas pequeñas, una mano y conexiones limitadas.', [9]),
      pregunta('Mejora progresiva', '¿Cuál es el orden de las capas de mejora progresiva?', ['Contenido, estructura, presentación y comportamiento', 'Comportamiento, presentación, contenido y estructura', 'Base de datos, servidor y teléfono'], 0, 'Cada capa mejora la anterior sin hacer que la información esencial dependa totalmente de capas superiores.', [10]),
      pregunta('Arquitectura', '¿Qué opción ofrece máximo rendimiento y acceso completo al hardware?', ['Aplicación nativa', 'PWA', 'Página HTML sin JavaScript'], 0, 'La aplicación nativa se desarrolla para el sistema operativo y ofrece acceso completo a sus capacidades.', [5, 6]),
      pregunta('Design Review', '¿En qué consiste la regla del silencio durante un Design Review?', ['El equipo autor observa sin explicar cómo usar el prototipo', 'Los evaluadores no pueden tocar el prototipo', 'Nadie puede registrar hallazgos'], 0, 'El silencio permite observar dónde se atasca una persona sin que el autor compense las fallas con explicaciones.', [17, 18])
    ]
  }
];
