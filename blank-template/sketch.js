let frog;

function preload(){
  frog=loadImage("images.jpg");
  
}
function setup() {
  createCanvas(400, 400);
  let cnv =createCanvas(400,400);
  cnv.parent("canvascontainer");
}

function draw() {
  background(220);
  image(frog,0,0);
  
}