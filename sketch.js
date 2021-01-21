var fixedRect, movingRect;
var rect1,rect2,rect3;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(200,100,50,50)
  rect2 = createSprite(1100,400,50,50)
  rect2.shapeColor = "blue"
  rect3 = createSprite(100,400,50,50)
  rect3.shapeColor = "orange"
  rect2.velocityX = -2
  rect3.velocityX = 2
  


}




function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (isTouching(movingRect,rect1)) {
  movingRect.shapeColor = "green";
  rect1.shapeColor = "blue";

}
else{
   movingRect.shapeColor = "purple";
    rect1.shapeColor = "pink";
}
 bounceOff (rect2,rect3);

  drawSprites();

}

