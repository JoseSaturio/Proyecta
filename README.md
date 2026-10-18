# PROYECTA · Tu talento, en acción

Plataforma web para estudiantes de últimos ciclos y recién egresados: resuelven **retos verificados por empresas**, reciben **feedback de mejora** y construyen automáticamente un **portafolio profesional** con sus experiencias.

## Funcionalidades

- **Inicio**: propuesta de valor, estadísticas de avance y retos destacados.
- **Catálogo de retos**: búsqueda y filtro por área (Administración, Contabilidad, Marketing, RR. HH., Tecnología, Diseño).
- **Ficha de reto**: situación, entregable, criterios y empresa que lo verifica.
- **Entrega**: 4 preguntas de opción múltiple por reto y una justificación breve opcional (+15 puntos).
- **Feedback de mejora**: puntaje /100, nivel, desempeño por criterio, fortalezas y recomendaciones.
- **Portafolio**: perfil, habilidades demostradas, experiencias con su puntaje y siguiente paso; exportable a PDF.
- **Perfil**: carrera, situación académica, institución, intereses y objetivo profesional.

## Tecnologías

- **HTML5** – estructura
- **CSS3** – diseño responsive (paleta blanco y rosa, sin frameworks)
- **JavaScript (vanilla)** – SPA con rutas por hash, motor de feedback y `localStorage` para guardar datos

No requiere instalación ni compilación.

## Cómo ejecutarlo

Abre `index.html` en el navegador, o sirve la carpeta:

```bash
python3 -m http.server 8000
# luego visita http://localhost:8000
```

## Estructura

```
index.html        Estructura principal
css/styles.css    Estilos
js/data.js        Catálogo de retos y empresas (ficticias)
js/preguntas.js   Preguntas de opción múltiple por reto
js/feedback.js    Motor de feedback orientativo
js/app.js         Rutas, vistas, perfil, entregas y portafolio
```

> Versión de demostración: las empresas y retos son ficticios y el feedback es automático y orientativo.
