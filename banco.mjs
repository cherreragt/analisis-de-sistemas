// Casos originales de práctica. Referencias: páginas físicas de los PDF.
export const examenes = [
  {
    "semana": 5,
    "titulo": "Componentes y patrones GoF",
    "archivo": "Semana5-Componentes-y-Patrones-GoF.pdf",
    "preguntas": [
      {
        "tema": "Créditos para distintos clientes",
        "pregunta": "Crédito Vecino ofrece préstamos personales y agrícolas. En los personales, los intereses se calculan de una manera; en los agrícolas, de otra. Cada vez que el comité aprueba una nueva forma de cálculo, el equipo debe modificar el mismo método y corre el riesgo de afectar los préstamos anteriores. Se requiere incorporar nuevas formas de calcular sin modificar el componente que las utiliza. ¿Qué patrón de diseño resulta más adecuado?",
        "opciones": [
          "Observer",
          "Facade",
          "Builder",
          "Strategy"
        ],
        "correcta": 3,
        "explicacion": "Strategy encapsula cada algoritmo detrás del mismo contrato y lo inyecta en el consumidor. Factory atiende la creación de objetos; aquí cambia el comportamiento de cálculo.",
        "paginas": [
          21,
          25
        ]
      },
      {
        "tema": "Un nuevo producto de crédito",
        "pregunta": "Una financiera incorporará un préstamo para comerciantes. Actualmente, los módulos de solicitudes, desembolsos y renovaciones crean por su cuenta los objetos de cada tipo de préstamo. Para agregar el nuevo producto habría que modificar los tres módulos, aunque después todos utilizan las mismas operaciones del crédito. ¿Qué solución permite concentrar la decisión de qué objeto crear?",
        "opciones": [
          "Decorator",
          "Strategy",
          "Observer",
          "Factory Method / fábrica de créditos"
        ],
        "correcta": 3,
        "explicacion": "La fábrica concentra la selección e instanciación y devuelve el contrato Credito. El PDF denomina Factory Method a su fábrica con switch; técnicamente ese ejemplo corresponde a una fábrica simple. El Factory Method clásico permite que subclases especialicen el método creador.",
        "paginas": [
          15
        ]
      },
      {
        "tema": "Preparación de un plan de pagos",
        "pregunta": "Una asesora prepara planes de pago con monto, tasa, plazo, día de cobro y, en algunos casos, meses de gracia. Al crear cada plan, el sistema recibe una lista larga de valores y los programadores han confundido varias veces el plazo con el día de cobro. Se busca expresar cada dato con claridad y entregar el plan solo cuando esté completo y validado. ¿Qué patrón elegiría?",
        "opciones": [
          "Strategy",
          "Facade",
          "Observer",
          "Builder"
        ],
        "correcta": 3,
        "explicacion": "Builder expresa la construcción por pasos con nombres como conPlazo y conDiaPago. construir valida que el resultado esté completo y respete sus invariantes. No sustituye la validación de dominio.",
        "paginas": [
          16
        ]
      },
      {
        "tema": "Cargos que pueden combinarse",
        "pregunta": "Una cooperativa permite que ciertos créditos incluyan seguro y que otros tengan gastos de gestión. Algunos necesitan ambos cargos y otros ninguno. El sistema ha creado una clase diferente para cada combinación; al agregar un tercer cargo, la cantidad de clases aumenta. ¿Qué patrón permitiría combinar estos cargos conservando una forma común de consultar el total de la cuota?",
        "opciones": [
          "Factory Method",
          "Strategy",
          "Builder",
          "Decorator"
        ],
        "correcta": 3,
        "explicacion": "Decorator envuelve un componente y conserva su interfaz, agregando responsabilidades por composición. Las reglas y el orden de cargos deben seguir el dominio; el patrón por sí mismo no define la prelación de pagos.",
        "paginas": [
          18
        ]
      },
      {
        "tema": "El cierre de la agencia",
        "pregunta": "Al terminar el día, la administradora de una agencia solicita un informe de desembolsos, cobros, mora, cartera en riesgo y castigos. La pantalla de gerencia y la de contabilidad repiten la misma secuencia de consultas y cálculos para armarlo. Cuando cambia la secuencia, una pantalla suele quedar desactualizada. ¿Qué patrón permitiría que ambas soliciten el cierre mediante una sola operación?",
        "opciones": [
          "Facade",
          "Builder",
          "Observer",
          "Decorator"
        ],
        "correcta": 0,
        "explicacion": "Una fachada ofrece generarCierre(fecha) y coordina colaboradores. No debe absorber sus cálculos: estos permanecen en componentes especializados. El material exige presentar cartera en riesgo junto con castigos.",
        "paginas": [
          19
        ]
      },
      {
        "tema": "Avisos al detectar un atraso",
        "pregunta": "Cuando una cuota pasa a estar atrasada, la financiera debe avisar al asesor, actualizar el tablero de gerencia y registrar lo ocurrido en auditoría. Ahora se quiere añadir un aviso al supervisor, pero el equipo no desea modificar otra vez el componente que detecta los atrasos. ¿Qué patrón permite incorporar nuevos interesados en ese evento?",
        "opciones": [
          "Observer",
          "Factory Method",
          "Facade",
          "Builder"
        ],
        "correcta": 0,
        "explicacion": "Observer permite suscribir receptores a un evento mediante una interfaz común. Agregar un receptor no obliga a modificar el motor. Esto no garantiza por sí solo entrega durable ni ejecución exactamente una vez.",
        "paginas": [
          22
        ]
      },
      {
        "tema": "Un cambio pequeño afecta toda la clase",
        "pregunta": "La clase GestorCredito calcula intereses, arma contratos PDF, envía correos y consulta el tipo de cambio. Una modificación del formato del contrato obliga al equipo a revisar esa misma clase y comprobar que los cálculos no se dañaron. Como responsable del diseño, ¿qué diagnóstico y mejora propondría?",
        "opciones": [
          "Alta cohesión; conservar todo porque pertenece al negocio de créditos",
          "Problema de nombres; renombrar la clase sin cambiar sus responsabilidades",
          "Baja cohesión; separar responsabilidades e inyectar interfaces",
          "Problema de instancias; convertir GestorCredito en Singleton"
        ],
        "correcta": 2,
        "explicacion": "Son motivos de cambio distintos dentro de un solo componente. Separar CalculadoraInteres, GeneradorContrato, NotificadorCorreo y ConsultorTipoCambio facilita modificar y reutilizar cada responsabilidad.",
        "paginas": [
          9,
          11
        ]
      },
      {
        "tema": "Saldos modificados desde varios lugares",
        "pregunta": "El módulo de cobros cambia directamente una propiedad interna del crédito para reducir su saldo. El módulo de ajustes hace lo mismo, pero aplica una regla diferente. Cuando cambia la manera de guardar el saldo, ambos dejan de funcionar. ¿Qué cambio de diseño permite proteger las reglas del crédito y reducir esa dependencia?",
        "opciones": [
          "Exponer operaciones de dominio mediante un contrato",
          "Agregar banderas para indicar cómo modificar las propiedades internas",
          "Duplicar el cálculo del saldo en cada consumidor",
          "Compartir la estructura interna del crédito entre todos los módulos"
        ],
        "correcta": 0,
        "explicacion": "Acceder al estado interno produce acoplamiento por contenido. Un contrato explícito oculta la implementación y permite que el componente proteja sus invariantes.",
        "paginas": [
          8,
          10
        ]
      },
      {
        "tema": "Un centavo de diferencia",
        "pregunta": "Un desarrollador reorganiza la calculadora de cuotas para facilitar su mantenimiento. El requisito indica que ningún resultado debe cambiar; sin embargo, un préstamo que antes tenía una cuota de Q500.00 ahora muestra Q500.01. El código compila y la estructura parece más ordenada. ¿Puede aceptarse como una refactorización correcta?",
        "opciones": [
          "Sí, porque la diferencia es pequeña",
          "Sí, porque compilar demuestra que el cálculo se conservó",
          "No: debe preservar el comportamiento observable",
          "Sí, si se cambia el resultado esperado de la prueba"
        ],
        "correcta": 2,
        "explicacion": "Refactorizar cambia la estructura sin cambiar el comportamiento observable. Primero hay que conservar resultados y contratos, usando las pruebas existentes como red de seguridad; agregar una nueva política es un cambio funcional separado.",
        "paginas": [
          24
        ]
      },
      {
        "tema": "La misma regla en muchos archivos",
        "pregunta": "El comité cambia una regla de cálculo. Para aplicarla, el equipo debe editar por separado solicitudes, renovaciones, simulaciones y reportes. En la última actualización olvidó uno de esos lugares y dos pantallas mostraron resultados distintos. ¿Qué problema de diseño refleja principalmente esta situación?",
        "opciones": [
          "Inmutabilidad de los datos",
          "Alta cohesión entre los componentes",
          "Construcción correcta mediante Builder",
          "Shotgun Surgery y acoplamiento"
        ],
        "correcta": 3,
        "explicacion": "Un cambio disperso indica que la responsabilidad no está bien localizada. Encapsular la política detrás de una interfaz reduce la propagación. El patrón se elige por el problema identificado, no para aumentar el número de clases.",
        "paginas": [
          25,
          26
        ]
      },
      {
        "tema": "Tres necesidades de la misma financiera",
        "pregunta": "Un equipo propone Builder para preparar planes de pago, Decorator para agregar cargos a las cuotas y Observer para notificar atrasos. El docente solicita clasificar los tres patrones según el tipo de problema que resuelven. ¿Cuál es el orden correcto?",
        "opciones": [
          "Comportamiento, estructural, creacional",
          "Creacional, estructural, comportamiento",
          "Creacional, comportamiento, estructural",
          "Estructural, creacional, comportamiento"
        ],
        "correcta": 1,
        "explicacion": "Builder organiza la creación; Decorator compone objetos; Observer distribuye reacciones a eventos. El catálogo tiene 5 patrones creacionales, 7 estructurales y 11 de comportamiento.",
        "paginas": [
          13,
          23
        ]
      },
      {
        "tema": "Una solución más compleja que el problema",
        "pregunta": "Una cooperativa usa una función corta para aplicar una única regla estable. No hay variantes previstas ni problemas de mantenimiento identificados. Un desarrollador propone reemplazarla por numerosas clases para demostrar el uso de patrones. Antes de aprobar el cambio, ¿qué recomendaría?",
        "opciones": [
          "Elegir un patrón por cada línea de la función",
          "Mantener la simplicidad y justificar cada patrón por una necesidad",
          "Aplicar todos los patrones disponibles para anticipar cualquier cambio",
          "Agregar una fábrica aunque no existan variantes de objetos"
        ],
        "correcta": 1,
        "explicacion": "El material advierte contra la sobreingeniería. Un patrón es una estructura útil para un problema recurrente, no una obligación ni un reemplazo del análisis.",
        "paginas": [
          12
        ]
      }
    ]
  },
  {
    "semana": 6,
    "titulo": "APIs, contratos y OpenAPI",
    "archivo": "Semana6-Presentacion-APIs-Contratos-OpenAPI.pdf",
    "preguntas": [
      {
        "tema": "Condiciones para recibir un abono",
        "pregunta": "Una cooperativa define las reglas del servicio de pagos: antes de aceptar un abono, el monto debe ser positivo; al terminar, debe existir un único registro del pago; en todo momento, el capital pendiente debe ser mayor o igual a cero. El analista debe organizar estas reglas en el contrato. ¿Cómo se clasifican, en ese orden?",
        "opciones": [
          "Precondición, poscondición e invariante",
          "Invariante, precondición y poscondición",
          "Tres poscondiciones",
          "Tres códigos de error"
        ],
        "correcta": 0,
        "explicacion": "La precondición obliga a quien llama; la poscondición describe lo garantizado al terminar; la invariante debe sostenerse antes y después. El contrato debe documentar también los errores.",
        "paginas": [
          4
        ]
      },
      {
        "tema": "El cobro cuya respuesta no llegó",
        "pregunta": "Rosa entrega Q500 al asesor. Él registra el pago desde el teléfono, pero la señal se pierde antes de que aparezca la confirmación. El servidor ya guardó el movimiento y la aplicación intentará enviarlo otra vez. ¿Qué debe conservar ese segundo envío para que el servidor pueda reconocer que corresponde al mismo pago?",
        "opciones": [
          "Únicamente la fecha del teléfono",
          "La misma Idempotency-Key y el mismo cuerpo",
          "La versión de la política de tasas",
          "Un identificador nuevo para cada intento"
        ],
        "correcta": 1,
        "explicacion": "La clave identifica la intención de pago y se reutiliza en sus reintentos. El servidor conserva la respuesta y la huella del cuerpo para no aplicar el movimiento nuevamente.",
        "paginas": [
          13,
          14
        ]
      },
      {
        "tema": "Un identificador usado para dos montos",
        "pregunta": "El servicio recibió un pago de Q500 con el identificador de operación ABC y guardó su resultado. Minutos después llega otra petición con ABC, pero ahora solicita registrar Q700. El contrato sigue las reglas de idempotencia de la presentación. ¿Cómo debe responder el servidor?",
        "opciones": [
          "409 sin sobrescribir la operación anterior",
          "200 y sustituir el pago anterior por Q700",
          "Registrar Q200 adicionales para completar la diferencia",
          "Aceptar el segundo monto como un pago nuevo"
        ],
        "correcta": 0,
        "explicacion": "Una clave ya representa una operación concreta. Si cambia la huella del cuerpo, se rechaza con conflicto. Reutilizarla para otra intención ocultaría un error del cliente.",
        "paginas": [
          14
        ]
      },
      {
        "tema": "Dos personas editan la misma política",
        "pregunta": "Ana y Luis abren la política de tasas cuando está en la versión 7. Ana cambia una tasa y guarda la versión 8. Luis, que todavía ve la información anterior, agrega una comisión y pulsa Guardar. Se desea impedir que su copia vieja borre el cambio de Ana. ¿Qué mecanismo y respuesta corresponden?",
        "opciones": [
          "Cambiar la operación de escritura a GET",
          "Reintentar la escritura hasta recibir 200",
          "ETag / If-Match y rechazo 412",
          "Generar una nueva clave de pago"
        ],
        "correcta": 2,
        "explicacion": "El bloqueo optimista verifica la versión usada como base de la escritura. El segundo asesor debe recargar y resolver el conflicto. La idempotencia atiende duplicados, no actualizaciones perdidas.",
        "paginas": [
          15
        ]
      },
      {
        "tema": "Reintentos después de una falla de red",
        "pregunta": "Una aplicación consulta el saldo mediante GET y reemplaza la dirección de un cliente mediante PUT. El equipo necesita decidir qué ocurre al repetir cada solicitud después de una falla de red. ¿Qué afirmación diferencia correctamente consultar sin pedir cambios de repetir una operación con el mismo efecto?",
        "opciones": [
          "POST siempre es idempotente sin mecanismos adicionales",
          "PUT es seguro porque es idempotente",
          "DELETE es seguro porque puede repetirse",
          "GET es seguro e idempotente; PUT es idempotente, pero modifica estado"
        ],
        "correcta": 3,
        "explicacion": "Seguro significa no solicitar una modificación del estado del recurso. Idempotente significa que repetir tiene el mismo efecto pretendido que hacerlo una vez; no exige respuestas idénticas en todos los intentos.",
        "paginas": [
          11
        ]
      },
      {
        "tema": "El mismo monto en dos sistemas",
        "pregunta": "La aplicación móvil y el sistema contable intercambian un pago de Q1,011.88. La financiera exige conservar exactamente los decimales y distinguir quetzales de dólares al recibir el dato. Según el contrato trabajado en clase, ¿qué representación debería enviar la aplicación?",
        "opciones": [
          "Un texto libre como mil once con ochenta y ocho",
          "El número 101188 sin documentar su unidad",
          "Un número decimal sin indicar moneda",
          "Un objeto {valor: \"1011.88\", moneda: \"GTQ\"}"
        ],
        "correcta": 3,
        "explicacion": "La cadena conserva la representación decimal y la moneda hace explícita la unidad. El receptor debe usar aritmética decimal o centavos enteros y validar la moneda; convertirlo enseguida a flotante pierde esa protección.",
        "paginas": [
          19
        ]
      },
      {
        "tema": "Un pago rechazado aparece como exitoso",
        "pregunta": "Una asesora intenta pagar un crédito cerrado. El servidor responde con código 200 y un texto que dice algo salió mal. La aplicación muestra la operación como exitosa porque interpreta ese código como una respuesta correcta. ¿Qué cambio haría que el rechazo se comunique de manera consistente?",
        "opciones": [
          "Enviar los detalles internos de la excepción al usuario",
          "Mantener 200 y depender únicamente del texto libre",
          "Responder siempre 500 ante cualquier rechazo",
          "Estado HTTP adecuado y Problem Details"
        ],
        "correcta": 3,
        "explicacion": "El código HTTP debe representar la falla y el cuerpo uniforme application/problem+json permite identificar y explicar el problema. Un 200 engaña a clientes y observabilidad; un stack trace expone detalles internos.",
        "paginas": [
          16,
          17
        ]
      },
      {
        "tema": "Un reporte cambia sin mostrar errores",
        "pregunta": "Gerencia utiliza el campo saldo para conocer capital más intereses. Una actualización del servicio mantiene el nombre y el tipo del campo, pero devuelve únicamente capital. Los reportes siguen abriendo, aunque ahora muestran menos deuda. ¿Qué cambio del contrato explica el problema?",
        "opciones": [
          "Agregar un endpoint",
          "Agregar un campo opcional tolerado",
          "Agregar un filtro opcional",
          "Cambiar saldo de total adeudado a solo capital"
        ],
        "correcta": 3,
        "explicacion": "Cambiar el significado puede corromper reportes sin producir un error sintáctico. El material lo identifica como especialmente peligroso: hay que gobernar y comunicar la evolución del contrato.",
        "paginas": [
          20,
          21
        ]
      },
      {
        "tema": "Registrar el abono de una clienta",
        "pregunta": "Marta visita la agencia para abonar a su crédito C-004. El equipo diseña una operación que creará un registro de pago asociado a ese crédito, mientras mantiene separada la consulta de su historial. ¿Qué combinación de método y ruta representa mejor el registro del abono?",
        "opciones": [
          "POST /creditos/C-004/pagos",
          "GET /registrarPago",
          "PUT /consultarHistorial",
          "GET /creditos/C-004/pagos?cobrar=si"
        ],
        "correcta": 0,
        "explicacion": "La ruta identifica recursos y el método expresa la operación. Registrar un pago cambia estado y no debe implementarse como una consulta GET.",
        "paginas": [
          9,
          10,
          11
        ]
      },
      {
        "tema": "Montos documentados de formas diferentes",
        "pregunta": "Al revisar la documentación de pagos, créditos y cierres, una analista encuentra diez copias de la definición de Dinero. Algunas exigen moneda y otras no, aunque deberían representar el mismo dato. ¿Qué recurso de OpenAPI permitiría mantener una definición compartida?",
        "opciones": [
          "components/schemas y referencias $ref",
          "Copiar manualmente el ejemplo de cada operación",
          "Documentar los montos únicamente con capturas",
          "Sustituir los esquemas por comentarios libres"
        ],
        "correcta": 0,
        "explicacion": "Los componentes reutilizables evitan divergencias. OpenAPI describe el contrato de la API en un formato procesable; no implementa por sí mismo reglas de negocio ni persistencia.",
        "paginas": [
          25,
          26
        ]
      },
      {
        "tema": "Dos equipos interpretan distinto un pago",
        "pregunta": "El equipo móvil supone que al registrar un abono recibirá un número de recibo. El equipo del servidor desarrolla una respuesta que solo indica éxito. Descubren la diferencia el día de integrar ambas partes. ¿Qué práctica habría reducido este desacuerdo antes de programar?",
        "opciones": [
          "Esperar a que los usuarios reporten el problema",
          "Acordar solo la apariencia de la pantalla",
          "Acordar primero petición, respuesta y errores del contrato",
          "Documentar únicamente después de terminar ambos sistemas"
        ],
        "correcta": 2,
        "explicacion": "Contract-first acuerda expectativas explícitas y permite trabajar con simulaciones. Aun así, hay que verificar que la implementación cumpla el contrato acordado.",
        "paginas": [
          7
        ]
      },
      {
        "tema": "Un teléfono se reconecta al día siguiente",
        "pregunta": "Un asesor registra un pago y el servidor lo guarda, pero el teléfono queda sin señal durante 30 horas y no recibe la confirmación. Al reconectarse, vuelve a enviar la misma operación. El servidor conserva los identificadores de pagos procesados durante solo 24 horas. ¿Qué riesgo debe considerarse al diseñar este reintento?",
        "opciones": [
          "Puede volver a procesarse si no hay otra protección",
          "El monto por sí solo identifica cualquier pago anterior",
          "El identificador se conserva aunque venza el plazo",
          "La versión de la política evita automáticamente el duplicado"
        ],
        "correcta": 0,
        "explicacion": "La protección depende de la ventana de retención. Una clave olvidada puede tratarse como nueva; documentar esta ventana es parte del contrato y del diseño de reintentos.",
        "paginas": [
          14
        ]
      }
    ]
  },
  {
    "semana": 7,
    "titulo": "UX y decisiones de experiencia",
    "archivo": "Semana7-Presentacion-Analisis-Sistemas-II-037.pdf",
    "preguntas": [
      {
        "tema": "Una aplicación bonita que no resuelve la visita",
        "pregunta": "Byron utiliza una aplicación con colores y botones bien diseñados. Durante sus visitas a comercios, al perder señal debe volver a escribir todos los datos del cobro. Al final del día tarda más que cuando usaba el cuaderno. ¿Qué conclusión describe mejor la experiencia de uso?",
        "opciones": [
          "La pérdida de datos no forma parte de la experiencia del usuario",
          "El problema se resuelve únicamente cambiando la tipografía",
          "La apariencia no garantiza una buena experiencia completa",
          "La UX es buena porque el diseño visual es consistente"
        ],
        "correcta": 2,
        "explicacion": "UX incluye lo que la persona hace y percibe para alcanzar su objetivo, antes, durante y después. UI es la superficie de interacción; una falla del recorrido puede arruinar la experiencia aunque la pantalla sea atractiva.",
        "paginas": [
          6,
          8
        ]
      },
      {
        "tema": "Antes de dibujar las pantallas",
        "pregunta": "Una financiera quiere reducir el tiempo que sus asesores dedican a cobrar en campo. Antes de definir funciones, el equipo entrevista a los asesores para entender qué necesitan lograr y conversa con gerencia sobre los objetivos del negocio. ¿En qué plano de Garrett se concentra este trabajo?",
        "opciones": [
          "Superficie",
          "Estrategia",
          "Esqueleto",
          "Alcance"
        ],
        "correcta": 1,
        "explicacion": "Estrategia relaciona las necesidades del usuario con los objetivos del negocio. El alcance decidirá funciones concretas; todavía se está entendiendo el objetivo.",
        "paginas": [
          7
        ]
      },
      {
        "tema": "Decidir qué ofrecerá el sistema",
        "pregunta": "Después de observar varias visitas, el equipo acuerda que la nueva aplicación permitirá registrar pagos sin conexión y consultar el último saldo disponible. Todavía no ha decidido el recorrido entre pantallas ni la ubicación de los botones. ¿A qué plano de Garrett corresponde esta definición?",
        "opciones": [
          "Superficie",
          "Alcance",
          "Estrategia",
          "Esqueleto"
        ],
        "correcta": 1,
        "explicacion": "Alcance delimita funciones y contenidos. Su flujo se definirá en estructura, su disposición en esqueleto y su apariencia en superficie.",
        "paginas": [
          7
        ]
      },
      {
        "tema": "Organizar el recorrido del cobro",
        "pregunta": "Un asesor debe elegir al cliente, consultar su crédito, revisar el monto y confirmar el pago. El equipo decide el orden de estos pasos y cómo podrá regresar a corregir información antes de confirmar. ¿Qué plano de Garrett está trabajando principalmente?",
        "opciones": [
          "Esqueleto",
          "Superficie",
          "Estructura",
          "Estrategia"
        ],
        "correcta": 2,
        "explicacion": "Estructura organiza la información y la interacción entre pasos. Esqueleto define dónde se ubican los controles dentro de esas pantallas.",
        "paginas": [
          7
        ]
      },
      {
        "tema": "Distribuir la información de la revisión",
        "pregunta": "El flujo de cobro ya fue acordado. En un boceto en papel, el equipo coloca el saldo arriba, el campo de monto al centro y el botón Confirmar debajo, para que el asesor revise los datos antes de aceptar. ¿A qué plano corresponde esta decisión?",
        "opciones": [
          "Esqueleto",
          "Superficie",
          "Alcance",
          "Estrategia"
        ],
        "correcta": 0,
        "explicacion": "Esqueleto se ocupa de la disposición y jerarquía de controles e información. Decidir el color y la tipografía del botón sería superficie.",
        "paginas": [
          7
        ]
      },
      {
        "tema": "El cuaderno que nadie mencionó",
        "pregunta": "En una entrevista, un asesor afirma que la aplicación le permite completar todas sus visitas. Sin embargo, el equipo observa que siempre lleva un cuaderno para anotar pagos cuando no tiene señal. Se necesita entender cómo combina ambos recursos durante su trabajo. ¿Qué método aportaría evidencia más directa?",
        "opciones": [
          "Preguntar solamente si le gusta la aplicación",
          "Observación contextual y revisión de artefactos",
          "Crear una persona sin consultar más datos",
          "Una encuesta sobre colores preferidos"
        ],
        "correcta": 1,
        "explicacion": "Observar el contexto y revisar cuadernos revela prácticas y soluciones informales que las entrevistas pueden omitir. La investigación debe fundamentar las decisiones con evidencia.",
        "paginas": [
          11
        ]
      },
      {
        "tema": "Una persona que no orienta decisiones",
        "pregunta": "Para diseñar la aplicación, un equipo inventa a Carlos, de 35 años, con una fotografía y algunas aficiones. No explica de dónde obtuvo sus necesidades ni cómo trabaja. Cuando deben decidir si priorizan el uso sin conexión, la ficha no ayuda. ¿Qué le falta principalmente?",
        "opciones": [
          "Evidencia sobre objetivos, frustraciones y contexto de usuarios reales",
          "Más características demográficas inventadas",
          "Una fotografía de mayor calidad",
          "Un color favorito para elegir la interfaz"
        ],
        "correcta": 0,
        "explicacion": "Una persona es un arquetipo basado en datos, no un personaje decorativo ni un promedio demográfico. Debe ayudar a tomar decisiones de diseño.",
        "paginas": [
          13,
          14
        ]
      },
      {
        "tema": "Describir una situación antes de diseñar",
        "pregunta": "El docente solicita un escenario de uso para que el equipo pueda proponer distintas soluciones de cobro. El texto debe explicar qué intenta lograr una persona y qué dificultad enfrenta, sin decidir todavía cómo será la pantalla. ¿Cuál propuesta cumple mejor ese propósito?",
        "opciones": [
          "La pantalla de cobro utiliza el color institucional",
          "El asesor pulsa Clientes, selecciona Pagar y toca Guardar",
          "Byron cobra en un mercado sin señal y necesita entregar evidencia del pago",
          "La aplicación incluye cinco botones y dos menús"
        ],
        "correcta": 2,
        "explicacion": "Un escenario expresa persona, objetivo, contexto y obstáculo, sin imponer todavía botones o solución. Esto permite evaluar distintas interfaces para la misma necesidad.",
        "paginas": [
          16
        ]
      },
      {
        "tema": "Un recorrido sin hallazgos útiles",
        "pregunta": "El equipo dibuja las pantallas por las que pasa un asesor y agrega una cara triste con la frase se frustra. Gerencia pregunta qué debería corregirse, pero el mapa no permite responder. ¿Qué información debe incorporarse para convertirlo en una herramienta de diseño?",
        "opciones": [
          "Eliminar las emociones del recorrido",
          "Más colores para diferenciar pantallas",
          "Reemplazar las etapas por una lista de endpoints",
          "Identificar dolor concreto y oportunidad en cada etapa"
        ],
        "correcta": 3,
        "explicacion": "El journey incluye etapas, acciones, contactos, pensamientos, emociones, dolores y oportunidades. Un dolor concreto sería recapturar el DPI tras perder sesión; permite proponer una solución verificable.",
        "paginas": [
          17,
          18
        ]
      },
      {
        "tema": "Un desembolso con un cero de más",
        "pregunta": "Una asesora quiere registrar Q800, pero escribe Q8,000 en un campo que no indica claramente la moneda y confirma sin una pantalla de revisión. El sistema calcula correctamente el préstamo sobre Q8,000. ¿Qué enseñanza de diseño se desprende del caso?",
        "opciones": [
          "La revisión puede omitirse si el servidor acepta el número",
          "La experiencia de usuario solo afecta la apariencia",
          "La precisión de los cálculos evita cualquier error financiero",
          "La captura y confirmación son parte de la prevención de errores financieros"
        ],
        "correcta": 3,
        "explicacion": "Un cálculo correcto sobre datos equivocados sigue causando daño. Unidades claras, montos legibles y confirmación ayudan a evitar una operación errónea.",
        "paginas": [
          8,
          19
        ]
      },
      {
        "tema": "Explicar el recargo a una clienta",
        "pregunta": "Marta pregunta por qué aumentó su deuda. Su cuota tiene Q725.76 de capital en mora y lleva 45 días de atraso. La política cobra los primeros 30 días al 18% anual y los siguientes 15 al 24% anual, con base de 360 días. Se calcula cada tramo por separado y se redondea una sola vez al final. ¿Qué importe de mora debe explicar el asesor?",
        "opciones": [
          "Q32.66",
          "Q10.89",
          "Q21.77",
          "Q18.14"
        ],
        "correcta": 3,
        "explicacion": "Tramo 1: 725.76 × (0.18/360) × 30 = 10.8864. Tramo 2: 725.76 × (0.24/360) × 15 = 7.2576. Suma sin redondeos intermedios: 18.1440. Resultado final: Q18.14. No se aplican 45 días completos a la tasa del segundo tramo.",
        "paginas": [
          24
        ]
      },
      {
        "tema": "Una nueva política sin cambiar contratos anteriores",
        "pregunta": "El comité aprueba que los nuevos créditos paguen mora por tramos de atraso. Los créditos ya otorgados deben conservar la política con la que fueron contratados. El equipo necesita incorporar la nueva regla sin cambiar los cálculos históricos ni modificar la calculadora cada vez que aparezca otra política. ¿Qué diseño responde mejor a este requisito?",
        "opciones": [
          "Sustituir la política de todos los créditos por la nueva",
          "Consultar siempre la política más reciente al calcular",
          "Cambiar los resultados esperados de las pruebas antiguas",
          "Políticas versionadas y una estrategia sustituible respetando la asignada a cada crédito"
        ],
        "correcta": 3,
        "explicacion": "La nueva política no debe alterar retroactivamente créditos anteriores. El material usa el cambio para evaluar abierto/cerrado: incorporar una implementación sin modificar la calculadora ni romper las pruebas existentes.",
        "paginas": [
          24,
          25
        ]
      }
    ]
  },
  {
    "semana": 8,
    "titulo": "UI, Nielsen y accesibilidad",
    "archivo": "Semana8-Presentacion-Analisis-Sistemas-II-037.pdf",
    "preguntas": [
      {
        "tema": "La misma alerta parece diferente",
        "pregunta": "En la pantalla de cobros, una deuda vencida aparece en rojo oscuro; en el tablero, en naranja; y en el detalle, en otro rojo. Cada desarrollador eligió un valor distinto y los asesores preguntan si los colores significan estados diferentes. ¿Qué decisión de diseño permite unificar ese significado?",
        "opciones": [
          "Corregir cada valor por separado sin una definición común",
          "Reservar un color diferente para cada pantalla",
          "Definir un token semántico común y reutilizarlo",
          "Ocultar los estados de deuda para evitar confusiones"
        ],
        "correcta": 2,
        "explicacion": "Un token nombra una decisión visual y concentra su valor. Un sistema de diseño añade componentes, variantes, estados y reglas de uso para sostener la consistencia.",
        "paginas": [
          4,
          7
        ]
      },
      {
        "tema": "La demostración funcionaba, la visita no",
        "pregunta": "Durante la presentación del prototipo, la lista de clientes siempre tenía información. En la primera visita real, una ruta no contiene clientes y otra consulta tarda por falta de señal. La interfaz queda en blanco y el asesor no sabe qué hacer. ¿Qué conjunto de estados debió contemplarse desde el diseño?",
        "opciones": [
          "Solo la confirmación del pago",
          "Solo la pantalla con datos completos",
          "Únicamente el mensaje de conexión perdida",
          "Vacío, cargando, error y éxito"
        ],
        "correcta": 3,
        "explicacion": "Los cuatro estados permiten orientar al usuario durante todo el proceso. Una falla debe explicar qué pasó y cómo continuar, sin depender de un mensaje técnico críptico.",
        "paginas": [
          8
        ]
      },
      {
        "tema": "La duda después de pulsar Pagar",
        "pregunta": "Una asesora pulsa Registrar pago y la pantalla permanece igual durante varios segundos. Como no sabe si la operación empezó, vuelve a pulsar. ¿Qué heurística de Nielsen debe atenderse principalmente para que comprenda lo que está ocurriendo?",
        "opciones": [
          "Diseño estético y minimalista",
          "Visibilidad del estado del sistema",
          "Correspondencia con el mundo real",
          "Ayuda y documentación"
        ],
        "correcta": 1,
        "explicacion": "El usuario debe saber si se está guardando y si terminó. Conviene distinguir en proceso, confirmado y fallido; la respuesta visible también debe ser accesible para tecnologías de asistencia.",
        "paginas": [
          14,
          23
        ]
      },
      {
        "tema": "Un concepto que la clienta no entiende",
        "pregunta": "Al mostrar la deuda a una clienta, la pantalla presenta el texto devengo moratorio. Ella pregunta qué le están cobrando y teme que sea un cargo nuevo. Se quiere mejorar la correspondencia entre el sistema y el lenguaje de sus usuarios. ¿Qué cambio sería más adecuado?",
        "opciones": [
          "Ocultar el concepto y conservar solo el total",
          "Usar lenguaje como recargo por atraso y explicar el desglose",
          "Añadir las siglas internas del cálculo",
          "Mantener el texto y cambiar únicamente su color"
        ],
        "correcta": 1,
        "explicacion": "La interfaz debe hablar en el vocabulario del usuario. Aclarar conceptos ayuda a entender la deuda y tomar decisiones.",
        "paginas": [
          14
        ]
      },
      {
        "tema": "Confirmar sin tener los datos a la vista",
        "pregunta": "Para revisar un abono, el asesor debe recordar el saldo mostrado en la pantalla anterior. Si quiere comprobarlo, tiene que salir de la confirmación y volver a empezar. ¿Qué cambio aplica mejor el principio de reconocer antes que recordar?",
        "opciones": [
          "Ocultar el saldo también en la primera pantalla",
          "Reducir el tiempo disponible para confirmar",
          "Mostrar saldo y desglose junto a la confirmación",
          "Capacitar al asesor para memorizar saldos"
        ],
        "correcta": 2,
        "explicacion": "Reconocer antes que recordar reduce la carga de memoria. La información necesaria debe estar disponible en el momento de decidir.",
        "paginas": [
          15
        ]
      },
      {
        "tema": "Un reporte automático sin errores",
        "pregunta": "El equipo ejecuta una herramienta de accesibilidad y obtiene un reporte sin fallas detectadas. Propone entregar el sitio sin recorrer un cobro con teclado ni comprobar los mensajes con un lector de pantalla. ¿Es suficiente esa evidencia para afirmar que la interfaz es usable y accesible?",
        "opciones": [
          "Sí, el reporte reemplaza toda revisión humana",
          "No; se requieren recorridos manuales y evaluación heurística",
          "Sí, si el sitio usa los colores institucionales",
          "Sí, con una captura adicional de la página principal"
        ],
        "correcta": 1,
        "explicacion": "El material combina herramientas con teclado, lector de pantalla y tareas reales. La evaluación heurística y la auditoría WCAG se complementan y no quedan resueltas por un único reporte automático.",
        "paginas": [
          12,
          26,
          27
        ]
      },
      {
        "tema": "Leer el saldo bajo el sol",
        "pregunta": "Un asesor comenta que cuesta leer el saldo en su teléfono. Al revisar la interfaz, el equipo mide un contraste de 3.41:1 entre el texto normal del saldo y el fondo. Según el umbral AA estudiado, ¿cumple ese texto el contraste mínimo?",
        "opciones": [
          "Sí; todo valor mayor que 3 cumple para texto normal",
          "No; requiere al menos 4.5:1",
          "No; cualquier texto debe alcanzar 21:1",
          "Sí; basta con que supere 2:1"
        ],
        "correcta": 1,
        "explicacion": "El material establece 4.5:1 para texto normal y 3:1 para texto grande. Comparar un ratio ya calculado no requiere calcular luminancias.",
        "paginas": [
          5,
          21
        ]
      },
      {
        "tema": "Una lista que depende del color",
        "pregunta": "En una lista de créditos, los clientes al día y los morosos se distinguen únicamente por el color del nombre. Una persona que no diferencia esos colores no puede saber a quién debe dar seguimiento. ¿Qué cambio atiende directamente el problema?",
        "opciones": [
          "Exigir que el usuario escuche un sonido para identificar cada fila",
          "Usar un rojo más intenso como única señal",
          "Agregar una etiqueta textual o símbolo con significado accesible",
          "Añadir una animación sin indicar qué significa"
        ],
        "correcta": 2,
        "explicacion": "La información no debe depender solo del color. Una señal adicional permite identificar el estado aunque no se distingan los tonos; corresponde al principio Perceptible.",
        "paginas": [
          6,
          18
        ]
      },
      {
        "tema": "Botones difíciles de tocar en campo",
        "pregunta": "Byron utiliza el teléfono con una sola mano y pulsa por error el botón contiguo al que quería. La revisión encuentra áreas interactivas de 20×20 px CSS, muy juntas. Para este caso no aplica ninguna excepción de tamaño o espaciado. Frente al mínimo de 24×24 estudiado, ¿qué conclusión corresponde?",
        "opciones": [
          "No cumplen; ampliar el área interactiva al menos a 24×24",
          "Cumplen porque también pueden usarse con ratón",
          "Cumplen porque ancho y alto son iguales",
          "Cumplen si el dibujo del icono se entiende"
        ],
        "correcta": 0,
        "explicacion": "20 es menor que 24 en ambas dimensiones. Se evalúa el objetivo interactivo, no solamente el dibujo del icono. El enunciado excluye excepciones para que el diagnóstico sea inequívoco.",
        "paginas": [
          20
        ]
      },
      {
        "tema": "El teclado avanza, pero el control no se ve",
        "pregunta": "Una usuaria recorre el formulario con Tab. El foco llega al botón Confirmar, pero un aviso fijo lo tapa por completo. Ella no puede identificar dónde está antes de pulsar Enter. ¿Qué criterio de WCAG 2.2 se relaciona directamente con esta falla?",
        "opciones": [
          "3.3.7 Entrada redundante",
          "2.4.11 Focus Not Obscured (Minimum)",
          "3.2.6 Ayuda consistente",
          "1.4.3 Contraste mínimo"
        ],
        "correcta": 1,
        "explicacion": "El usuario necesita localizar el elemento que recibe la interacción de teclado. La barra no debe ocultarlo por completo; hay que ajustar desplazamiento o disposición.",
        "paginas": [
          20
        ]
      },
      {
        "tema": "Evitar una confirmación equivocada",
        "pregunta": "En una aplicación de desembolsos, un toque ejecuta la entrega de dinero sin permitir revisar el monto. El equipo debe incorporar una protección acorde con WCAG 3.3.4 para operaciones financieras. ¿Qué condición responde a ese criterio?",
        "opciones": [
          "Que la operación sea reversible, verificada o confirmada",
          "Que se necesiten dos clics sin mostrar los datos a revisar",
          "Que el botón de aceptación tenga color verde",
          "Que únicamente aparezca un mensaje técnico si ocurre un error"
        ],
        "correcta": 0,
        "explicacion": "El material relaciona la prevención de errores con revisión y confirmación de montos y con reversión cuando sea posible. No exige necesariamente las tres alternativas simultáneamente.",
        "paginas": [
          9,
          21
        ]
      },
      {
        "tema": "Un hallazgo que impide cobrar",
        "pregunta": "Durante una evaluación, el botón final de pago no responde y no existe otra forma de completar la operación. La falla se reproduce en todos los intentos de esa tarea crítica. ¿Qué severidad de Nielsen sería razonable asignar, documentando ese impacto?",
        "opciones": [
          "1: cosmético",
          "0: no es problema",
          "4: catastrófico",
          "2: menor"
        ],
        "correcta": 2,
        "explicacion": "La escala va de 0 a 4. Un bloqueo de la tarea crítica puede justificar 4, pero el informe debe aportar evidencia, ubicación e impacto, además de una corrección concreta.",
        "paginas": [
          16
        ]
      }
    ]
  },
  {
    "semana": 9,
    "titulo": "Movilidad, web y revisión de diseño",
    "archivo": "Semana9_Presentacion.pdf",
    "preguntas": [
      {
        "tema": "Elegir una solución para los asesores",
        "pregunta": "Una cooperativa tiene presupuesto limitado y ya dispone de un sitio web. Sus asesores visitan comercios con señal intermitente, necesitan seguir trabajando temporalmente sin conexión y reciben cambios frecuentes en la aplicación. No requieren hardware especial. Según los criterios estudiados, ¿qué alternativa conviene evaluar primero?",
        "opciones": [
          "Una PWA",
          "Una aplicación nativa obligatoriamente",
          "Un sitio que descarte toda acción al perder la conexión",
          "Una aplicación exclusiva de escritorio"
        ],
        "correcta": 0,
        "explicacion": "La PWA reutiliza la web y se distribuye por URL. La elección debe confirmarse contra contexto y capacidades requeridas; no basta con llamarla PWA para que funcione sin conexión.",
        "paginas": [
          3,
          6
        ]
      },
      {
        "tema": "El lector que requiere la operación",
        "pregunta": "Una financiera quiere cobrar mediante un lector específico. Las pruebas muestran que el navegador de los teléfonos de sus asesores no permite usar correctamente ese dispositivo, aunque el resto de la aplicación web funciona. ¿Qué debe hacer el equipo al decidir la arquitectura móvil?",
        "opciones": [
          "Evaluar nativa o híbrida y comprobar soporte del hardware",
          "Mantener la elección sin considerar el lector",
          "Dar por hecho que cualquier teléfono será compatible",
          "Elegir la tecnología más popular sin probarla"
        ],
        "correcta": 0,
        "explicacion": "El material presenta la PWA como candidata condicionada por los requisitos. Acceso a hardware, presupuesto, conectividad y distribución forman parte de la decisión.",
        "paginas": [
          6,
          14
        ]
      },
      {
        "tema": "Abrir la aplicación sin señal",
        "pregunta": "Byron abrió la aplicación antes de salir de la agencia. Más tarde, en una zona sin cobertura, necesita volver a ver las pantallas y recursos que se guardaron previamente. ¿Qué pieza de una PWA puede intervenir entre la aplicación y la red para servir esos recursos almacenados?",
        "opciones": [
          "Solo manifest.json",
          "Un archivo README",
          "Service Worker",
          "Una media query"
        ],
        "correcta": 2,
        "explicacion": "El service worker puede interceptar peticiones y aplicar estrategias de caché. Hay que implementar esas estrategias y preparar recursos; el archivo manifest no hace ese trabajo.",
        "paginas": [
          7
        ]
      },
      {
        "tema": "La aplicación en la pantalla de inicio",
        "pregunta": "La cooperativa quiere que, al instalar su aplicación web, el asesor la identifique por su nombre, icono y colores. El equipo necesita declarar esa información de presentación. ¿Qué responsabilidad corresponde al manifiesto de la PWA?",
        "opciones": [
          "Declarar identidad de la app, iconos y presentación para su instalación",
          "Sincronizar automáticamente cualquier operación",
          "Reconocer por sí mismo pagos repetidos",
          "Calcular el atraso de cada cuota"
        ],
        "correcta": 0,
        "explicacion": "El manifest aporta metadatos de instalación y apariencia. El trabajo sin conexión y la sincronización requieren otras piezas; no se obtienen solo por declarar el nombre de la app.",
        "paginas": [
          7
        ]
      },
      {
        "tema": "Un pago pendiente durante la visita",
        "pregunta": "Una clienta entrega efectivo cuando el asesor no tiene cobertura. La aplicación debe conservar el registro y enviarlo al recuperar señal, sin presentar como confirmado algo que el servidor todavía no recibió ni duplicarlo si debe reintentar. ¿Qué solución responde mejor a esta situación?",
        "opciones": [
          "Mostrar confirmado en cuanto se toca el botón",
          "Descartar el registro hasta que la clienta vuelva a pagar",
          "Guardar una acción pendiente y sincronizar con idempotencia",
          "Resolverlo únicamente con cambios de diseño visual"
        ],
        "correcta": 2,
        "explicacion": "La cola local conserva acciones hasta recuperar red; la clave de idempotencia evita aplicar otra vez una misma intención. La UI debe diferenciar pendiente de confirmación del servidor.",
        "paginas": [
          7,
          12
        ]
      },
      {
        "tema": "La mora al sincronizar un cobro",
        "pregunta": "Un asesor registra un cobro durante una visita y el teléfono lo envía al servidor al día siguiente. Si el cálculo toma automáticamente la fecha actual del dispositivo, puede usar un corte distinto al definido para la operación. ¿Qué decisión del diseño estudiado permite controlar esa fecha?",
        "opciones": [
          "Eliminar del registro la fecha de la operación",
          "Tomar siempre la fecha local al abrir la pantalla",
          "Agregar un día de mora a todos los cobros pendientes",
          "Usar una fecha de corte explícita y el puerto Reloj del diseño"
        ],
        "correcta": 3,
        "explicacion": "El material exige que la fecha de corte sea un parámetro y no un hoy implícito del dispositivo. La política debe definir qué fecha corresponde a la operación.",
        "paginas": [
          12
        ]
      },
      {
        "tema": "El tablero en teléfono y computadora",
        "pregunta": "Gerencia consulta indicadores desde una computadora, pero los supervisores abren el mismo tablero desde el teléfono. Las tarjetas se cortan y las imágenes obligan a desplazarse horizontalmente. ¿Qué conjunto de técnicas permite adaptar la composición a ambos tamaños?",
        "opciones": [
          "Publicar capturas del tablero por cada dispositivo",
          "Cuadrículas fluidas, media queries e imágenes flexibles",
          "Reducir únicamente el tamaño de la letra",
          "El mismo ancho fijo para todas las pantallas"
        ],
        "correcta": 1,
        "explicacion": "Las columnas fluidas adaptan el espacio; las media queries cambian la composición y las imágenes flexibles evitan desbordamiento. El ejemplo usa una, dos y más columnas según el ancho.",
        "paginas": [
          8
        ]
      },
      {
        "tema": "Diseñar primero para la visita",
        "pregunta": "El equipo empieza dibujando un tablero de escritorio con muchas columnas y después intenta reducirlo para los asesores. En el teléfono, registrar un pago queda escondido entre opciones poco usadas. ¿Qué cambio de enfoque corresponde a mobile-first?",
        "opciones": [
          "Diseñar primero para el teléfono de mayor capacidad",
          "Priorizar lo esencial en pantalla pequeña, una mano y señal débil",
          "Ocultar al final lo que ya no quepa",
          "Reducir todos los botones para conservar las columnas"
        ],
        "correcta": 1,
        "explicacion": "Mobile-first comienza por las restricciones reales y luego enriquece el diseño para más espacio o capacidad. No consiste únicamente en reducir una pantalla de escritorio.",
        "paginas": [
          9
        ]
      },
      {
        "tema": "La consulta cuando falla una capa",
        "pregunta": "Una clienta abre una página para consultar requisitos, pero una conexión lenta impide cargar parte de los estilos y de la interacción. Se quiere que la información esencial siga disponible y que las mejoras se añadan por capas. ¿Qué orden sigue la mejora progresiva presentada en clase?",
        "opciones": [
          "Construir todo únicamente con JavaScript",
          "Animaciones → iconos → servidor",
          "Contenido → estructura → presentación → comportamiento",
          "JavaScript → CSS → contenido"
        ],
        "correcta": 2,
        "explicacion": "Cada capa debe aportar mejoras sin que la información esencial dependa de la siguiente. Esto no significa que una transacción offline pueda completarse sin lógica ni infraestructura; hay que diseñar explícitamente esa capacidad.",
        "paginas": [
          10,
          11
        ]
      },
      {
        "tema": "Una pantalla para dos trabajos distintos",
        "pregunta": "La gerenta necesita comparar cifras agregadas para decidir sobre la cartera. El asesor necesita registrar cobros rápidamente durante sus visitas. El equipo propone mostrar a ambos la misma pantalla simplificada de captura. ¿Qué necesidad de gerencia debería considerar antes de tomar esa decisión?",
        "opciones": [
          "Utilizar exactamente la misma distribución que el asesor",
          "Información agregada con contexto y aprovechamiento del escritorio",
          "Ver únicamente botones de captura",
          "Consultar cifras sin mostrar el contexto de los castigos"
        ],
        "correcta": 1,
        "explicacion": "Gerencia decide con cifras agregadas en pantalla grande; el asesor necesita una captura ágil en campo. El diseño responde a objetivos distintos sin confundir indicadores.",
        "paginas": [
          13
        ]
      },
      {
        "tema": "Una revisión con demasiada ayuda",
        "pregunta": "Un equipo entrega su prototipo a otro para que intente registrar un pago. Cada vez que el evaluador duda, el autor le indica qué botón debe tocar. Al terminar, concluyen que el flujo no tiene dificultades. ¿Qué cambio al procedimiento permitiría observar los problemas reales de uso?",
        "opciones": [
          "Explicar primero cada pantalla con más detalle",
          "Guardar silencio y observar cómo resuelven los flujos",
          "Limitar la revisión a los colores y las fuentes",
          "Completar las tareas en nombre del evaluador"
        ],
        "correcta": 1,
        "explicacion": "La regla del silencio permite detectar dificultades que el autor compensaría con ayuda. Se necesita un prototipo navegable y observación de tareas reales.",
        "paginas": [
          17,
          18
        ]
      },
      {
        "tema": "Qué hacer con las observaciones",
        "pregunta": "En la revisión del prototipo, otro equipo señala que no se sabe si un pago quedó registrado y que el monto se lee con dificultad. Los autores consideran que una observación es válida y que otra necesita más evidencia. ¿Cómo deben tratar estos hallazgos en el informe?",
        "opciones": [
          "Resumirlos únicamente como se ve confuso",
          "Omitir los que no coincidan con la opinión del equipo",
          "Registrar síntoma, criterio, severidad y decidir justificadamente qué incorporar",
          "Aceptar todos sin analizar su relación con el uso"
        ],
        "correcta": 2,
        "explicacion": "El informe debe describir evidencia concreta. Se puede rechazar un hallazgo con argumentos, pero no ignorarlo; las correcciones se relacionan con los problemas observados.",
        "paginas": [
          17,
          19
        ]
      }
    ]
  }
];
export const talleres = [
  {
    "titulo": "1. Una nueva forma de calcular la mora",
    "paginas": [
      21,
      24,
      25
    ],
    "reto": "Una financiera incorpora una política de mora por tramos para nuevos créditos. Los préstamos anteriores deben conservar sus resultados. Cada nueva forma de cálculo obliga a editar la misma calculadora y el equipo teme afectar contratos vigentes. Examine el código, identifique el problema y proponga una refactorización que permita incorporar otras formas de cálculo. Escriba los contratos y clases necesarios, indique dónde se selecciona la política de cada crédito y justifique el patrón elegido. Las tasas deben recibirse como datos de la política, no escribirse dentro de la calculadora.",
    "antes": "class Calculadora {\n  calcular(tipo: string, capital: Dinero, dias: number): Dinero {\n    if (tipo === 'fija') return calcularFija(capital, dias, politicaFija);\n    if (tipo === 'tramos') return calcularTramos(capital, dias, politicaTramos);\n    throw new Error('Política desconocida');\n  }\n}",
    "despues": "// Esquema TypeScript: Dinero, Politica y los cálculos\n// son contratos del dominio existentes, no flotantes monetarios.\ninterface EstrategiaMora {\n  calcular(capital: Dinero, dias: number): Dinero;\n}\nclass MoraFija implements EstrategiaMora {\n  constructor(private readonly politica: PoliticaFija) {}\n  calcular(capital: Dinero, dias: number): Dinero {\n    return calcularFija(capital, dias, this.politica);\n  }\n}\nclass MoraPorTramos implements EstrategiaMora {\n  constructor(private readonly politica: PoliticaTramos) {}\n  calcular(capital: Dinero, dias: number): Dinero {\n    return calcularTramos(capital, dias, this.politica);\n  }\n}\nclass Calculadora {\n  constructor(private readonly estrategia: EstrategiaMora) {}\n  calcular(capital: Dinero, dias: number): Dinero {\n    return this.estrategia.calcular(capital, dias);\n  }\n}\n// La composición selecciona según la política del crédito.\nconst calculadora = new Calculadora(new MoraFija(politicaFija));",
    "explicacion": "La calculadora deja de conocer tipos concretos. La selección se mueve al punto de composición; no desaparece mágicamente del sistema. Strategy encaja porque varía el algoritmo. Factory podría complementar la creación, pero no sustituye el contrato de comportamiento. Las funciones existentes se conservan para no alterar resultados. Para mora por tramos, redondea solo al final y respeta la política histórica del crédito.",
    "rubrica": [
      "Interfaz común y consumidor que depende de ella.",
      "Implementaciones independientes y políticas recibidas como datos.",
      "Mismos resultados para los casos anteriores, sin modificar sus pruebas para ocultar errores.",
      "Explicación de Strategy frente a Factory y de la selección fuera de la calculadora."
    ]
  },
  {
    "titulo": "2. Créditos con distintos cargos",
    "paginas": [
      18,
      24
    ],
    "reto": "Una cooperativa cobra una cuota base y permite agregar seguro o un gasto de gestión. Algunas cuotas tienen ambos cargos y otras no tienen ninguno. Cada combinación ha originado una clase nueva. El próximo mes podrían incorporar otro cargo y el equipo quiere evitar que la cantidad de clases siga aumentando. Examine el diseño y proponga una refactorización que permita combinar cargos y consultar el total de la misma manera. Escriba el código y justifique su elección. Para este ejercicio, todos los cargos son montos fijos ya calculados y de la misma moneda.",
    "antes": "class CuotaConSeguro extends CuotaBase { /* ... */ }\nclass CuotaConGestion extends CuotaBase { /* ... */ }\nclass CuotaConSeguroYGestion extends CuotaBase { /* ... */ }",
    "despues": "interface Cuota { monto(): Dinero; }\nclass CuotaBase implements Cuota {\n  constructor(private readonly valor: Dinero) {}\n  monto(): Dinero { return this.valor; }\n}\nclass ConCargo implements Cuota {\n  constructor(\n    private readonly interna: Cuota,\n    private readonly cargo: Dinero\n  ) {}\n  monto(): Dinero { return this.interna.monto().mas(this.cargo); }\n}\nconst cuota: Cuota = new ConCargo(\n  new ConCargo(new CuotaBase(base), seguro), gestion\n);",
    "explicacion": "CuotaBase y ConCargo cumplen la misma interfaz. Cada envoltorio delega al objeto interno y añade un cargo; así se evitan clases para todas las combinaciones. Se asume Dinero inmutable con validación de moneda. El ejercicio suma cargos fijos: calcular intereses sobre otros cargos o definir prelación de un pago son reglas diferentes que este ejemplo no implementa.",
    "rubrica": [
      "Base y decorador cumplen el mismo contrato.",
      "El decorador recibe y delega a otra Cuota.",
      "Composición de dos cargos sin crear una clase para la combinación.",
      "No usar flotantes monetarios ni confundir total con prelación del pago."
    ]
  },
  {
    "titulo": "3. Nuevos avisos cuando una cuota se atrasa",
    "paginas": [
      22,
      24
    ],
    "reto": "Cuando una cuota entra en mora, el sistema envía un correo al asesor, actualiza el tablero y registra el hecho en auditoría. Gerencia solicita ahora avisar también al supervisor. El componente que detecta el atraso contiene llamadas directas a cada servicio y debe editarse con cada nuevo destinatario. Proponga una refactorización que permita añadir receptores sin modificar ese componente. Escriba el contrato y un receptor de ejemplo, justifique el patrón y explique qué ocurriría si se pierde el proceso antes de entregar todos los avisos.",
    "antes": "class MotorDeMora {\n  registrarEntrada(evento: EventoMora): void {\n    correo.enviar(evento);\n    tablero.actualizar(evento);\n    auditoria.registrar(evento);\n  }\n}",
    "despues": "interface ObservadorMora {\n  alEntrarEnMora(evento: EventoMora): void;\n}\nclass MotorDeMora {\n  private readonly observadores: ObservadorMora[] = [];\n  suscribir(observador: ObservadorMora): void {\n    this.observadores.push(observador);\n  }\n  registrarEntrada(evento: EventoMora): void {\n    for (const observador of this.observadores) {\n      observador.alEntrarEnMora(evento);\n    }\n  }\n}\nclass AuditorMora implements ObservadorMora {\n  constructor(private readonly auditoria: Auditoria) {}\n  alEntrarEnMora(evento: EventoMora): void {\n    this.auditoria.registrar(evento);\n  }\n}\nmotor.suscribir(new AuditorMora(auditoria));\n// Correo y tablero se adaptan al mismo contrato.",
    "explicacion": "El motor depende de ObservadorMora y publica sin conocer el trabajo de cada suscriptor. Este esquema ilustra el desacoplamiento del PDF; no es una infraestructura de mensajería durable. Deben definirse errores de receptores, duplicados y persistencia según los requisitos. Tampoco hay que emitir entrada en mora repetidamente si solo se vuelve a consultar una cuota ya morosa.",
    "rubrica": [
      "Lista de suscriptores tipada con una interfaz.",
      "Reacciones concretas fuera del motor.",
      "Nuevo receptor agregado desde la composición sin editar el publicador.",
      "Diferenciar notificación en memoria de garantías de entrega y controlar eventos duplicados."
    ]
  }
];
