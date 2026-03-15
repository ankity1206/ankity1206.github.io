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


/* Earth Orbit */

const earthOrbit = new THREE.Object3D();
scene.add(earthOrbit);


/* Earth */

const earthGeometry = new THREE.SphereGeometry(0.6,32,32);

const earthMaterial = new THREE.MeshStandardMaterial({
color:0x3366ff
});

const earth = new THREE.Mesh(earthGeometry, earthMaterial);

earth.position.x = 6;

earthOrbit.add(earth);


/* Light */

const light = new THREE.PointLight(0xffffff,2);
light.position.set(0,0,0);

scene.add(light);


/* Handle Window Resize */

window.addEventListener("resize", () => {

camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth, window.innerHeight);

});


/* Animation */

function animate(){

requestAnimationFrame(animate);

/* Orbit rotation */

earthOrbit.rotation.y += 0.01;

/* Earth spin */

earth.rotation.y += 0.02;

renderer.render(scene,camera);

}

animate();
