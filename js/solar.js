const scene = new THREE.Scene();


/* Camera */

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);

camera.position.set(0,5,15);
camera.lookAt(0,0,0);


/* Renderer */

const renderer = new THREE.WebGLRenderer({alpha:true, antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


/* Sun */

const sunGeometry = new THREE.SphereGeometry(2,32,32);

const sunMaterial = new THREE.MeshBasicMaterial({
color:0xffcc00
});

const sun = new THREE.Mesh(sunGeometry, sunMaterial);

scene.add(sun);


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


/* Resize handling */

window.addEventListener("resize", () => {

camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth, window.innerHeight);

});


/* Animation */

function animate(){

requestAnimationFrame(animate);

mercuryOrbit.rotation.y += 0.03;
venusOrbit.rotation.y += 0.02;
earthOrbit.rotation.y += 0.01;
marsOrbit.rotation.y += 0.008;

earth.rotation.y += 0.02;

renderer.render(scene,camera);

}

animate();
