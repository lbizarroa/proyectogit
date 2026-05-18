/* =============================================
   app.js · PROYECTO WEB · ISAM 2025
   Unidad I: Git + GitHub · Actividad Práctica
   ============================================= */

'use strict';

/* ══════════════════════════════════════════
   1. DATOS DEL PROYECTO
   ══════════════════════════════════════════ */

const DATOS = {
  nombre: 'Tu Nombre Aquí',

  tecnologias: [
    { nombre: 'HTML5 semántico',  icono: '🟧' },
    { nombre: 'CSS3 con variables y animaciones', icono: '🟦' },
    { nombre: 'JavaScript ES6+', icono: '🟨' },
    { nombre: 'Git — control de versiones', icono: '🟥' },
    { nombre: 'GitHub — repositorio remoto', icono: '⬛' },
  ],

  // Simula los commits que el estudiante debe realizar
  commits: [
    {
      hash: 'a1b2c3d',
      mensaje: 'feat: estructura inicial del proyecto (index.html)',
      fecha: 'Commit #1',
    },
    {
      hash: 'e4f5g6h',
      mensaje: 'style: añadir estilos personalizados (estilos.css)',
      fecha: 'Commit #2',
    },
    {
      hash: 'i7j8k9l',
      mensaje: 'feat: agregar lógica JavaScript (app.js)',
      fecha: 'Commit #3',
    },
  ],

  lineasCodigo: 312, // número objetivo del contador
};


/* ══════════════════════════════════════════
   2. UTILIDADES
   ══════════════════════════════════════════ */

/** Selecciona un elemento del DOM de forma segura */
const $ = (selector) => document.querySelector(selector);


/* ══════════════════════════════════════════
   3. NOMBRE DEL ESTUDIANTE
   ══════════════════════════════════════════ */

function initNombre () {
  const display = $('#nombre-display');
  const btnNombre = $('#btn-nombre');

  // Recuperar nombre guardado en localStorage
  const nombreGuardado = localStorage.getItem('isam-nombre');
  if (nombreGuardado) {
    DATOS.nombre = nombreGuardado;
    display.textContent = nombreGuardado;
  }

  // Crear modal de edición
  const modalHTML = `
    <div class="modal-overlay" id="modal-nombre">
      <div class="modal">
        <h3>¿Cuál es tu nombre?</h3>
        <input
          type="text"
          id="input-nombre"
          placeholder="Escribe tu nombre completo..."
          maxlength="60"
        />
        <div class="modal-actions">
          <button class="btn-cancel" id="btn-cancelar">Cancelar</button>
          <button class="btn-save"   id="btn-guardar">Guardar</button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const overlay   = $('#modal-nombre');
  const inputNom  = $('#input-nombre');
  const btnCancel = $('#btn-cancelar');
  const btnGuardar = $('#btn-guardar');

  function abrirModal () {
    inputNom.value = DATOS.nombre === 'Tu Nombre Aquí' ? '' : DATOS.nombre;
    overlay.classList.add('open');
    inputNom.focus();
  }

  function cerrarModal () {
    overlay.classList.remove('open');
  }

  function guardarNombre () {
    const val = inputNom.value.trim();
    if (!val) return;
    DATOS.nombre = val;
    display.textContent = val;
    localStorage.setItem('isam-nombre', val);
    cerrarModal();
  }

  btnNombre.addEventListener('click', abrirModal);
  btnCancel.addEventListener('click', cerrarModal);
  btnGuardar.addEventListener('click', guardarNombre);
  inputNom.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') guardarNombre();
    if (e.key === 'Escape') cerrarModal();
  });
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) cerrarModal();
  });
}


/* ══════════════════════════════════════════
   4. LISTA DE TECNOLOGÍAS
   ══════════════════════════════════════════ */

function renderTecnologias () {
  const lista = $('#tech-list');
  if (!lista) return;

  lista.innerHTML = DATOS.tecnologias.map((t) => `
    <li>
      <span class="tech-dot"></span>
      <span>${t.icono} ${t.nombre}</span>
    </li>
  `).join('');
}


/* ══════════════════════════════════════════
   5. LOG DE COMMITS
   ══════════════════════════════════════════ */

function renderCommits () {
  const log = $('#commit-log');
  if (!log) return;

  log.innerHTML = DATOS.commits.map((c) => `
    <div class="commit-item">
      <span class="commit-hash">${c.hash}</span>
      <div class="commit-info">
        <span class="commit-msg">${c.mensaje}</span>
        <span class="commit-date">${c.fecha}</span>
      </div>
    </div>
  `).join('');
}


/* ══════════════════════════════════════════
   6. CONTADOR ANIMADO
   ══════════════════════════════════════════ */

function animarContador () {
  const el = $('#counter');
  if (!el) return;

  const duracion = 2200; // ms
  const inicio   = performance.now();
  const objetivo = DATOS.lineasCodigo;

  function tick (ahora) {
    const transcurrido = ahora - inicio;
    const progreso     = Math.min(transcurrido / duracion, 1);
    // Easing: easeOutExpo
    const ease   = progreso === 1 ? 1 : 1 - Math.pow(2, -10 * progreso);
    const actual = Math.floor(ease * objetivo);
    el.textContent = actual;
    if (progreso < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}


/* ══════════════════════════════════════════
   7. INTERSECTION OBSERVER
   (dispara el contador cuando es visible)
   ══════════════════════════════════════════ */

function initObserver () {
  const seccion = $('.counter-section');
  if (!seccion) return;

  let yaAnimado = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !yaAnimado) {
        yaAnimado = true;
        animarContador();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(seccion);
}


/* ══════════════════════════════════════════
   8. CONSOLA DE BIENVENIDA
   (útil para la explicación en clase)
   ══════════════════════════════════════════ */

function consola () {
  console.log('%c🚀 Proyecto Web · ISAM 2025', 'font-size:18px; font-weight:bold; color:#6c5ff7;');
  console.log('%cArchivos del proyecto:', 'font-weight:bold;');
  console.log('  📄 index.html  — Estructura HTML');
  console.log('  🎨 estilos.css — Diseño y animaciones');
  console.log('  ⚡ app.js      — Lógica JavaScript');
  console.log('%cProceso Git:', 'font-weight:bold;');
  console.log('  git init');
  console.log('  git add .');
  console.log('  git commit -m "feat: estructura inicial"');
  console.log('  git remote add origin <URL>');
  console.log('  git push -u origin main');
}


/* ══════════════════════════════════════════
   9. INICIALIZACIÓN PRINCIPAL
   ══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initNombre();
  renderTecnologias();
  renderCommits();
  initObserver();
  consola();
});
