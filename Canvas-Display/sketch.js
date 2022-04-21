let ca = [];
let cb = [];
let cc = [];
let y;
let l;

function setup() {
  let cnv=createCanvas(400, 400);
  cnv.parent("canvascontainer");
  y = random(-PI, PI);
  l=random(-PI/4,PI/4);
}

function draw() {
  background(220);
  body();
  leftarm();
  rightarm();
  leftleg();
  rightleg();
}
function body(x, y) {
  push();

  translate(width / 2, height / 2);
  fill(255);
  ellipse(0, 0, 200, 225);
  circle(-55, -80, 45);
  fill(0);
  circle(-55, -80, 35);
  fill(0);
  circle(55, -80, 45);
  fill(255);
  circle(55, -80, 45);
  fill(0);
  circle(55, -80, 35);
  fill(255);

  for (let i = 0; i < 3; i++) {
    ca[i] = random(0, 255);
    cb[i] = random(0, 255);
    cc[i] = random(0, 255);
    stroke(ca[0], cb[0], cc[0]);
    strokeWeight(1);
    ellipse(0, -50, 160, 100);
    stroke(ca[1], cb[1], cc[1]);
    ellipse(0, -50, 155, 95);
  }

  noStroke();
  pop();
  push();
  translate(150, 150);
  rotate((PI * 6) / 8);
  fill(0);
  ellipse(0, 0, 55, 40);
  fill(255);
  circle(-5, 5, 25);
  fill(0);
  circle(-6, 6, 15);
  fill(255);
  circle(-6, 7, 5);

  pop();
  push();
  translate(250, 150);
  rotate(PI / 4);
  fill(0);
  ellipse(0, 0, 55, 40);
  fill(255);
  circle(-5, -5, 25);
  fill(0);
  circle(-6, -6, 15);
  fill(255);
  circle(-6, -7, 5);
  pop();
  push();
  translate(200, 200);
  fill(0);
  triangle(0, -20, -15, -35, 15, -35);
  stroke(0);
  strokeWeight(5);
  beginShape();
  curveVertex(-20, -15);
  curveVertex(-10, -10);
  curveVertex(0, -5);
  curveVertex(10, -10);
  curveVertex(20, -15);
  endShape();
  pop();
}
function leftarm() {
  push();
  translate(100, 200);
  fill(0);
  rotate(y);
  ellipse(-20, 0, 90, 40, 20);
  pop();
}
function rightarm() {
  push();
  translate(300, 200);
  fill(0);
  rotate(y);
  ellipse(20, 0, 90, 40, 20);
  pop();
}
function leftleg(){
  push();
  translate(120,250);
  fill(0);
  rotate(l);
  rect(0,15,50,80,20);
  pop()
}
function rightleg(){
  push();
  translate(230,250);
  fill(0);
  rotate(-l);
  rect(0,15,50,80,20);
  pop()
}

