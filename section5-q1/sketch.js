// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46",100,50,94,185,84);
}

function balloon(t,x,y,cr,cg,cb){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  noStroke();
  fill(cr,cg,cb);
  rect(x,y, w + p * 2, h + p * 2);
  fill(143,2,250);
  text(t, p+x, p+y+h);
  fill(cr,cg,cb);
  triangle(x+50,h+p*2+y,x+55,h+20+y,x+70,h+p*2+y);
}