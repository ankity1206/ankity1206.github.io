const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const supernovas = [];
const nebulas = [];

const STAR_COUNT = 220;
const SUPERNOVA_COUNT = 6;
const NEBULA_COUNT = 15;

// Helper: random int
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Generate stars (static)
for (let i = 0; i < STAR_COUNT; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    color: `rgba(255, 255, ${rand(200, 255)}, 0.8)`
  });
}

// Generate supernovas
for (let i = 0; i < SUPERNOVA_COUNT; i++) {
  supernovas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: 5 + Math.random() * 8,
    hue: rand(20, 50),  // starting hue
  });
}

// Generate nebulas
for (let i = 0; i < NEBULA_COUNT; i++) {
  nebulas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: 100 + Math.random() * 150,
    hue: rand(180, 250), // starting hue
  });
}

// Draw static stars
function drawStars() {
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fillStyle = s.color;
    ctx.fill();
  });
}

// Draw nebulas with current hue
function drawNebulas() {
  nebulas.forEach(n => {
    const gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius);
    const color = `hsla(${n.hue}, 50%, 50%, 0.12)`;
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

// Draw supernovas with current hue
function drawSupernovas() {
  supernovas.forEach(sn => {
    const gradient = ctx.createRadialGradient(sn.x, sn.y, 0, sn.x, sn.y, sn.radius);
    const color = `hsla(${sn.hue}, 100%, 50%, 1)`;
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(sn.x, sn.y, sn.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

// Update hues for subtle color shift
function updateColors() {
  nebulas.forEach(n => { n.hue += 0.05; if (n.hue > 360) n.hue = 0; });
  supernovas.forEach(sn => { sn.hue += 0.1; if (sn.hue > 360) sn.hue = 0; });
}

// Main render loop (low frequency, 30fps is enough)
function render() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawNebulas();
  drawStars();
  drawSupernovas();

  updateColors();
  requestAnimationFrame(render);
}

// Start
render();

// ====== HANDLE RESIZE ======
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  stars.length = 0;
  supernovas.length = 0;
  nebulas.length = 0;

  for (let i = 0; i < STAR_COUNT; i++) stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    color: `rgba(255, 255, ${rand(200, 255)}, 0.8)`
  });

  for (let i = 0; i < SUPERNOVA_COUNT; i++) supernovas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: 5 + Math.random() * 8,
    hue: rand(20, 50)
  });

  for (let i = 0; i < NEBULA_COUNT; i++) nebulas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: 100 + Math.random() * 150,
    hue: rand(180, 250)
  });
});