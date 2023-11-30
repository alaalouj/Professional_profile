const canvas = document.getElementById("techCanvas");
const ctx = canvas.getContext("2d");

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
  ctx.strokeStyle = "rgba(255, 165, 0, 0.5)";
  ctx.lineWidth = 1;

  mesh.points.forEach((point, index) => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 1, 0, 2 * Math.PI);
    ctx.stroke();
  });
}

function updateMesh() {
  mesh.points.forEach((point, index) => {
    point.x = point.originalX + Math.sin(Date.now() * 0.001 * mesh.speed) * 10;
    point.y = point.originalY + Math.cos(Date.now() * 0.001 * mesh.speed) * 10;
  });
}

function animate() {
  updateMesh();
  drawMesh();
  requestAnimationFrame(animate);
}

// Initialize and start the animation
initializeMesh();
animate();

// Handle window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initializeMesh();
});
