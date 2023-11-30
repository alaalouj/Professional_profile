const canvas = document.getElementById('techCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mesh = {
  points: [],
  speed: 1,
  density: 30,
};

function initializeMesh() {
  for (let x = 0; x < canvas.width; x += mesh.density) {
    for (let y = 0; y < canvas.height; y += mesh.density) {
      const point = {
        x: x + Math.random() * mesh.density,
        y: y + Math.random() * mesh.density,
        originalX: x + Math.random() * mesh.density,
        originalY: y + Math.random() * mesh.density,
      };
      mesh.points.push(point);
    }
  }
}

function drawMesh() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'rgba(255, 255, 255, 
