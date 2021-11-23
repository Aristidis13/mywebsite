let canvas = document.getElementById('intro-canvas'); // Access Canvas Element
let context = canvas.getContext('2d');

//Draw a Line
context.beginPath();
context.moveTo(10,10); // Προσδιορίζει την αρχή της γραμμής
context.lineTo(100,100); // Προσδιορίζει το που τελειώνει η γραμμή (και την αρχή της επόμενης)

// Specify the appearance of line
context.lineWidth= 10; // Πάχος γραμμής
context.strokeStyle = "red"; // Χρώμα γραμμής

// Creates the line
context.closePath(); // Τελείωνει την γραμμή πηγαίνοντας πίσω στην αρχή
context.stroke(); // Εμφανίζει την γραμμή

// Quadratic Bezier Curver
context.beginPath();
context.moveTo(50,130); // Προσδιορίζει την αρχή της γραμμής
context.quadraticCurveTo(20, 40, 300, 90);
context.closePath();
context.lineWidth = 5;
context.strokeStyle = "#ececec"

context.stroke(); // Εμφανίζει την γραμμή

// Ορθογώνιο
context.beginPath();
context.rect(30,30,200,100);

context.lineWidth = 2;
context.strokeStyle = 'orangered';
context.stroke();

context.fillStyle = 'rgba(20,130,20,.5)';
context.fill();