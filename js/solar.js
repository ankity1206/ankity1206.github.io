/* Scene */

const scene = new THREE.Scene();



/* Camera */

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
2000
);

camera.position.set(0,5,15);
camera.lookAt(0,0,0);



/* Renderer */

const renderer = new THREE.WebGLRenderer({
alpha:true,
antialias:true
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);



/* -------- STARFIELD LAYER 1 (DISTANT STARS) -------- */

const starGeometry1 = new THREE.BufferGeometry();

const starCount1 = 6000;

const positions1 = [];

for(let i=0;i<starCount1;i++){

positions1.push(
(Math.random()-0.5)*1500,
(Math.random()-0.5)*1500,
(Math.random()-0.5)*1500
);

}

starGeometry1.setAttribute(
'position',
new THREE.Float32BufferAttribute(positions1,3)
);

const starMaterial1 = new THREE.PointsMaterial({
color:0xffffff,
size:0.4,
sizeAttenuation:true
});

const stars1 = new THREE.Points(starGeometry1,starMaterial1);

scene.add(stars1);



/* -------- STARFIELD LAYER 2 (NEAR STARS) -------- */

const starGeometry2 = new THREE.BufferGeometry();

const starCount2 = 2000;

const positions2 = [];

for(let i=0;i<starCount2;i++){

positions2.push(
(Math.random()-0.5)*600,
(Math.random()-0.5)*600,
(Math.random()-0.5)*600
);

}

starGeometry2.setAttribute(
'position',
new THREE.Float32BufferAttribute(positions2,3)
);

const starMaterial2 = new THREE.PointsMaterial({
color:0xffffff,
size:0.8,
sizeAttenuation:true
});

const stars2 = new THREE.Points(starGeometry2,starMaterial2);

scene.add(stars2);



/* Sun */

const sunGeometry = new THREE.SphereGeometry(2,32,32);

const sunMaterial = new THREE.MeshBasicMaterial({
color:0xffcc00
});

const sun = new THREE.Mesh(sunGeometry,sunMaterial);

scene.add(sun);



/* Sun glow */

const glowGeometry = new THREE.SphereGeometry(2.6,32,32);

const glowMaterial = new THREE.MeshBasicMaterial({
color:0xffaa00,
transparent:true,
opacity:0.35
});

const glow = new THREE.Mesh(glowGeometry,glowMaterial);

scene.add(glow);



/* Light */

const light = new THREE.PointLight(0xffffff,2);

light.position.set(0,0,0);

scene.add(light);



/* Mercury */

const mercuryOrbit = new THREE.Object3D();
scene.add(mercuryOrbit);

const mercury = new THREE.Mesh(
new THREE.SphereGeometry(0.3,32,32),
new THREE.MeshStandardMaterial({color:0xaaaaaa})
);

mercury.position.x = 3;

mercuryOrbit.add(mercury);



/* Venus */

const venusOrbit = new THREE.Object3D();
scene.add(venusOrbit);

const venus = new THREE.Mesh(
new THREE.SphereGeometry(0.5,32,32),
new THREE.MeshStandardMaterial({color:0xffcc88})
);

venus.position.x = 4.5;

venusOrbit.add(venus);



/* Earth */

const earthOrbit = new THREE.Object3D();
scene.add(earthOrbit);

const earth = new THREE.Mesh(
new THREE.SphereGeometry(0.6,32,32),
new THREE.MeshStandardMaterial({color:0x3366ff})
);

earth.position.x = 6;

earthOrbit.add(earth);



/* Mars */

const marsOrbit = new THREE.Object3D();
scene.add(marsOrbit);

const mars = new THREE.Mesh(
new THREE.SphereGeometry(0.45,32,32),
new THREE.MeshStandardMaterial({color:0xff5533})
);

mars.position.x = 8;

marsOrbit.add(mars);



/* Tilt solar system for realism */

scene.rotation.x = 0.4;



/* Resize handling */

window.addEventListener("resize",()=>{

camera.aspect = window.innerWidth / window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth,window.innerHeight);

});



/* Animation */

function animate(){

requestAnimationFrame(animate);



/* Planet orbits */

mercuryOrbit.rotation.y += 0.03;
venusOrbit.rotation.y += 0.02;
earthOrbit.rotation.y += 0.01;
marsOrbit.rotation.y += 0.008;



/* Planet spin */

earth.rotation.y += 0.02;



/* Universe rotation */

stars1.rotation.y += 0.0002;
stars2.rotation.y += 0.0005;



/* Camera drift */

camera.position.x = Math.sin(Date.now()*0.0002)*2;
camera.lookAt(0,0,0);



renderer.render(scene,camera);

}



animate();
