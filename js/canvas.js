let canvas = document.getElementById('intro-canvas'); // Access Canvas Element
let context = canvas.getContext('2d');
let canvasContainer= document.getElementById('intro');

// Specify width and Height of Canvas

globalThis.addEventListener('load', specifyHeightAndWidth, false);
globalThis.addEventListener('resize', specifyHeightAndWidth, false);

function specifyHeightAndWidth() {
    canvas.width = globalThis.innerWidth;
    canvas.height = globalThis.innerHeight;
    canvasContainer.replaceChild(canvas,canvas);
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    setupCircles();
}

// Circle Constructor
function Circle( x, y) {
    this.x= Math.round(Math.random() *canvas.width); // Starting x coordinate
    this.y= Math.round(Math.random()* canvas.height); // Starting Y coordinate
    this.radius= 100;
    this.speed= .2 + Math.random(); // Speed of Circle
    this.size= 5 + Math.random() * 5;
    this.signX = Math.random() > 0.5 ? 1 : -1;
    this.signY = Math.random() > 0.5 ? 1 : -1;
    this.counterX = this.signX*this.speed;
    this.counterY = this.signY*this.speed;
    this.opacity = 0.5 + Math.random()* 0.5;
};

Circle.prototype.reDraw = function() {
    this.counterX += this.signX*this.speed;
    this.counterY += this.signY*this.speed;
    context.beginPath();
    context.arc(this.x + Math.cos(this.counterX/100) * this.radius,
                this.y + Math.sin(this.counterY/100) * this.radius,
                this.size, 0, 2*Math.PI,true);
    context.closePath();
    context.fillStyle = 'rgba(255,255,255,'+ this.opacity +')';
    context.fill();
};

let circles = [];

// Circles Creator
function setupCircles() {
    circles.length = 0;
    let circle = [];
    for(i=0; i<100; i++) {
        circle = new Circle();
        circles.push(circle); 
    }
    drawAndUpdate();
}

function drawAndUpdate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let circle of circles) 
        circle.reDraw();
    requestAnimationFrame(drawAndUpdate);
}