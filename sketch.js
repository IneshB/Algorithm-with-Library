var fixedRect, movingRect, rect1, rect2;

function setup() {
  createCanvas(800,600);
  
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(200,200,50,50);
  movingRect.shapeColor = "green";

  rect1 = createSprite(200, 400, 50,50);
  rect1.shapeColor = "blue";
  rect1.velocityX = 3;

  rect2  = createSprite(400,400,50,50);
  rect2.shapeColor = "blue";
  rect2.velocityX = -3;
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if (isTouching(movingRect, fixedRect))
  {
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
  }
  else
  {
      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "green";
  }
  bounceOff(movingRect, fixedRect);
  
  drawSprites();
}

