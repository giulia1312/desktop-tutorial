let xMAx = 400;
let yMAx = 600;
let xrocket = xMAx/2;
let yrocket = yMAx*0.6;

function setup() {
  createCanvas(xMAx, yMAx);
}

function draw() {
  background (20, 24, 40);

  push();
  //corpo del robot
  fill(220);
  stroke(40);
  strokeWeight(2);
  rectMode(CENTER);
  rect(400/2, 600*0.6+30, 80, 180, 20);

  //nose del rocket 
  fill(200, 40, 40); //red
  triangle(xrocket-40,yrocket-60,xrocket, yrocket-120,xrocket+40, yrocket-60);

  //window
  fill(40, 150, 220); //blue
  stroke(255); //bordo bianco
  strokeWeight(3);
  ellipse(xrocket, yrocket+20, 48, 48);

  //left e right wings 
  fill(180, 30, 30);
  stroke(40);
  strokeWeight(2);
  triangle(xrocket-40, yrocket+90, xrocket-80, yrocket+130, xrocket-20, yrocket+90);
  triangle(xrocket+40, yrocket+90, xrocket+80, yrocket+130, xrocket+20, yrocket+90);//right per simmetria da left x=-x, y=y

  pop();

}

