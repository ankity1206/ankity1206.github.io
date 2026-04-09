const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

let DPR = window.devicePixelRatio || 1;

function resizeCanvas() {
  canvas.width = window.innerWidth * DPR;
  canvas.height = window.innerHeight * DPR;
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
}

resizeCanvas();

const stars = [];
const supernovas = [];
const nebulas = [];

// Adaptive counts
const isLowEnd = navigator.hardwareConcurrency <= 4;

const STAR_COUNT = isLowEnd ? 120 : 220;
const SUPERNOVA_COUNT = isLowEnd ? 3 : 6;
const NEBULA_COUNT = isLowEnd ? 8 : 15;

const rand = (min, max) => Math.random() * (max - min) + min;

// ===== INIT =====
function init() {
  stars.length = 0;
  supernovas.length = 0;
  nebulas.length = 0;

  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * canvas.width / DPR,
      y: Math.random() * canvas.height / DPR,
      radius: Math.random() * 1.5 + 0.5,
      color: `rgba(255,255,${rand(200,255)},0.8)`
    });
  }

  // CACHE gradients (IMPORTANT)
  for (let i = 0; i < SUPERNOVA_COUNT; i++) {
    let x = Math.random() * canvas.width / DPR;
    let y = Math.random() * canvas.height / DPR;
    let r = 5 + Math.random() * 8;

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
    gradient.addColorStop(0, `hsla(${rand(20,50)},100%,50%,1)`);
    gradient.addColorStop(1, 'rgba(255,255,255,0)');

    supernovas.push({ x, y, radius: r, gradient });
  }

  for (let i = 0; i < NEBULA_COUNT; i++) {
    let x = Math.random() * canvas.width / DPR;
    let y = Math.random() * canvas.height / DPR;
    let r = 100 + Math.random() * 150;

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
    gradient.addColorStop(0, `hsla(${rand(180,250)},50%,50%,0.12)`);
    gradient.addColorStop(1, 'rgba(0,0,0,0)');

    nebulas.push({ x, y, radius: r, gradient });
  }
}

init();

// ===== DRAW =====

function drawStars() {
  for (let i = 0; i < stars.length; i++) {
    let s = stars[i];
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fillStyle = s.color;
    ctx.fill();
  }
}

function drawNebulas() {
  for (let i = 0; i < nebulas.length; i++) {
    let n = nebulas[i];
    ctx.fillStyle = n.gradient;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawSupernovas() {
  for (let i = 0; i < supernovas.length; i++) {
    let sn = supernovas[i];
    ctx.fillStyle = sn.gradient;
    ctx.beginPath();
    ctx.arc(sn.x, sn.y, sn.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

// ===== LOOP =====

let last = performance.now();
let fps = 60;

function render(now) {
  fps = 1000 / (now - last);
  last = now;

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawNebulas();
  drawStars();
  drawSupernovas();

  requestAnimationFrame(render);
}

requestAnimationFrame(render);

// ===== RESIZE =====

window.addEventListener('resize', () => {
  resizeCanvas();
  init();
});

// ===== PAUSE WHEN TAB INACTIVE =====

document.addEventListener("visibilitychange", () => {
  if (document.hidden) cancelAnimationFrame(render);
  else requestAnimationFrame(render);
});