// 最終課題を制作しよう

const g=1;
const jump=20;
const ground=20;
const size=20;

let x,y,vy;

function setup(){
  createCanvas(400,400);
  mario(x-40,y-30,40,40);
  chariiinn(180,jump/g+50,20);
  x=width/2;
  y=height-ground-size/2;
  vy=0;
}

function draw(){
  background(83,148,252);
  let gy=height-ground;
  noStroke();
  fill(153,61,0);
  rect(0,gy,width,gy);
  fill(0);
  textSize(20);
  text("How to open the box?",90,60);
  noStroke();
  fill(255,255,0);
  rect(140,jump/g+70,120,40);
  fill(230,100,0);
  textSize(45)
  text("?",180,jump/g+105);
  mario(x-40,y-30,40,40);
  y+=vy;
  
  if(y<height-ground-size/2 && y>=jump/g+160){
    vy+=g;
  }
  else if(y<jump/g+160 && y>=jump/g+120  && x>160 && x<280){
    chariiinn(180,jump/g+50,20);
    vy+=g;
  }
  else{
    vy=0;
    y=height-ground-size/2;
  }
}

function keyPressed(){
  if(keyCode==LEFT_ARROW){x-=10;}
  else if(keyCode==RIGHT_ARROW){x+=10;}
  else if(key==" " && y>= height-ground-size/2){ 
    vy=-jump;     
  }
}

function mario(x1,y1,w,h){
  fill(255,0,0);
  rect(x1,y1,w,h);
}

function chariiinn(x2,y2,r){
  fill(255,251,0);
  ellipse(x2,y2,r); 
}

//function keyPressed(){
  if(key==" " && y>= height-ground-size/2){ 
    vy=-jump;     
  }
//     }

