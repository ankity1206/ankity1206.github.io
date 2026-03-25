const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

/* stars */
let stars = [];
for(let i=0;i<300;i++){
  stars.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    speed: Math.random()*1 + 0.2
  });
}

/* animation */
function animate(){
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "#00ffff";

  stars.forEach(s=>{
    ctx.fillRect(s.x, s.y, 1.5, 1.5);

    s.y += s.speed;

    if(s.y > canvas.height){
      s.y = 0;
      s.x = Math.random()*canvas.width;
    }
  });

  requestAnimationFrame(animate);
}

animate();
