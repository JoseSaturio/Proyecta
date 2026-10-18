/* Motor de feedback orientativo: analiza la entrega frente a los criterios del reto. */
const Feedback = (() => {
  const normalizar = t => t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

  const NIVELES = [
    { min: 85, nombre: "Destacado", clase: "lvl-4" },
    { min: 65, nombre: "Logrado", clase: "lvl-3" },
    { min: 40, nombre: "En desarrollo", clase: "lvl-2" },
    { min: 0, nombre: "Inicial", clase: "lvl-1" }
  ];

  function evaluar(reto, texto) {
    const t = normalizar(texto);
    const palabras = t.split(/\s+/).filter(Boolean).length;
    const tieneLista = /(^|\n)\s*([-•*]|\d+[.)])\s+/.test(texto);
    const tieneNumeros = /\d/.test(texto);

    const criterios = reto.criterios.map(c => {
      const hallados = c.claves.filter(k => t.includes(normalizar(k)));
      const puntos = Math.min(3, hallados.length);
      return { texto: c.texto, puntos, hallados };
    });

    let base = criterios.reduce((s, c) => s + c.puntos, 0) / (criterios.length * 3) * 80;
    if (palabras >= 80) base += 8; else if (palabras >= 40) base += 4;
    if (tieneLista) base += 6;
    if (tieneNumeros) base += 6;
    const puntaje = Math.round(Math.min(100, base));
    const nivel = NIVELES.find(n => puntaje >= n.min);

    const fortalezas = [];
    const mejoras = [];

    criterios.forEach(c => {
      if (c.puntos >= 2) fortalezas.push(`${c.texto}: lo abordas con claridad.`);
      else if (c.puntos === 1) mejoras.push(`${c.texto}: está presente, pero desarróllalo con más detalle o un ejemplo.`);
      else mejoras.push(`${c.texto}: no se identifica en tu entrega. Agrégalo de forma explícita.`);
    });

    if (palabras < 40) mejoras.push("Tu respuesta es muy breve. Explica el porqué de cada propuesta (apunta a 80–200 palabras).");
    else if (palabras < 80) mejoras.push("Puedes profundizar un poco más: justifica brevemente por qué cada propuesta funcionaría.");
    else if (palabras > 400) mejoras.push("Tu respuesta es extensa. Sintetiza: una empresa valora propuestas directas.");
    else fortalezas.push("La extensión es adecuada para una propuesta ejecutiva.");

    if (tieneLista) fortalezas.push("Organizas las ideas en lista, lo que facilita la lectura.");
    else mejoras.push("Usa viñetas o pasos numerados para que tu propuesta sea más fácil de revisar.");

    if (tieneNumeros) fortalezas.push("Incluyes cifras o metas concretas, lo que hace tu propuesta medible.");
    else mejoras.push("Añade al menos una cifra (meta, plazo, porcentaje o monto) para que tu propuesta sea verificable.");

    if (!mejoras.length) mejoras.push("Para llevarlo al siguiente nivel, anticipa un riesgo de tu propuesta y cómo lo mitigarías.");

    const resumen = {
      "Destacado": "Excelente trabajo. Tu propuesta es sólida y está lista para mostrarse en tu portafolio.",
      "Logrado": "Buen trabajo. Cumples con lo principal; con algunos ajustes tu propuesta será sobresaliente.",
      "En desarrollo": "Vas por buen camino. Refuerza los criterios señalados y vuelve a intentarlo.",
      "Inicial": "Es un primer paso. Revisa la ficha del reto y responde punto por punto a lo que se pide."
    }[nivel.nombre];

    return { puntaje, nivel: nivel.nombre, nivelClase: nivel.clase, criterios, fortalezas, mejoras, resumen, palabras };
  }

  return { evaluar };
})();
