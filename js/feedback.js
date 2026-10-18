/* Motor de feedback orientativo: califica las respuestas marcadas y la justificación opcional. */
const Feedback = (() => {
  const normalizar = t => t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

  const NIVELES = [
    { min: 85, nombre: "Destacado", clase: "lvl-4" },
    { min: 65, nombre: "Logrado", clase: "lvl-3" },
    { min: 40, nombre: "En desarrollo", clase: "lvl-2" },
    { min: 0, nombre: "Inicial", clase: "lvl-1" }
  ];

  const PUNTOS_PREGUNTAS = 85;
  const PUNTOS_TEXTO = 15;

  function evaluar(reto, respuestas, texto = "") {
    const preguntas = PREGUNTAS[reto.id];
    const criterios = preguntas.map((q, i) => ({
      texto: reto.criterios[i].texto,
      pregunta: q.p,
      elegida: q.o[respuestas[i]],
      correctaTexto: q.o[q.c],
      correcta: respuestas[i] === q.c,
      explica: q.e
    }));
    const aciertos = criterios.filter(c => c.correcta).length;

    const t = normalizar(texto);
    const palabras = t.split(/\s+/).filter(Boolean).length;
    let bonoTexto = 0;
    if (palabras) {
      const claves = reto.criterios.flatMap(c => c.claves).filter(k => t.includes(normalizar(k))).length;
      bonoTexto = Math.min(PUNTOS_TEXTO, claves * 2 + (palabras >= 30 ? 4 : palabras >= 12 ? 2 : 0) + (/\d/.test(texto) ? 2 : 0));
    }

    const puntaje = Math.round(Math.min(100, aciertos / preguntas.length * PUNTOS_PREGUNTAS + bonoTexto));
    const nivel = NIVELES.find(n => puntaje >= n.min);

    const fortalezas = [];
    const mejoras = [];
    criterios.forEach(c => {
      if (c.correcta) fortalezas.push(`${c.texto}: elegiste la mejor opción.`);
      else mejoras.push(`${c.texto}: ${c.explica}`);
    });

    if (!palabras) mejoras.push(`Agrega una justificación breve (opcional) para practicar tu redacción y sumar hasta ${PUNTOS_TEXTO} puntos.`);
    else if (bonoTexto >= 10) fortalezas.push("Tu justificación usa conceptos clave del reto y respalda tus respuestas.");
    else mejoras.push("Tu justificación suma, pero puedes reforzarla con términos del reto y una cifra o meta concreta.");

    if (!mejoras.length) mejoras.push("Para llevarlo al siguiente nivel, anticipa un riesgo de tu propuesta y cómo lo mitigarías.");

    const resumen = {
      "Destacado": "Excelente trabajo. Dominas este reto y está listo para mostrarse en tu portafolio.",
      "Logrado": "Buen trabajo. Cumples con lo principal; revisa las recomendaciones para llegar a destacado.",
      "En desarrollo": "Vas por buen camino. Lee las explicaciones de las preguntas que fallaste y vuelve a intentarlo.",
      "Inicial": "Es un primer paso. Revisa la ficha del reto y las explicaciones antes de tu siguiente intento."
    }[nivel.nombre];

    return { puntaje, nivel: nivel.nombre, nivelClase: nivel.clase, aciertos, total: preguntas.length, bonoTexto, criterios, fortalezas, mejoras, resumen, palabras };
  }

  return { evaluar };
})();
