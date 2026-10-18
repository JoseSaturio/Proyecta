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
  }
];

const AREAS = [...new Set(RETOS.map(r => r.area))];
