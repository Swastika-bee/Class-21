var fixedRect,movingRect;
var obj1;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="blue";
  movingRect= createSprite(400, 200, 80, 30);
obj1= createSprite(400,300,50,90);
obj1.shapeColor="blue";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if (istouching(movingRect,obj1)){
    movingRect.shapeColor= "red";
    obj1.shapeColor= "red";
  }
  else{
    movingRect.shapeColor="green";
    obj1.shapeColor="green";
  }


  drawSprites();
}
function istouching(object1,object2){
  if(object2.x-object1.x<object1.width/2+object2.width/2 &&
    object1.x-object2.x < object1.width/2+object2.width/2 &&
    object2.y-object1.y<object1.height/2+object2.height/2 &&
    object1.y-object2.y < object1.height/2+object2.height/2)
  {
    return true  
  }
  else{
  return false
  
  }
}
