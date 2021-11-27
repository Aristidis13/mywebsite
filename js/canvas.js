let canvas = document.getElementById('intro-canvas'); // Access Canvas Element
let context = canvas.getContext('2d');
let header= document.getElementById('intro');

// Specify width and Height of Canvas

globalThis.addEventListener('load', specifyHeightAndWidth, false);
globalThis.addEventListener('resize', specifyHeightAndWidth, false);

function specifyHeightAndWidth() {
    canvas.width = globalThis.innerWidth;
    canvas.height = globalThis.innerHeight;
    header.replaceChild(canvas,canvas);
    setupCircles();
}


let circles = [];

// Circle Constructor
function Circle( x, y, radius, speed, width) {
    this.x= x; // Starting x
    this.y= y; // Starting Y
    this.radius= radius;
    this.speed=speed;
    this.width=width;
    this.counterX = 0;
    this.counterY = 0;
    this.signX = Math.random() > 0.5 ? 1 : 0;
    this.signY = Math.random() > 0.5 ? 1 : 0;
    this.opacity = 0.5 + Math.random()* 0.5;
    this.counter =0;
};

Circle.prototype.reDraw = function() {
    this.counterX += this.signX*this.speed;
    this.counterY += this.signY*this.speed;
    context.beginPath();
    context.arc(this.x + Math.cos(this.counterX/100) * this.radius,
                this.y + Math.sin(this.counterY/100) * this.radius,
                this.width, 0, 2*Math.PI,true);
    context.closePath();
    context.fillStyle = 'rgba(255,255,255,'+ this.opacity +')';
    context.fill();
};

// Circles Creator
function setupCircles() {
    circles=[];
    for(i=0; i<100; i++) {
        let randomX = Math.round(Math.random() *canvas.width); // Specify x coordinate
        let randomY = Math.round(Math.random()* canvas.height); // Specify y coordinate
        let speed = 0.2 + Math.random(); //Specify speed for circle
        let size= 5 + Math.random() * 5; // Specify size of circle
        let circle = new Circle(randomX, randomY, 100, speed, size);
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