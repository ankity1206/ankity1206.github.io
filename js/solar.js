const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

/* ================= RESIZE ================= */
function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initStars();
}

/* ================= STAR SYSTEM ================= */
let starLayers = [];
let shootingStars = [];

function initStars(){
  starLayers = [];

  const layers = [
    { count: 80, speed: 0.3, size: 1 },
    { count: 60, speed: 0.6, size: 1.5 },
    { count: 40, speed: 1, size: 2 }
  ];

  for (let l = 0; l < layers.length; l++) {
    const layer = layers[l];
    const stars = new Array(layer.count);

    for (let i = 0; i < layer.count; i++){
      stars[i] = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        drift: Math.random() * 0.02  // precomputed drift
      };
    }

    starLayers.push({
      stars: stars,
      speed: layer.speed,
      size: layer.size
    });
  }
}

/* ================= SHOOTING STARS ================= */
function createShootingStar(){
  shootingStars.push({
    x: Math.random() * canvas.width,
    y: 0,
    vx: 5,
    vy: 5,
    life: 0
  });
}

/* very low frequency */
setInterval(() => {
  if (shootingStars.length < 2 && Math.random() < 0.2) {
    createShootingStar();
  }
}, 3000);

/* ================= EVENTS ================= */
document.addEventListener("DOMContentLoaded", resize);
window.addEventListener("resize", resize);

/* ================= ANIMATION ================= */
function animate(){
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ffff";

  /* ===== DRAW STARS ===== */
  for (let l = 0; l < starLayers.length; l++) {
    const layer = starLayers[l];
    const stars = layer.stars;
    const speed = layer.speed;
    const size = layer.size;

    for (let i = 0; i < stars.length; i++){
      const s = stars[i];

      ctx.fillRect(s.x, s.y, size, size);

      s.y += speed;

      /* lightweight drift (no sin every frame) */
      s.x += s.drift;

      if (s.y > canvas.height){
        s.y = 0;
        s.x = Math.random() * canvas.width;
      }
    }
  }

  /* ===== SHOOTING STARS ===== */
  for (let i = shootingStars.length - 1; i >= 0; i--){
    const s = shootingStars[i];

    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(s.x - 20, s.y - 20);
    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 2;
    ctx.stroke();

    s.x += s.vx;
    s.y += s.vy;
    s.life++;

    if (s.life > 60){
      shootingStars.splice(i, 1);
    }
  }

  requestAnimationFrame(animate);
}

initStars();
animate();

/* ================= DROPDOWN ================= */
function toggleDropdown(event) {
  event.stopPropagation();
  const dropdown = event.currentTarget.nextElementSibling;
  if (dropdown) dropdown.classList.toggle("show");
}

window.addEventListener("click", function () {
  document.querySelectorAll(".dropdown-content").forEach(drop => {
    drop.classList.remove("show");
  });
});


window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});
