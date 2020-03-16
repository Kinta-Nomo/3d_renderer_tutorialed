// import {square} from './models.js';
import {doubleSquare, cube, square} from './models.js';
import {drawPolygon} from './draw.js';
import {Camera} from './camera.js';
import {toMesh} from './mesh.js';

const canvas = document.querySelector('canvas'); //returns first css selector found
const context = canvas.getContext('2d'); //returns an object that provides methods and properties for drawing on the canvas.

const scene = [
    toMesh(cube)
];
const camera = new Camera();
camera.pos.z = 300;
camera.zoom = 20;

context.strokeStyle = "#fff";


function drawMesh(mesh){
    mesh.faces.forEach(polygon => {
        const projectedPolygon = polygon.map(point => ({...point})) //copy of each point
        projectedPolygon.forEach(point => {
            mesh.transform(point);
            camera.transform(point);
        });

        drawPolygon(projectedPolygon, context);
    });
}

function animate(time){
    context.clearRect(0, 0, canvas.width, canvas.height);
    camera.pos.z += 0.1;
    scene.forEach(mesh => {
        drawMesh(mesh);
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        mesh.offsetPosition.x = Math.sin(time/1000)*100;
        mesh.offsetPosition.y = Math.cos(time/1000)*100;
    })
    requestAnimationFrame(animate);
}

animate();