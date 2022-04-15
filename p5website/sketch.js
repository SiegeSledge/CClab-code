function setup() {
 
  let cnv=createCanvas(400, 400);
  cnv.parent("canvasplace")
  
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = 5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'black';
  background(244, 248, 252);
  ellipse(width / 2, height / 2, 50, 50);

  fill(120,255,255);
  rect(20,50,60,180,20);
  fill(255,0,0);
  rect(300,50,60,180,20);
  //left controller
  fill(0,0,0);
  rect(60,50,255,180);
  circle(41,95,25);
  circle(41,125,10);
  circle(31,135,10);
  circle(51,135,10);
  circle(41,145,10);
  square(41,180,10);
  //right controller
  circle(337,90,10);
  circle(327,100,10);
  circle(347,100,10);
  circle(337,110,10);
  circle(337,140,25);
  circle(330,190,10);
  //screen
  fill(200);
  rect(66,55,245,170);
}