
var monkey , monkey_running;
var bananaImage, obstacleImage;
var FoodGroup, obstacleGroup,background;
var score,ground;

function preload()
{

  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup()
{
  createCanvas(600,500)
  
  
  FoodGroup = createGroup()
  obstacleGroup = createGroup()
  
  
  
    monkey = createSprite(100,400,10,10)
   monkey.addAnimation( "running",monkey_running)
    monkey.scale = 0.2
  
  
   ground = createSprite(300,465,500,05)
    ground.shapeColor ="green"
   
  
}


function draw() 
{
  
  background("white")
 drawSprites()
   
  
 text("score")
  
//   if(keyDown(space))
//   {
//     monkey.velocityY=-4
//   }
  
  
if(monkey.isTouching(obstacleGroup))
 {
  monkey.lifetime = 0
   score = 0 
 }
  if(monkey.isTouching(FoodGroup))
{
score=score+1
 }
  
  
if(frameCount%100===0)
{
   var banana = createSprite(400,424,20,20)
   banana.addImage(bananaImage)
   banana.scale = 0.2
   banana.velocityX=-2
   banana.positionX=300
   FoodGroup.add(banana)
  
  var  obstacle = createSprite(490,424,20,20)
   obstacle.addImage(obstacleImage)
   obstacle.scale =0.2
   obstacle.velocityX=-2
  obstacle.positionX=600
  if(obstacleGroup.isTouching(monkey))
  {
    obstaclacheGroup.destroyEach()
  }
   obstacleGroup.add(obstacle)
  }
}






