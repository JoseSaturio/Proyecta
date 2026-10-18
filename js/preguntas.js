/* Preguntas de opción múltiple por reto. Cada pregunta evalúa el criterio del mismo índice. */
const PREGUNTAS = {
  whatsapp: [
    { p: "¿Cuál es el problema principal de la tienda?", o: ["Tiene pocos productos en su catálogo", "Los mensajes se acumulan sin un orden y se responde tarde", "Sus precios son más altos que los de la competencia"], c: 1, e: "La situación indica que se pierden ventas porque los mensajes se acumulan sin organización. Primero hay que atacar la causa: la falta de orden en la atención." },
    { p: "¿Qué acción reduce más rápido el tiempo de respuesta?", o: ["Crear respuestas rápidas y etiquetas en WhatsApp Business", "Publicar más historias en Instagram", "Cambiar el logo de la tienda"], c: 0, e: "Las respuestas rápidas y las etiquetas permiten contestar preguntas frecuentes en segundos y priorizar los chats pendientes." },
    { p: "¿Quién debería encargarse de responder los chats?", o: ["Cualquier persona que esté libre en ese momento", "Nadie en especial: el cliente esperará", "Un responsable por turno con horario definido"], c: 2, e: "Asignar un responsable por turno evita que los mensajes queden sin dueño y permite medir el desempeño." },
    { p: "¿Qué indicador mide mejor la mejora?", o: ["Tiempo promedio de primera respuesta (en minutos)", "Cantidad de stickers enviados", "Número de fotos publicadas por semana"], c: 0, e: "El tiempo promedio de primera respuesta es verificable y está ligado directamente al problema. Fija una meta, por ejemplo: menos de 10 minutos." }
  ],
  gastos: [
    { p: "¿Qué grupo de categorías es más claro para un emprendimiento?", o: ["Gastos buenos, gastos malos y otros", "Insumos, servicios (luz, internet) y transporte", "Lunes, miércoles y viernes"], c: 1, e: "Las categorías deben agrupar gastos de la misma naturaleza para poder analizarlos. Insumos, servicios y transporte cumplen esa condición." },
    { p: "¿Con qué frecuencia conviene actualizar el registro?", o: ["Una vez al año", "Solo cuando falte dinero", "Cada semana, en un día fijo"], c: 2, e: "Un registro semanal en un día fijo es viable para un negocio pequeño y permite detectar problemas antes de que termine el mes." },
    { p: "¿Qué decisión permite tomar este registro?", o: ["Definir un presupuesto mensual y recortar la categoría que más crece", "Elegir el color del local", "Cambiar el nombre del negocio"], c: 0, e: "Un registro solo tiene sentido si ayuda a decidir. Aquí sirve para fijar un presupuesto y actuar sobre la categoría que se dispara." },
    { p: "¿Cuál es un buen indicador de control?", o: ["Número de facturas guardadas", "Porcentaje de gastos frente a los ingresos del mes", "Cantidad de proveedores"], c: 1, e: "El porcentaje de gastos sobre ingresos muestra si el negocio gasta más de lo que puede sostener." }
  ],
  campana: [
    { p: "¿Qué mensaje conecta mejor con estudiantes?", o: ["«Somos la empresa número uno del país»", "«Reutiliza, ahorra y cuida tu campus»", "«Compra ahora, oferta limitada»"], c: 1, e: "Un buen mensaje une el beneficio para el público (ahorro) con el propósito de la marca (sostenibilidad) en un lenguaje cercano." },
    { p: "¿Qué par de canales es más pertinente con poco presupuesto?", o: ["TikTok/Instagram y alianzas con centros de estudiantes", "Televisión nacional y radio", "Paneles publicitarios en carreteras"], c: 0, e: "Las redes sociales y las alianzas universitarias llegan al público objetivo a bajo costo; la TV y los paneles son caros y poco segmentados." },
    { p: "¿Qué actividad funciona mejor en redes sociales?", o: ["Publicar solo el catálogo de precios", "No publicar y esperar a que lleguen clientes", "Un reto en video: «una semana sin descartables»"], c: 2, e: "Los retos invitan a participar y generan contenido que los propios estudiantes comparten, lo que amplía el alcance gratis." },
    { p: "¿Cómo evaluarías el alcance de la campaña?", o: ["Preguntando a los amigos si les gustó", "Midiendo alcance, interacciones y usos del código de descuento", "No hace falta evaluarla"], c: 1, e: "Combinar métricas de alcance e interacción con una de conversión (código de descuento) muestra si la campaña genera ventas." }
  ],
  onboarding: [
    { p: "¿Cómo organizarías la primera semana?", o: ["Todo el contenido el primer día", "Sin plan: que aprenda sobre la marcha", "Actividades distribuidas día por día, de lo general a lo específico"], c: 2, e: "Distribuir las actividades evita saturar al practicante y le da una ruta clara para adaptarse." },
    { p: "¿Qué debe incluir sí o sí la inducción?", o: ["Cultura, valores y funciones del puesto", "Solo la contraseña del wifi", "La historia completa del sector"], c: 0, e: "Conocer la cultura y las funciones del puesto es lo que acelera la adaptación y reduce los errores iniciales." },
    { p: "¿Quién debería acompañar al nuevo colaborador?", o: ["Nadie, así aprende a ser autónomo", "Un mentor o compañero asignado", "Solo el gerente general"], c: 1, e: "Un mentor da respuestas rápidas y hace que el practicante se integre al equipo." },
    { p: "¿Cómo sabrías si la inducción funcionó?", o: ["Si el practicante no se queja", "Si termina la semana", "Con una encuesta al final de la semana y una revisión con el jefe al mes"], c: 2, e: "Una encuesta y una revisión posterior dan evidencia objetiva para mejorar el proceso con cada grupo." }
  ],
  datos: [
    { p: "¿Qué indicador es clave en un reporte de ventas?", o: ["Ventas totales del mes frente al mes anterior", "Número de sillas de la oficina", "Cantidad de correos recibidos"], c: 0, e: "Comparar las ventas con el período anterior muestra la tendencia, que es lo que la gerencia necesita ver." },
    { p: "¿Qué gráfico usarías para mostrar la evolución de las ventas en el año?", o: ["Gráfico circular (torta)", "Gráfico de líneas", "Una tabla sin formato"], c: 1, e: "El gráfico de líneas muestra la evolución en el tiempo; la torta sirve para mostrar proporciones de un total." },
    { p: "¿Cuál es la fuente de datos más confiable?", o: ["La memoria del vendedor", "Hojas sueltas sin formato", "Una base consolidada (Excel o sistema) con registros por fecha"], c: 2, e: "Una base consolidada evita duplicados y errores, y permite actualizar el reporte automáticamente." },
    { p: "¿Cuál es una conclusión accionable?", o: ["«El producto A cae 15 %; conviene revisar su precio y promoción»", "«Hubo ventas este mes»", "«Los datos son interesantes»"], c: 0, e: "Una conclusión accionable usa un dato concreto y propone qué hacer con él." }
  ],
  marca: [
    { p: "¿Qué concepto conecta con el público universitario?", o: ["«Tradición desde 1980»", "«Tu pausa entre clases»", "«El café más barato»"], c: 1, e: "El concepto parte del momento de vida del público: la cafetería como espacio de descanso y encuentro entre clases." },
    { p: "¿Cómo justificarías la paleta de colores?", o: ["Porque son mis colores favoritos", "Porque están de moda", "Porque transmiten calidez y energía y se distinguen en redes"], c: 2, e: "Una paleta se justifica por lo que comunica y por cómo funciona en los soportes donde se verá la marca." },
    { p: "¿Qué tipografía elegirías para el logo?", o: ["Una sans serif redondeada y legible", "Una letra cursiva muy decorada e ilegible", "Diez tipografías distintas"], c: 0, e: "La legibilidad es prioritaria: el logo debe leerse bien en un vaso, en un letrero y en una pantalla pequeña." },
    { p: "¿Qué dos aplicaciones mostrarían mejor la nueva marca?", o: ["Una tarjeta de presentación del dueño y un sello", "El vaso para llevar y un post para Instagram", "Un manual de 80 páginas"], c: 1, e: "El vaso y las redes son los puntos de contacto que más ve el público universitario." }
  ],
  pitch: [
    { p: "¿Cómo deberías empezar tu pitch?", o: ["Con tu nombre, tu carrera y tu ciclo", "Contando toda tu historia desde el colegio", "Preguntando cuánto pagan"], c: 0, e: "En 60 segundos, un inicio breve y claro da contexto al reclutador para entender el resto." },
    { p: "¿Qué logro impacta más?", o: ["«Soy responsable y puntual»", "«Me gusta aprender»", "«Lideré un proyecto que redujo 20 % los costos de un evento»"], c: 2, e: "Un logro concreto y medible demuestra lo que sabes hacer; los adjetivos sin evidencia no diferencian." },
    { p: "¿Cómo expresas lo que buscas?", o: ["«Busco lo que sea»", "«Busco prácticas en marketing digital para aplicar analítica de redes»", "No lo menciono"], c: 1, e: "Ser específico ayuda al reclutador a ubicarte en el puesto correcto." },
    { p: "¿Cuál es el mejor cierre?", o: ["«¿Qué habilidades valoran más en sus practicantes?»", "«Bueno, eso es todo»", "Irte sin despedirte"], c: 0, e: "Una pregunta de cierre muestra interés y abre la conversación." }
  ],
  conflicto: [
    { p: "¿Cuál es tu primer paso como mediador?", o: ["Darle la razón al que más habla", "Escuchar a cada parte por separado y luego reunirlos", "Ignorar el problema hasta la entrega"], c: 1, e: "Escuchar a ambas partes permite entender el origen del conflicto sin tomar bando." },
    { p: "¿Cómo redistribuyes las tareas?", o: ["Que lo haga todo quien ya avanzó", "Al azar", "Con una lista de tareas, un responsable y una fecha para cada una"], c: 2, e: "Una lista con responsables y fechas hace visible la carga de cada persona y la vuelve equitativa." },
    { p: "¿Qué debe guiar la conversación?", o: ["El objetivo común: entregar un buen proyecto a tiempo", "Quién tiene la culpa", "Quién tiene mejores notas"], c: 0, e: "Enfocarse en el objetivo común reduce las tensiones personales." },
    { p: "¿Cómo evitas que el conflicto se repita?", o: ["Esperando que no vuelva a pasar", "Con una revisión breve del avance cada dos días en un tablero compartido", "Pidiéndole al profesor que los separe"], c: 1, e: "Un seguimiento frecuente y visible detecta los desequilibrios a tiempo." }
  ],
  excel: [
    { p: "¿Qué columnas son indispensables?", o: ["Código, producto, entradas, salidas, stock y stock mínimo", "Solo el nombre del producto", "Producto y color favorito del cliente"], c: 0, e: "Con esas columnas puedes calcular el stock actual y compararlo con el mínimo." },
    { p: "¿Qué fórmula calcula el stock actual?", o: ["=PROMEDIO(entradas)", "=Stock inicial + SUMA(entradas) − SUMA(salidas)", "=HOY()"], c: 1, e: "El stock es lo que había, más lo que entró, menos lo que salió." },
    { p: "¿Cómo crearías la alerta de stock mínimo?", o: ["Revisando fila por fila cada día", "Escribiendo «ojo» en una celda", "Con formato condicional que pinte de rojo cuando stock ≤ mínimo"], c: 2, e: "El formato condicional automatiza la alerta y hace visible el problema al instante." },
    { p: "¿Qué decisión se toma con la alerta?", o: ["Generar el pedido de reposición al proveedor", "Subir todos los precios", "Cerrar la tienda"], c: 0, e: "La alerta sirve para reponer a tiempo los productos de alta rotación y no perder ventas." }
  ],
  ventas: [
    { p: "¿Cómo inicias tu respuesta?", o: ["«Eso no es cierto»", "«Entiendo, es importante que su inversión valga la pena»", "«Entonces vaya con la competencia»"], c: 1, e: "Validar la preocupación genera confianza y abre al cliente a escuchar tus argumentos." },
    { p: "¿Qué argumento muestra valor y no solo precio?", o: ["«Somos más caros porque sí»", "«Le bajo el precio ya mismo»", "«Incluye soporte técnico 24/7 y estabilidad garantizada para su negocio»"], c: 2, e: "Argumentar con beneficios concretos ayuda al cliente a comparar valor y no solo precio." },
    { p: "¿Qué hace más creíble tu argumento?", o: ["Un dato: «nuestros clientes reportan 30 % menos caídas»", "Hablar más rápido", "Repetir el precio"], c: 0, e: "Los datos y los casos reales sustentan lo que afirmas." },
    { p: "¿Cuál es el mejor siguiente paso?", o: ["Esperar a que el cliente vuelva a llamar", "Insistir con mensajes diarios", "Ofrecer una prueba gratis de 7 días y agendar una llamada"], c: 2, e: "Un siguiente paso concreto y de bajo riesgo facilita que el cliente avance en la compra." }
  ],
  correo: [
    { p: "¿Cuál es el mejor asunto?", o: ["«Hola»", "«Corrección del reporte de ventas enviado hoy»", "«URGENTE!!!»"], c: 1, e: "El asunto debe indicar de qué trata el correo para que se priorice y se encuentre fácilmente." },
    { p: "¿Cómo explicas el error?", o: ["Reconociéndolo de forma breve y directa", "Culpando al sistema", "Sin mencionarlo"], c: 0, e: "Reconocer el error con transparencia demuestra responsabilidad y genera confianza." },
    { p: "¿Qué solución propones?", o: ["Esperar a ver si el cliente lo nota", "Pedir que alguien más lo arregle", "Adjuntar la versión corregida y ofrecer enviar la nota al cliente"], c: 2, e: "Llegar con la solución lista facilita la decisión de tu jefa y reduce el impacto." },
    { p: "¿Qué cierre es más profesional?", o: ["«Chau»", "«Quedo atenta a sus indicaciones. Saludos cordiales»", "Sin cierre"], c: 1, e: "Un cierre cordial y disponible mantiene un tono profesional." }
  ],
  procesos: [
    { p: "¿Qué es un cuello de botella?", o: ["La etapa más lenta, que limita todo el proceso", "El último paso del proceso", "Un tipo de envase"], c: 0, e: "Identificar la etapa más lenta permite concentrar la mejora donde más impacta." },
    { p: "¿Qué mejora es más viable?", o: ["Comprar diez motos nuevas", "Agrupar los pedidos por zona y optimizar las rutas", "Pedir a los clientes que recojan sus pedidos"], c: 1, e: "Agrupar por zonas reduce kilómetros y tiempos sin una gran inversión." },
    { p: "¿Cómo analizarías el proceso?", o: ["Por intuición", "Preguntando solo al gerente", "Dibujando el flujo paso a paso y midiendo el tiempo de cada etapa"], c: 2, e: "Un diagrama de flujo con tiempos muestra dónde se pierden los minutos." },
    { p: "¿Cuál es una meta realista?", o: ["Entregar en 1 minuto", "Reducir de 90 a 60 minutos en dos meses", "No poner meta"], c: 1, e: "Una meta medible, alcanzable y con plazo permite evaluar si la mejora funcionó." }
  ],
  liderazgo: [
    { p: "¿Cómo organizas a los 15 voluntarios?", o: ["Tres equipos de cinco, cada uno con un coordinador", "Todos hacen todo", "Solo trabajas tú"], c: 0, e: "Los equipos pequeños con un coordinador facilitan la comunicación y el control." },
    { p: "¿Qué cronograma es más claro?", o: ["«Empezamos cuando lleguen todos»", "Sin horarios", "8:00 bienvenida · 8:30 recolección · 12:00 pesaje · 13:00 cierre"], c: 2, e: "Un cronograma con horas concretas alinea al grupo y evita tiempos muertos." },
    { p: "¿Cómo mantienes motivado al grupo?", o: ["Exigiendo más horas", "Explicando el propósito y reconociendo públicamente el aporte de cada uno", "No hace falta motivar"], c: 1, e: "El propósito y el reconocimiento son los principales motores del voluntariado." },
    { p: "¿Cómo mides el impacto?", o: ["Kilos de residuos recolectados y número de participantes", "Número de fotos tomadas", "Cuántos likes recibió el post"], c: 0, e: "Los kilos recolectados y los participantes son indicadores directos del objetivo de la campaña." }
  ],
  entrevista: [
    { p: "En el método STAR, ¿qué es la «S»?", o: ["El sueldo que esperas", "La situación o contexto del problema", "Tu signo zodiacal"], c: 1, e: "La Situación da el contexto: dónde, cuándo y qué ocurría." },
    { p: "¿Qué describe la «T» (tarea)?", o: ["Lo que hizo tu equipo sin ti", "Tus tareas favoritas", "Tu responsabilidad o lo que te tocaba lograr"], c: 2, e: "La Tarea aclara tu rol específico en esa situación." },
    { p: "¿Cómo debes contar la «A» (acción)?", o: ["En primera persona, con los pasos concretos que tomaste", "Diciendo «hicimos de todo»", "Muy por encima"], c: 0, e: "El entrevistador quiere saber qué hiciste tú, así que detalla tus acciones." },
    { p: "¿Cuál es el mejor «R» (resultado)?", o: ["«Salió bien»", "«Entregamos a tiempo y obtuvimos 18; aprendí a priorizar»", "«No me acuerdo»"], c: 1, e: "Un resultado cuantificado más un aprendizaje cierra la respuesta con evidencia." }
  ]
};
