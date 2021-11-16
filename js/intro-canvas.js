let canvas = document.getElementById('intro-canvas'); // Access Canvas Element
let context = canvas.getContext('2d');

//Draw a Line
context.moveTo(10,10);
context.lineTo(100,100);

// Specify the appearance of line
context.lineWidth= 10;
context.strokeStyle = "red";

// Creates the line
context.closePath();
context.stroke();
