let count;
let cycle;
let size;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160,192,255);
  count=(count+1)%cycle;
  size=count;
  ellipse(width/2,height/2,size);
}
function mousePressed(){
  count=(count+70)%cycle;
}