// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i+j)%2==1){
        fill(140);
      }
      else{
        noFill();
      }
      console.log(i,j);
      rect(size*i,size*j,size,size);
      if((i+j)%2==1&&j<3){
        fill(255,0,0);
      }
      else if((i+j)%2==1&&j>4){
        fill(0);
      }
      else{
        noFill();
      }
      ellipse(size*i+size/2,size*j+size/2,size);
    }
    }
  }