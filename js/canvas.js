const canvas = document.getElementById("intro-canvas"); // Access Canvas Element
const context = canvas.getContext("2d");
const canvasContainer = document.getElementById('intro');
const circles = []

globalThis.addEventListener('load', animateCanvas, false)
globalThis.addEventListener('resize', setCanvasSize, false)

function setCanvasSize() {
  canvas.width = globalThis.innerWidth;
  canvas.height = globalThis.innerHeight
  repositionCircles()
}

function repositionCircles() {
  for (const circle of circles) {
    circle.x = Math.round(Math.random() * canvas.width);
    circle.y = Math.round(Math.random() * canvas.height)
  }
}

function animateCanvas() {
  setCanvasSize();
  canvasContainer.replaceChild(canvas, canvas)
  context.clearRect(0, 0, canvas.width, canvas.height)
  setupCircles()
}

function setupCircles() {
  circles.length = 0;
  for (i = 0; i < 120; i++) {
    const circle = new Circle()
    circles.push(circle)
  }
  drawAndUpdate();
}

function drawAndUpdate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (const circle of circles) {
    circle.reDraw()
  }
  requestAnimationFrame(drawAndUpdate);
}

// Circle Constructor
class Circle {
  constructor() {
    this.x = Math.round(Math.random() * canvas.width); // Starting x coordinate
    this.y = Math.round(Math.random() * canvas.height); // Starting Y coordinate
    this.radius = 100
    this.speed = 0.2 + Math.random() // Speed of Circle
    this.size = 5 + Math.random() * 5
    this.signX = Math.random() > 0.5 ? 1 : -1
    this.signY = Math.random() > 0.5 ? 1 : -1
    this.counterX = this.signX * this.speed
    this.counterY = this.signY * this.speed
    this.opacity = 0.5 + Math.random() * 0.5
  }

  reDraw() {
    this.counterX += this.signX * this.speed;
    this.counterY += this.signY * this.speed;
    context.beginPath();
    context.arc(
      this.x + Math.cos(this.counterX / 100) * this.radius,
      this.y + Math.sin(this.counterY / 100) * this.radius,
      this.size,
      0,
      2 * Math.PI,
      true
    )
    context.closePath();
    (context.fillStyle = "rgba(255,255,255," + this.opacity + ")"),
    context.fill()
  }
}
