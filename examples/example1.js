let offset = -8;
update = setInterval(onFrame,100);
let dots = [
  {color:"red",x:1,y:0},
  {color:"orange",x:2,y:1},
  {color:"yellow",x:3,y:2},
  {color:"green",x:4,y:3},
  {color:"blue",x:5,y:4},
  {color:"violet",x:6,y:5}]
createOriginalCanvas();
class Dot{
  constructor(x,y,color){
    setDot(x,y,color);setDot(x-1,y,color);
  }
}
function redraw(){
  for(let i = 0; i < dots.length;i++){
    if(offset <= -9){
      offset = 7;
    }
    new Dot(dots[i].x-offset,dots[i].y,dots[i].color);
  }
}redraw();
function onFrame(){
  offset --;
  clearOriginalCanvas();
  redraw();
}
