import * as THREE from "three";

const mouse = {

    x:0,

    y:0

};

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setPixelRatio(window.devicePixelRatio);

const container = document.getElementById("three-container");

container.appendChild(renderer.domElement);

const starsGeometry = new THREE.BufferGeometry();

const starCount = 3000;

const starVertices = [];

for (let i = 0; i < starCount; i++) {

    starVertices.push(

        (Math.random() - 0.5) * 2000,

        (Math.random() - 0.5) * 2000,

        (Math.random() - 0.5) * 2000

    );

}

starsGeometry.setAttribute(

    "position",

    new THREE.Float32BufferAttribute(starVertices, 3)

);

const starsMaterial = new THREE.PointsMaterial({

    color:0x00e5ff,

    size:2,

    transparent:true,

    opacity:0.85,

    depthWrite:false

});

const stars = new THREE.Points(

    starsGeometry,

    starsMaterial

);

scene.add(stars);

function animate(){

    requestAnimationFrame(animate);

    const time = Date.now() * 0.0002;

    stars.rotation.y = time;

    stars.rotation.x = Math.sin(time * 0.5) * 0.15;

    camera.position.x += (mouse.x*0.5-camera.position.x)*0.05;

    camera.position.y += (mouse.y*0.5-camera.position.y)*0.05;

    camera.lookAt(scene.position);

    renderer.render(scene,camera);

}

window.addEventListener("mousemove",(event)=>{

    mouse.x=(event.clientX/window.innerWidth)*2-1;

    mouse.y=-(event.clientY/window.innerHeight)*2+1;

});

animate();

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(

window.innerWidth,

window.innerHeight

);

});