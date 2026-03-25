const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

/* ================= CANVAS RESIZE ================= */
function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initStars();
}

/* ================= STARS ================= */
let stars = [];

function initStars(){
  stars = [];

  for(let i=0;i<300;i++){
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: Math.random() * 1 + 0.2
    });
  }
}

/* ================= LAYOUT FIX ================= */
function adjustLayout() {
  const navbar = document.querySelector(".navbar");
  const container = document.querySelector(".container");

  if (navbar && container) {
    container.style.marginTop = navbar.offsetHeight + "px";
  }
}

/* ================= EVENTS ================= */
document.addEventListener("DOMContentLoaded", () => {
  resize();
  adjustLayout();

  /* 🔥 observe navbar size changes */
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    const observer = new ResizeObserver(() => {
      adjustLayout();
    });
    observer.observe(navbar);
  }
});

window.addEventListener("resize", () => {
  resize();
  adjustLayout();
});

/* ================= ANIMATION ================= */
function animate(){
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "#00ffff";

  for(let i=0;i<stars.length;i++){
    let s = stars[i];

    ctx.fillRect(s.x, s.y, 1.5, 1.5);

    s.y += s.speed;

    if(s.y > canvas.height){
      s.y = 0;
      s.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(animate);
}

animate();
