const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


/* Sun */

const sunGeometry = new THREE.SphereGeometry(2,32,32);

const sunMaterial = new THREE.MeshBasicMaterial({color:0xffcc00});

const sun = new THREE.Mesh(sunGeometry, sunMaterial);

scene.add(sun);


/* Earth */

const earthOrbit = new THREE.Object3D();
scene.add(earthOrbit);

const earthGeometry = new THREE.SphereGeometry(0.6,32,32);

const earthMaterial = new THREE.MeshStandardMaterial({color:0x3366ff});

const earth = new THREE.Mesh(earthGeometry, earthMaterial);

earth.position.x = 6;

earthOrbit.add(earth);


/* Light */

const light = new THREE.PointLight(0xffffff,2);
scene.add(light);


/* Camera */

camera.position.z = 15;
camera.position.y = 5;
camera.lookAt(0,0,0);


/* Animation */

function animate(){

requestAnimationFrame(animate);

earthOrbit.rotation.y += 0.01;

renderer.render(scene,camera);

}

animate();
