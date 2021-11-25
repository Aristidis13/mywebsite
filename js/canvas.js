let canvas = document.getElementById('intro-canvas'); // Access Canvas Element
let context = canvas.getContext('2d');

let Circle = {
    id: null,
    x: null,
    y: null,
    radius: null,
    color: null,
    setup: function(id,x,y) {
        this.id = id;
        this.x= x;
        this.y= y;
        this.radius= Math.floor(10*Math.random()/2);
    },
    setColor: function(color) {
        this.color=color;
    },
    draw: function() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2*Math.PI,true);
        context.fillStyle = this.color;
        context.fill();
    }

};
// Circles Creator
function drawCircles() {
    let circles = [];
    
    for(i=0; i<200; i++) {
        let newCircle = Object.create(Circle);
        let xPos =  Math.round(Math.random()*canvas.width);
        let yPos =  Math.round(Math.random()*canvas.height);
        newCircle.setup(i,xPos,yPos); // i becomes id
        newCircle.setColor('rgba(200,200,255,1)');
        newCircle.draw();
        circles.push(newCircle); 
    }
}

drawCircles();