/* Catálogo de retos de práctica. Las empresas son ficticias. */
const RETOS = [
  {
    id: "whatsapp",
    titulo: "Mejora la atención por WhatsApp",
    empresa: "Comercio Norte",
    area: "Administración",
    minutos: 15,
    nivel: "Básico",
    situacion: "Una pequeña tienda de Lima Norte demora en responder a sus clientes por WhatsApp. El equipo pierde ventas porque los mensajes se acumulan sin una organización clara.",
    entregable: "Propón tres acciones para reducir el tiempo de respuesta. Define quién ejecutaría cada acción y un indicador para medir la mejora.",
    habilidades: ["Atención al cliente", "Gestión de procesos", "Indicadores"],
    criterios: [
      { texto: "Identifica el problema principal", claves: ["problema", "causa", "demora", "acumul", "desorden", "falta", "tiempo de respuesta"] },
      { texto: "Propone acciones concretas", claves: ["accion", "respuesta rapida", "plantilla", "etiqueta", "horario", "turno", "catalogo", "automatiz", "mensaje"] },
      { texto: "Asigna responsables", claves: ["responsable", "encargad", "vendedor", "administrador", "equipo", "asesor", "quien"] },
      { texto: "Incluye un indicador verificable", claves: ["indicador", "minutos", "tiempo promedio", "%", "porcentaje", "medir", "meta", "kpi"] }
    ]
  },
  {
    id: "gastos",
    titulo: "Organiza los gastos de un emprendimiento",
    empresa: "Nexo Contable",
    area: "Contabilidad",
    minutos: 15,
    nivel: "Básico",
    situacion: "Un emprendimiento compra insumos sin llevar un registro semanal. Su encargada no sabe cuánto gasta ni cuál es su saldo disponible al finalizar el mes.",
    entregable: "Diseña un registro simple de gastos con tres categorías, define la frecuencia de actualización y propone un indicador de control.",
    habilidades: ["Control de gastos", "Excel", "Finanzas personales y de negocio"],
    criterios: [
      { texto: "Presenta categorías claras", claves: ["categoria", "insumo", "servicio", "transporte", "fijo", "variable", "planilla", "alquiler"] },
      { texto: "Establece un procedimiento viable", claves: ["semanal", "diario", "frecuencia", "registro", "hoja", "excel", "cuaderno", "actualiz", "procedimiento"] },
      { texto: "Relaciona el registro con una decisión financiera", claves: ["decision", "saldo", "presupuesto", "ahorro", "reducir", "flujo", "margen", "limite"] },
      { texto: "Propone un indicador de control", claves: ["indicador", "%", "porcentaje", "ratio", "meta", "comparar", "control"] }
    ]
  },
  {
    id: "campana",
    titulo: "Lanza una campaña de bajo presupuesto",
    empresa: "Impulso Eco",
    area: "Marketing",
    minutos: 20,
    nivel: "Intermedio",
    situacion: "Una marca de productos reutilizables busca conectar con estudiantes, pero tiene un presupuesto muy limitado para publicidad.",
    entregable: "Propón un mensaje principal, dos canales de difusión, una actividad por canal y una forma de evaluar el alcance de la campaña.",
    habilidades: ["Marketing digital", "Comunicación", "Analítica"],
    criterios: [
      { texto: "Define un mensaje coherente", claves: ["mensaje", "slogan", "eslogan", "propuesta de valor", "frase", "reutiliz", "sostenib"] },
      { texto: "Selecciona canales pertinentes", claves: ["instagram", "tiktok", "facebook", "whatsapp", "canal", "universidad", "feria", "linkedin", "red social"] },
      { texto: "Plantea una actividad por canal", claves: ["actividad", "sorteo", "reto", "video", "reel", "historia", "taller", "alianza", "influencer", "concurso"] },
      { texto: "Propone una métrica de resultado", claves: ["metrica", "alcance", "interaccion", "seguidores", "clic", "conversion", "%", "medir", "engagement"] }
    ]
  },
  {
    id: "onboarding",
    titulo: "Diseña la inducción de un nuevo colaborador",
    empresa: "Talento Andino",
    area: "Recursos Humanos",
    minutos: 20,
    nivel: "Intermedio",
    situacion: "Una empresa de servicios contrata practicantes cada trimestre, pero no tiene un proceso de inducción. Los nuevos colaboradores tardan semanas en adaptarse.",
    entregable: "Elabora un plan de inducción de la primera semana: actividades por día, responsables y una forma de evaluar si la inducción funcionó.",
    habilidades: ["Gestión del talento", "Planificación", "Comunicación interna"],
    criterios: [
      { texto: "Organiza actividades en el tiempo", claves: ["dia 1", "lunes", "martes", "semana", "dia", "cronograma", "agenda"] },
      { texto: "Incluye cultura y funciones del puesto", claves: ["cultura", "valores", "funciones", "puesto", "manual", "politica", "herramienta"] },
      { texto: "Define responsables y acompañamiento", claves: ["responsable", "mentor", "jefe", "lider", "tutor", "acompan", "supervisor"] },
      { texto: "Propone una evaluación de la inducción", claves: ["encuesta", "evaluacion", "feedback", "retroaliment", "indicador", "satisfaccion", "medir"] }
    ]
  },
  {
    id: "datos",
    titulo: "Construye un reporte de ventas mensual",
    empresa: "DataSur Analytics",
    area: "Tecnología",
    minutos: 25,
    nivel: "Intermedio",
    situacion: "Una distribuidora registra sus ventas en hojas sueltas y la gerencia no puede ver tendencias. Necesitan un reporte mensual claro para tomar decisiones.",
    entregable: "Define tres indicadores clave, el tipo de gráfico para cada uno, la fuente de datos y una conclusión de ejemplo que el reporte permitiría obtener.",
    habilidades: ["Análisis de datos", "Power BI / Excel", "Visualización"],
    criterios: [
      { texto: "Elige indicadores clave relevantes", claves: ["indicador", "kpi", "ventas", "ticket promedio", "margen", "crecimiento", "producto"] },
      { texto: "Justifica la visualización", claves: ["grafico", "barras", "lineas", "torta", "tabla", "dashboard", "tendencia"] },
      { texto: "Identifica la fuente de datos", claves: ["fuente", "base de datos", "excel", "sistema", "erp", "registro", "csv"] },
      { texto: "Llega a una conclusión accionable", claves: ["conclusion", "decision", "recomend", "aumentar", "reducir", "porque", "por lo tanto"] }
    ]
  },
  {
    id: "marca",
    titulo: "Rediseña la identidad de una cafetería",
    empresa: "Café Aurora",
    area: "Diseño",
    minutos: 25,
    nivel: "Avanzado",
    situacion: "Una cafetería de barrio quiere atraer a público universitario, pero su imagen se percibe antigua y poco reconocible en redes sociales.",
    entregable: "Propón un concepto de marca, una paleta de colores con su justificación, una tipografía y dos aplicaciones (por ejemplo, empaque y post).",
    habilidades: ["Branding", "Diseño visual", "Pensamiento creativo"],
    criterios: [
      { texto: "Plantea un concepto claro", claves: ["concepto", "personalidad", "publico", "universitario", "esencia", "idea"] },
      { texto: "Justifica la paleta de colores", claves: ["color", "paleta", "rosa", "marron", "verde", "transmite", "representa", "#"] },
      { texto: "Elige una tipografía adecuada", claves: ["tipografia", "fuente", "serif", "sans", "legible", "letra"] },
      { texto: "Muestra aplicaciones concretas", claves: ["empaque", "vaso", "post", "instagram", "carta", "menu", "letrero", "aplicacion"] }
    ]
  },
  {
    id: "pitch",
    titulo: "Prepara tu pitch personal de 60 segundos",
    empresa: "Red Mentora",
    area: "Habilidades blandas",
    minutos: 15,
    nivel: "Básico",
    situacion: "Un reclutador ficticio te da un minuto en una feria laboral para presentarte. Muchos jóvenes desaprovechan ese momento porque no saben qué destacar.",
    entregable: "Escribe tu pitch: quién eres, qué sabes hacer (con un logro concreto), qué buscas y una pregunta de cierre para el reclutador.",
    habilidades: ["Comunicación oral", "Marca personal", "Autoconocimiento"],
    criterios: [
      { texto: "Se presenta con claridad", claves: ["soy", "estudiante", "egresad", "carrera", "me llamo", "ciclo"] },
      { texto: "Muestra un logro concreto", claves: ["logre", "logro", "proyecto", "aument", "reduj", "organice", "lidere", "%"] },
      { texto: "Expresa qué busca", claves: ["busco", "practicas", "puesto", "oportunidad", "area", "me interesa", "objetivo"] },
      { texto: "Cierra con una pregunta", claves: ["?", "pregunta", "podria", "que valoran", "como es"] }
    ]
  },
  {
    id: "conflicto",
    titulo: "Resuelve un conflicto en un equipo de trabajo",
    empresa: "Grupo Sinergia",
    area: "Habilidades blandas",
    minutos: 20,
    nivel: "Intermedio",
    situacion: "En un equipo de cuatro practicantes, dos integrantes discuten porque uno siente que hace todo el trabajo. La entrega del proyecto es en una semana.",
    entregable: "Describe cómo mediarías: la conversación que propondrías, cómo redistribuirías tareas y cómo darías seguimiento para evitar que se repita.",
    habilidades: ["Trabajo en equipo", "Resolución de conflictos", "Liderazgo"],
    criterios: [
      { texto: "Escucha ambas partes", claves: ["escuchar", "escucha", "reunion", "conversacion", "ambas partes", "dialogo", "empatia"] },
      { texto: "Redistribuye tareas de forma justa", claves: ["tarea", "distribu", "roles", "responsab", "asignar", "equitativ"] },
      { texto: "Mantiene el foco en el objetivo", claves: ["entrega", "objetivo", "plazo", "proyecto", "meta", "fecha"] },
      { texto: "Define un seguimiento", claves: ["seguimiento", "check", "semanal", "diario", "tablero", "trello", "revisar", "acuerdo"] }
    ]
  },
  {
    id: "excel",
    titulo: "Automatiza un control de inventario en Excel",
    empresa: "Almacenes Rímac",
    area: "Logística",
    minutos: 20,
    nivel: "Intermedio",
    situacion: "Una ferretería anota sus entradas y salidas de productos a mano. A veces se queda sin stock de los artículos que más se venden.",
    entregable: "Describe la estructura de una hoja de inventario (columnas), dos fórmulas que usarías y una alerta para avisar cuando un producto llegue al stock mínimo.",
    habilidades: ["Excel", "Gestión de inventarios", "Pensamiento lógico"],
    criterios: [
      { texto: "Define columnas útiles", claves: ["columna", "codigo", "producto", "entrada", "salida", "stock", "fecha", "precio"] },
      { texto: "Usa fórmulas pertinentes", claves: ["suma", "sumar.si", "buscarv", "xlookup", "si(", "formula", "=", "contar.si"] },
      { texto: "Configura una alerta de stock mínimo", claves: ["minimo", "alerta", "formato condicional", "rojo", "reposicion", "aviso"] },
      { texto: "Conecta el control con una decisión", claves: ["compra", "pedido", "proveedor", "reponer", "decision", "rotacion"] }
    ]
  },
  {
    id: "ventas",
    titulo: "Responde a la objeción de un cliente",
    empresa: "Conecta Ventas",
    area: "Ventas",
    minutos: 15,
    nivel: "Básico",
    situacion: "Un cliente interesado en un plan de internet para su negocio dice: «Está muy caro, la competencia me ofrece algo más barato».",
    entregable: "Redacta tu respuesta al cliente: valida su preocupación, muestra el valor del servicio con dos argumentos y propone un siguiente paso concreto.",
    habilidades: ["Negociación", "Comunicación persuasiva", "Orientación al cliente"],
    criterios: [
      { texto: "Valida la preocupación del cliente", claves: ["entiendo", "comprendo", "es normal", "tiene razon", "valido", "preocupacion"] },
      { texto: "Argumenta con valor, no solo precio", claves: ["valor", "beneficio", "velocidad", "soporte", "estabilidad", "ahorro", "garantia", "calidad"] },
      { texto: "Usa datos o ejemplos", claves: ["%", "clientes", "ejemplo", "caso", "horas", "soles", "s/"] },
      { texto: "Propone un siguiente paso", claves: ["prueba", "demo", "llamada", "visita", "propuesta", "descuento", "le parece", "agendar"] }
    ]
  },
  {
    id: "correo",
    titulo: "Redacta un correo profesional difícil",
    empresa: "Oficina Central Lima",
    area: "Habilidades blandas",
    minutos: 15,
    nivel: "Básico",
    situacion: "Como practicante, cometiste un error en un reporte que tu jefa ya envió a un cliente. Debes informarle y proponer cómo corregirlo.",
    entregable: "Escribe el correo completo: asunto, saludo, explicación breve del error, la solución que propones y un cierre profesional.",
    habilidades: ["Comunicación escrita", "Responsabilidad", "Resolución de problemas"],
    criterios: [
      { texto: "Incluye un asunto claro", claves: ["asunto", "correccion", "reporte", "urgente", "actualizacion"] },
      { texto: "Reconoce el error con transparencia", claves: ["error", "equivoque", "disculpa", "lamento", "responsab", "detecte"] },
      { texto: "Propone una solución concreta", claves: ["solucion", "corregido", "adjunto", "version", "propongo", "enviar", "revisare"] },
      { texto: "Mantiene un tono profesional", claves: ["estimada", "saludos", "atentamente", "cordialmente", "quedo atent", "gracias"] }
    ]
  },
  {
    id: "procesos",
    titulo: "Reduce los tiempos de entrega de pedidos",
    empresa: "Rápido Express",
    area: "Logística",
    minutos: 25,
    nivel: "Avanzado",
    situacion: "Una empresa de delivery tarda en promedio 90 minutos en entregar pedidos dentro del distrito. Los clientes se quejan y algunos cancelan sus compras.",
    entregable: "Identifica tres posibles cuellos de botella del proceso, propone una mejora para cada uno y estima el nuevo tiempo de entrega que esperarías lograr.",
    habilidades: ["Mejora de procesos", "Análisis de problemas", "Logística"],
    criterios: [
      { texto: "Identifica cuellos de botella", claves: ["cuello de botella", "demora", "preparacion", "espera", "ruta", "despacho", "etapa"] },
      { texto: "Propone mejoras viables", claves: ["mejora", "ruta", "agrupar", "zona", "aplicacion", "app", "turno", "priorizar"] },
      { texto: "Usa un enfoque de proceso", claves: ["proceso", "flujo", "paso", "diagrama", "etapa", "secuencia"] },
      { texto: "Estima un resultado medible", claves: ["minutos", "%", "reducir", "tiempo promedio", "meta", "estimo"] }
    ]
  },
  {
    id: "liderazgo",
    titulo: "Organiza un voluntariado universitario",
    empresa: "Fundación Raíces",
    area: "Habilidades blandas",
    minutos: 20,
    nivel: "Intermedio",
    situacion: "Te piden coordinar a 15 estudiantes voluntarios para una campaña de reciclaje en tu universidad durante un sábado. Nadie ha organizado algo así antes.",
    entregable: "Presenta un plan con equipos y roles, un cronograma del día, cómo motivarías a los voluntarios y cómo medirías el impacto de la campaña.",
    habilidades: ["Liderazgo", "Gestión de proyectos", "Responsabilidad social"],
    criterios: [
      { texto: "Organiza equipos y roles", claves: ["equipo", "rol", "coordinador", "grupo", "lider", "encargado"] },
      { texto: "Plantea un cronograma", claves: ["hora", "am", "pm", "cronograma", "inicio", "cierre", "agenda", ":"] },
      { texto: "Considera la motivación del grupo", claves: ["motiv", "reconocimiento", "certificado", "agradec", "dinamica", "integracion"] },
      { texto: "Mide el impacto", claves: ["kilos", "kg", "impacto", "participantes", "medir", "indicador", "registro"] }
    ]
  },
  {
    id: "entrevista",
    titulo: "Responde una pregunta de entrevista con el método STAR",
    empresa: "Talento Andino",
    area: "Recursos Humanos",
    minutos: 15,
    nivel: "Básico",
    situacion: "En una entrevista para prácticas te preguntan: «Cuéntame de una vez en que resolviste un problema bajo presión».",
    entregable: "Responde usando el método STAR: Situación, Tarea, Acción y Resultado. Puedes usar una experiencia académica, laboral o personal.",
    habilidades: ["Entrevistas", "Comunicación", "Autoconocimiento"],
    criterios: [
      { texto: "Describe la situación", claves: ["situacion", "cuando", "en el curso", "en mi trabajo", "proyecto", "contexto"] },
      { texto: "Explica su tarea o responsabilidad", claves: ["tarea", "mi rol", "debia", "responsable", "me toco", "objetivo"] },
      { texto: "Detalla las acciones que tomó", claves: ["accion", "decidi", "organice", "propuse", "hable", "hice", "implemente"] },
      { texto: "Cuantifica el resultado", claves: ["resultado", "logramos", "%", "nota", "a tiempo", "aprendi", "consegui"] }
    ]
  }
];

const AREAS = [...new Set(RETOS.map(r => r.area))];
