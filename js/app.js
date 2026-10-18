/* PROYECTA · aplicación de una sola página con rutas por hash y datos en localStorage. */
(() => {
  const app = document.getElementById("app");
  const crumb = document.getElementById("crumb");
  const modal = document.getElementById("modal");
  const modalPanel = document.getElementById("modalPanel");
  const toast = document.getElementById("toast");
  const ENMARCADO = window.self !== window.top;

  /* Navegación: guarda la ruta en memoria y la refleja en el hash cuando es posible. */
  let rutaActual = /^#\/[\w/-]+$/.test(location.hash) ? location.hash.slice(2) : "inicio";
  function ir(ruta) {
    rutaActual = ruta.replace(/^#?\/?/, "");
    try { history.replaceState(null, "", "#/" + rutaActual); } catch { /* sin historial */ }
    render();
  }

  /* ---------- Estado persistente ---------- */
  const KEY = "proyecta:v2";
  const estadoInicial = { perfil: null, entregas: [] };
  const cargar = () => {
    try { return { ...estadoInicial, ...JSON.parse(localStorage.getItem(KEY)) }; }
    catch { return { ...estadoInicial }; }
  };
  let estado = cargar();
  const guardar = () => {
    try { localStorage.setItem(KEY, JSON.stringify(estado)); } catch { /* sin almacenamiento */ }
  };

  /* ---------- Utilidades ---------- */
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reto = id => RETOS.find(r => r.id === id);
  const fecha = iso => new Date(iso).toLocaleDateString("es-PE", { day: "numeric", month: "short", year: "numeric" });
  const mejorEntrega = id => estado.entregas.filter(e => e.retoId === id).sort((a, b) => b.feedback.puntaje - a.feedback.puntaje)[0];
  const retosCompletados = () => new Set(estado.entregas.map(e => e.retoId)).size;
  const progreso = () => Math.round(retosCompletados() / RETOS.length * 100);

  function mostrarToast(msg) {
    toast.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(mostrarToast.t);
    mostrarToast.t = setTimeout(() => toast.classList.remove("is-visible"), 2600);
  }

  const ICON = {
    reto: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21l2-7.5L2 9h7z"/></svg>',
    entrega: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 15l2 2 4-4"/></svg>',
    progreso: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>',
    reloj: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
    verif: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1l2.6 2.2 3.4-.4.9 3.3 3 1.6-1.3 3.2 1.3 3.2-3 1.6-.9 3.3-3.4-.4L12 23l-2.6-2.2-3.4.4-.9-3.3-3-1.6L3.4 13 2.1 9.8l3-1.6.9-3.3 3.4.4z"/><path d="M8 12l3 3 5-6" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    flecha: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>'
  };

  /* ---------- Componentes ---------- */
  function tarjetaReto(r) {
    const hecha = mejorEntrega(r.id);
    return `
      <article class="card reto-card">
        <div class="reto-card__top">
          <span class="chip">${esc(r.area)}</span>
          ${hecha ? `<span class="chip chip--ok">${ICON.check} ${hecha.feedback.puntaje}/100</span>` : `<span class="chip chip--ghost">${esc(r.nivel)}</span>`}
        </div>
        <h3>${esc(r.titulo)}</h3>
        <p class="verified">${ICON.verif} Verificado por <strong>${esc(r.empresa)}</strong></p>
        <p class="muted clamp">${esc(r.situacion)}</p>
        <div class="tags tags--card">${r.habilidades.map(h => `<span class="chip chip--ghost">${esc(h)}</span>`).join("")}</div>
        <div class="reto-card__foot">
          <span class="meta">${ICON.reloj} ${r.minutos} minutos · Caso simulado</span>
          <button class="btn btn--outline btn--sm" data-ver="${r.id}">Ver reto ${ICON.flecha}</button>
        </div>
      </article>`;
  }

  function stat(icon, valor, etiqueta, tono) {
    return `<div class="card stat"><span class="stat__icon stat__icon--${tono}">${icon}</span><div><strong>${valor}</strong><span>${etiqueta}</span></div></div>`;
  }

  /* ---------- Vistas ---------- */
  function vistaInicio() {
    const nombre = estado.perfil?.nombre?.split(" ")[0];
    return `
      <section class="hero">
        <p class="eyebrow eyebrow--light">Empleabilidad con propósito</p>
        <h1>${nombre ? `Hola, ${esc(nombre)}. ` : ""}Tu potencial merece <span class="hl">hacerse visible.</span></h1>
        <p>Resuelve retos verificados por empresas, recibe feedback para mejorar y convierte tus conocimientos en un portafolio que puedas mostrar. Todo comienza con un primer reto.</p>
        <div class="hero__actions">
          <a href="#/retos" class="btn btn--white">Explorar retos ${ICON.flecha}</a>
          <a href="#/perfil" class="btn btn--glass">${estado.perfil ? "Editar mi perfil" : "Crear mi perfil"}</a>
        </div>
      </section>

      <section class="stats">
        ${stat(ICON.reto, RETOS.length, "Retos de práctica", "blue")}
        ${stat(ICON.entrega, estado.entregas.length, "Entregas realizadas", "sky")}
        ${stat(ICON.progreso, progreso() + "%", "Recorrido completado", "navy")}
      </section>

      <section class="section">
        <h2>¿Cómo funciona PROYECTA?</h2>
        <p class="muted">Una ruta de tres pasos para demostrar lo que sabes.</p>
        <div class="steps">
          <div class="card step"><span class="step__n">01</span><div><h3>Construye tu perfil</h3><p class="muted">Indica tu carrera, tu ciclo o año de egreso, tus intereses y tu objetivo profesional.</p></div></div>
          <div class="card step"><span class="step__n">02</span><div><h3>Resuelve retos verificados</h3><p class="muted">Marca la mejor opción en situaciones reales planteadas por empresas y, si quieres, justifica en pocas palabras.</p></div></div>
          <div class="card step"><span class="step__n">03</span><div><h3>Recibe feedback y muestra tu evidencia</h3><p class="muted">Cada entrega recibe recomendaciones de mejora y se guarda en tu portafolio.</p></div></div>
        </div>
      </section>

      <section class="section">
        <div class="section__head">
          <h2>Retos para empezar</h2>
          <a href="#/retos" class="link">Ver todos los retos →</a>
        </div>
        <div class="grid">${RETOS.slice(0, 3).map(tarjetaReto).join("")}</div>
      </section>

      <div class="notice"><strong>Importante:</strong> los casos, las organizaciones y las respuestas orientativas de esta demostración son simulados. PROYECTA no garantiza empleos, convenios ni certificaciones empresariales.</div>`;
  }

  let filtroArea = "Todas";
  let busqueda = "";
  function vistaRetos() {
    return `
      <section class="section section--first">
        <p class="eyebrow">Catálogo</p>
        <h1 class="page-title">Retos para mejorar tus habilidades</h1>
        <p class="muted">${RETOS.length} retos verificados por empresas para practicar habilidades técnicas y blandas. Cada uno son 4 preguntas para marcar y toma entre 5 y 10 minutos.</p>
        <div class="toolbar">
          <input type="search" id="buscar" class="input" placeholder="Buscar por tema, habilidad o empresa…" value="${esc(busqueda)}" aria-label="Buscar retos">
          <div class="filters" role="group" aria-label="Filtrar por área">
            ${["Todas", ...AREAS].map(a => `<button class="filter ${a === filtroArea ? "is-active" : ""}" data-area="${esc(a)}">${esc(a)}</button>`).join("")}
          </div>
        </div>
        <div class="grid" id="listaRetos">${listaRetos()}</div>
      </section>`;
  }
  function listaRetos() {
    const q = busqueda.toLowerCase();
    const lista = RETOS.filter(r =>
      (filtroArea === "Todas" || r.area === filtroArea) &&
      (!q || [r.titulo, r.empresa, r.area, r.situacion, ...r.habilidades].join(" ").toLowerCase().includes(q)));
    return lista.length ? lista.map(tarjetaReto).join("") : `<p class="empty">No encontramos retos con ese criterio.</p>`;
  }

  function vistaParticipar(id) {
    const r = reto(id);
    if (!r) return vistaNoEncontrada();
    const previa = mejorEntrega(id);
    return `
      <section class="section section--first layout-2">
        <div>
          <a href="#/retos" class="link back">← Volver a retos</a>
          <p class="eyebrow">Entrega · ${esc(r.area)}</p>
          <h1 class="page-title">${esc(r.titulo)}</h1>
          <p class="verified">${ICON.verif} Verificado por <strong>${esc(r.empresa)}</strong> · caso ficticio</p>
          <form id="formEntrega" class="quiz">
            <div class="quiz__progress card">
              <span><strong id="respondidas">0</strong> de ${PREGUNTAS[id].length} respondidas</span>
              <div class="bar"><span id="barraQuiz" style="width:0%"></span></div>
            </div>
            ${PREGUNTAS[id].map((q, i) => `
              <fieldset class="card question">
                <legend class="question__label">Pregunta ${i + 1} · ${esc(r.criterios[i].texto)}</legend>
                <p class="question__text">${esc(q.p)}</p>
                <div class="options">
                  ${q.o.map((op, j) => `
                    <label class="option">
                      <input type="radio" name="q${i}" id="q${i}o${j}" value="${j}" ${j === 0 ? "required" : ""}>
                      <span class="option__mark" aria-hidden="true">${"ABCD"[j]}</span>
                      <span>${esc(op)}</span>
                    </label>`).join("")}
                </div>
              </fieldset>`).join("")}
            <div class="card form">
              <label for="respuesta" class="label label--first">Justifica en pocas palabras <span class="optional">Opcional · hasta +15 puntos</span></label>
              <p class="hint">Por ejemplo: qué harías primero y qué meta te pondrías.</p>
              <textarea id="respuesta" class="input textarea textarea--short" rows="3" placeholder="Ej. Primero asignaría un responsable por turno y mediría el tiempo de respuesta con una meta de 10 minutos."></textarea>
              <div class="form__foot">
                <span class="meta" id="contador">0 palabras</span>
                <button class="btn btn--primary" type="submit">Enviar y recibir feedback ${ICON.flecha}</button>
              </div>
            </div>
          </form>
          ${previa ? `<p class="muted small">Ya resolviste este reto (mejor puntaje: ${previa.feedback.puntaje}/100). Puedes intentarlo otra vez para mejorar.</p>` : ""}
        </div>
        <aside class="card brief">
          <h3>Situación de práctica</h3><p class="muted">${esc(r.situacion)}</p>
          <h3>Lo que vas a resolver</h3><p class="muted">${esc(r.entregable)}</p>
          <h3>Criterios de evaluación</h3>
          <ul class="checklist">${r.criterios.map(c => `<li>${esc(c.texto)}</li>`).join("")}</ul>
          <h3>Habilidades que demuestras</h3>
          <div class="tags">${r.habilidades.map(h => `<span class="chip">${esc(h)}</span>`).join("")}</div>
        </aside>
      </section>`;
  }

  function vistaFeedback(entregaId) {
    const e = estado.entregas.find(x => x.id === entregaId);
    if (!e) return vistaNoEncontrada();
    const r = reto(e.retoId);
    const f = e.feedback;
    return `
      <section class="section section--first">
        <a href="#/portafolio" class="link back">← Ir a mi portafolio</a>
        <p class="eyebrow">Feedback de mejora</p>
        <h1 class="page-title">${esc(r.titulo)}</h1>
        <div class="feedback-head card">
          <div class="score ${f.nivelClase}" style="--p:${f.puntaje}">
            <div><strong>${f.puntaje}</strong><span>/100</span></div>
          </div>
          <div>
            <span class="level ${f.nivelClase}">${f.nivel}</span>
            <p class="lead">${esc(f.resumen)}</p>
            <p class="muted small">${f.aciertos} de ${f.total} respuestas correctas${f.bonoTexto ? ` · +${f.bonoTexto} por tu justificación` : ""} · ${fecha(e.fecha)}</p>
          </div>
        </div>

        <div class="card">
          <h3>Revisión de tus respuestas</h3>
          <div class="review">
            ${f.criterios.map((c, i) => `
              <div class="review__item ${c.correcta ? "is-ok" : "is-bad"}">
                <span class="review__icon" aria-hidden="true">${c.correcta ? "✓" : "✕"}</span>
                <div>
                  <p class="review__q"><strong>${i + 1}. ${esc(c.pregunta)}</strong></p>
                  <p class="small">Tu respuesta: ${esc(c.elegida)}${c.correcta ? "" : `<br>Respuesta recomendada: <strong>${esc(c.correctaTexto)}</strong>`}</p>
                  <p class="small muted">${esc(c.explica)}</p>
                </div>
              </div>`).join("")}
          </div>
        </div>

        <div class="grid grid--2">
          <div class="card fb fb--good"><h3>Fortalezas</h3><ul>${f.fortalezas.map(x => `<li>${esc(x)}</li>`).join("") || "<li>Sigue practicando para identificar tus fortalezas.</li>"}</ul></div>
          <div class="card fb fb--improve"><h3>Para mejorar</h3><ul>${f.mejoras.map(x => `<li>${esc(x)}</li>`).join("") || "<li>¡No hay observaciones pendientes!</li>"}</ul></div>
        </div>

        ${e.texto ? `<details class="card">
          <summary>Ver mi justificación</summary>
          <pre class="entrega-texto">${esc(e.texto)}</pre>
        </details>` : ""}

        <div class="actions">
          <a href="#/participar/${r.id}" class="btn btn--outline">Intentar de nuevo</a>
          <a href="#/portafolio" class="btn btn--primary">Ver en mi portafolio ${ICON.flecha}</a>
        </div>
      </section>`;
  }

  function vistaPortafolio() {
    const p = estado.perfil;
    const mejores = RETOS.map(r => mejorEntrega(r.id)).filter(Boolean);
    const habilidades = [...new Set(mejores.flatMap(e => reto(e.retoId).habilidades))];
    const promedio = mejores.length ? Math.round(mejores.reduce((s, e) => s + e.feedback.puntaje, 0) / mejores.length) : 0;
    return `
      <section class="section section--first">
        <div class="portfolio-head card">
          <div class="avatar">${esc((p?.nombre || "P").trim().charAt(0).toUpperCase())}</div>
          <div class="portfolio-head__info">
            <p class="eyebrow">Portafolio profesional</p>
            <h1 class="page-title">${esc(p?.nombre || "Tu nombre")}</h1>
            <p class="muted">${p ? `${esc(p.carrera)} · ${esc(p.situacion)}${p.institucion ? " · " + esc(p.institucion) : ""}` : `<a href="#/perfil" class="link">Completa tu perfil</a> para personalizar tu portafolio.`}</p>
            ${p?.objetivo ? `<p class="objective">“${esc(p.objetivo)}”</p>` : ""}
          </div>
          ${ENMARCADO ? "" : `<button class="btn btn--outline no-print" id="imprimir">Descargar PDF</button>`}
        </div>

        <div class="stats">
          ${stat(ICON.reto, `${mejores.length}/${RETOS.length}`, "Retos completados", "blue")}
          ${stat(ICON.progreso, promedio, "Puntaje promedio", "sky")}
          ${stat(ICON.entrega, habilidades.length, "Habilidades demostradas", "navy")}
        </div>

        ${habilidades.length ? `<div class="card"><h3>Habilidades demostradas</h3><div class="tags">${habilidades.map(h => `<span class="chip">${esc(h)}</span>`).join("")}</div></div>` : ""}

        <h2 class="section-title">Experiencias</h2>
        ${mejores.length ? `<div class="timeline">${mejores.map(e => {
          const r = reto(e.retoId);
          return `
            <article class="card exp">
              <div class="exp__top">
                <div>
                  <h3>${esc(r.titulo)}</h3>
                  <p class="verified">${ICON.verif} ${esc(r.empresa)} · ${esc(r.area)} · ${fecha(e.fecha)}</p>
                </div>
                <span class="level ${e.feedback.nivelClase}">${e.feedback.puntaje}/100 · ${e.feedback.nivel}</span>
              </div>
              <p class="muted">${e.feedback.aciertos} de ${e.feedback.total} respuestas correctas${e.texto ? ` · “${esc(e.texto.length > 140 ? e.texto.slice(0, 140) + "…" : e.texto)}”` : ""}</p>
              <div class="tags">${r.habilidades.map(h => `<span class="chip chip--ghost">${esc(h)}</span>`).join("")}</div>
              ${e.feedback.mejoras[0] ? `<p class="next-step"><strong>Siguiente paso:</strong> ${esc(e.feedback.mejoras[0])}</p>` : ""}
              <a class="link no-print" href="#/feedback/${e.id}">Ver feedback completo →</a>
            </article>`;
        }).join("")}</div>` : `
          <div class="card empty-state">
            <h3>Tu portafolio está esperando su primera experiencia</h3>
            <p class="muted">Resuelve un reto y tu entrega aparecerá aquí con su feedback de mejora.</p>
            <a href="#/retos" class="btn btn--primary">Explorar retos ${ICON.flecha}</a>
          </div>`}
      </section>`;
  }

  function vistaPerfil() {
    const p = estado.perfil || {};
    const opt = (v, actual) => `<option ${v === actual ? "selected" : ""}>${v}</option>`;
    return `
      <section class="section section--first narrow">
        <p class="eyebrow">Paso 01</p>
        <h1 class="page-title">${estado.perfil ? "Edita tu perfil" : "Crea tu perfil"}</h1>
        <p class="muted">Esta información aparecerá en tu portafolio.</p>
        <form id="formPerfil" class="card form">
          <label class="label" for="nombre">Nombre completo</label>
          <input class="input" id="nombre" name="nombre" required value="${esc(p.nombre)}" placeholder="Ej. Valeria Ramos">

          <div class="row">
            <div>
              <label class="label" for="carrera">Carrera</label>
              <input class="input" id="carrera" name="carrera" required value="${esc(p.carrera)}" placeholder="Ej. Administración de Empresas">
            </div>
            <div>
              <label class="label" for="situacion">Situación académica</label>
              <select class="input" id="situacion" name="situacion">
                ${["Penúltimo ciclo", "Último ciclo", "Egresado/a", "Bachiller", "Titulado/a"].map(v => opt(v, p.situacion)).join("")}
              </select>
            </div>
          </div>

          <label class="label" for="institucion">Institución educativa</label>
          <input class="input" id="institucion" name="institucion" value="${esc(p.institucion)}" placeholder="Universidad o instituto">

          <span class="label">Áreas de interés</span>
          <div class="checks">
            ${AREAS.map(a => `<label class="check"><input type="checkbox" name="intereses" value="${esc(a)}" ${(p.intereses || []).includes(a) ? "checked" : ""}><span>${esc(a)}</span></label>`).join("")}
          </div>

          <label class="label" for="objetivo">Objetivo profesional</label>
          <textarea class="input textarea" id="objetivo" name="objetivo" rows="3" placeholder="Ej. Conseguir mis primeras prácticas en el área de marketing digital.">${esc(p.objetivo)}</textarea>

          <div class="form__foot">
            ${estado.perfil ? `<button type="button" class="btn btn--ghost" id="borrar">Borrar mis datos</button>` : "<span></span>"}
            <button class="btn btn--primary" type="submit">Guardar perfil</button>
          </div>
          <div class="confirm" id="confirmBorrar" hidden>
            <p>¿Seguro que quieres borrar tu perfil y todas tus entregas? Esta acción no se puede deshacer.</p>
            <div class="actions">
              <button type="button" class="btn btn--outline" id="cancelarBorrar">Cancelar</button>
              <button type="button" class="btn btn--primary" id="confirmarBorrar">Sí, borrar todo</button>
            </div>
          </div>
        </form>
      </section>`;
  }

  const vistaNoEncontrada = () => `<section class="section section--first card empty-state"><h2>Página no encontrada</h2><a href="#/inicio" class="btn btn--primary">Ir al inicio</a></section>`;

  /* ---------- Modal de ficha de reto ---------- */
  let ultimoFoco = null;
  function abrirFicha(id) {
    const r = reto(id);
    ultimoFoco = document.activeElement;
    modalPanel.innerHTML = `
      <button class="modal__close" data-close aria-label="Cerrar">✕</button>
      <p class="eyebrow">Ficha de reto · Demostración</p>
      <h2 id="modalTitle">${esc(r.titulo)}</h2>
      <p class="meta-line"><strong>${esc(r.empresa)} · caso ficticio</strong> · ${esc(r.area)} · ${r.minutos} minutos</p>
      <div class="box"><h3>Situación de práctica</h3><p>${esc(r.situacion)}</p></div>
      <div class="box"><h3>Lo que vas a resolver</h3><p>${esc(r.entregable)}</p></div>
      <div class="box"><h3>Criterios orientativos</h3><ul>${r.criterios.map(c => `<li>${esc(c.texto)}</li>`).join("")}</ul></div>
      <div class="notice">Los retos de esta versión son simulados y ninguna organización real evaluará tu entrega.</div>
      <div class="modal__actions">
        <a href="#/participar/${r.id}" class="btn btn--primary" data-close>Participar en este reto →</a>
        <button class="btn btn--outline" data-close>Volver a explorar</button>
      </div>`;
    modal.hidden = false;
    document.body.classList.add("no-scroll");
    modalPanel.querySelector(".modal__close").focus();
  }
  function cerrarFicha() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove("no-scroll");
    ultimoFoco?.focus?.();
  }

  /* ---------- Router ---------- */
  const RUTAS = {
    inicio: { titulo: "Inicio", vista: vistaInicio },
    retos: { titulo: "Retos", vista: vistaRetos },
    participar: { titulo: "Entrega", vista: vistaParticipar, nav: "retos" },
    feedback: { titulo: "Feedback", vista: vistaFeedback, nav: "portafolio" },
    portafolio: { titulo: "Portafolio", vista: vistaPortafolio },
    perfil: { titulo: "Mi perfil", vista: vistaPerfil }
  };

  function render() {
    const [nombre = "inicio", param] = rutaActual.split("/");
    const ruta = RUTAS[nombre] || RUTAS.inicio;
    cerrarFicha();
    app.innerHTML = ruta.vista(param);
    crumb.textContent = ruta.titulo;
    document.querySelectorAll(".nav a").forEach(a => a.classList.toggle("is-active", a.dataset.route === (ruta.nav || nombre)));
    document.getElementById("nav").classList.remove("is-open");
    document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
    window.scrollTo({ top: 0 });
  }

  /* ---------- Eventos ---------- */
  document.addEventListener("click", e => {
    const enlace = e.target.closest('a[href^="#/"]');
    if (enlace) { e.preventDefault(); ir(enlace.getAttribute("href")); return; }

    const ver = e.target.closest("[data-ver]");
    if (ver) return abrirFicha(ver.dataset.ver);

    if (e.target.closest("[data-close]")) cerrarFicha();

    const filtro = e.target.closest("[data-area]");
    if (filtro) {
      filtroArea = filtro.dataset.area;
      document.querySelectorAll(".filter").forEach(b => b.classList.toggle("is-active", b === filtro));
      document.getElementById("listaRetos").innerHTML = listaRetos();
    }

    if (e.target.closest("#imprimir")) window.print();

    if (e.target.closest("#borrar")) document.getElementById("confirmBorrar").hidden = false;
    if (e.target.closest("#cancelarBorrar")) document.getElementById("confirmBorrar").hidden = true;
    if (e.target.closest("#confirmarBorrar")) {
      estado = { ...estadoInicial, entregas: [] };
      guardar();
      mostrarToast("Tus datos fueron eliminados.");
      ir("inicio");
    }

    if (e.target.closest("#menuToggle")) {
      const nav = document.getElementById("nav");
      const abierto = nav.classList.toggle("is-open");
      e.target.closest("#menuToggle").setAttribute("aria-expanded", String(abierto));
    }
  });

  document.addEventListener("input", e => {
    if (e.target.id === "buscar") {
      busqueda = e.target.value;
      document.getElementById("listaRetos").innerHTML = listaRetos();
    }
    if (e.target.matches?.('#formEntrega input[type="radio"]')) {
      const total = PREGUNTAS[rutaActual.split("/")[1]].length;
      const n = new Set([...document.querySelectorAll('#formEntrega input[type="radio"]:checked')].map(x => x.name)).size;
      document.getElementById("respondidas").textContent = n;
      document.getElementById("barraQuiz").style.width = `${n / total * 100}%`;
    }
    if (e.target.id === "respuesta") {
      const n = e.target.value.trim().split(/\s+/).filter(Boolean).length;
      document.getElementById("contador").textContent = `${n} palabra${n === 1 ? "" : "s"}`;
    }
  });

  document.addEventListener("submit", e => {
    e.preventDefault();
    if (e.target.id === "formPerfil") {
      const d = new FormData(e.target);
      estado.perfil = {
        nombre: d.get("nombre").trim(),
        carrera: d.get("carrera").trim(),
        situacion: d.get("situacion"),
        institucion: d.get("institucion").trim(),
        intereses: d.getAll("intereses"),
        objetivo: d.get("objetivo").trim()
      };
      guardar();
      mostrarToast("Perfil guardado correctamente.");
      ir("retos");
    }
    if (e.target.id === "formEntrega") {
      const id = rutaActual.split("/")[1];
      const d = new FormData(e.target);
      const respuestas = PREGUNTAS[id].map((_, i) => Number(d.get(`q${i}`)));
      const texto = document.getElementById("respuesta").value.trim();
      const entrega = { id: Date.now().toString(36), retoId: id, respuestas, texto, fecha: new Date().toISOString(), feedback: Feedback.evaluar(reto(id), respuestas, texto) };
      estado.entregas.push(entrega);
      guardar();
      ir(`feedback/${entrega.id}`);
    }
  });

  document.addEventListener("keydown", e => { if (e.key === "Escape") cerrarFicha(); });
  window.addEventListener("hashchange", () => {
    if (/^#\/[\w/-]+$/.test(location.hash) && location.hash.slice(2) !== rutaActual) ir(location.hash);
  });
  render();
})();
