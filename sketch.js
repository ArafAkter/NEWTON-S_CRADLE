const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var time  = 0

function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
 roof = createSprite(width/2, 100, 300, 50);
 
ball1  = createSprite(610, 250, 50, 50);
ball2 = createSprite(390, 250, 50, 50);
ball3 = createSprite(450, 250, 50, 50);
ball4 = createSprite(500, 250, 50, 50);
ball5 = createSprite(550, 250, 50, 50);
ground = createSprite(width/2,300,600,50)
// rope1 = createSprite(600,100,10,300)


// ball2 = new Bird(100,100);



}

function draw() {
  background(0);  
ball1.visible = false
ball2.visible = false
ball3.visible = false
ball4.visible = false
ball5.visible = false
ground.visible = false

ball2.collide(ball3)
ball1.collide(ball5)
ball2.collide(ground)
ball1.collide(ground)

ellipse(ball1.x,ball1.y,50,50)
ellipse(ball2.x,ball2.y,50,50)
ellipse(ball3.x,ball3.y,50,50)
ellipse(ball4.x,ball4.y,50,50)
ellipse(ball5.x,ball5.y,50,50)

if(keyDown("up") && ball2.y >= 250){
  time = 1
  ball2.velocityX = -10
  ball2.velocityY = -10
  
}

if(time === 1){
  
  ball2.velocityX = ball2.velocityX + 0.75
  ball2.velocityY = ball2.velocityY + 0.75
  
  if(ball2.isTouching(ground)){
    ball2.velocityX = 0
    ball2.velocityX = 0
    
    
    
  }
  
  
}
if(ball2.x === 400 && ball1.y > 245){
  ball1.velocityX = 10
  ball1.velocityY = -10
  time = 2
}


if(time === 2){
  ball1.velocityX = ball1.velocityX - 0.75
  ball1.velocityY = ball1.velocityY + 0.75 
}



if(ball1.x < 610){
  //ball2.x = 390
  //ball2.velocityX = -10
  //ball2.velocityY = -10
  //time = 1
  //ball1.velocityX = 0
  //ball1.velocityY = 0
  reset()
 // time = 1
  //ball2.velocityX = -10
  //ball2.velocityY = -10

}
  drawSprites();
 
}

function reset(){
  



  if(keyDown("up") && ball2.y >= 250){
    time = 1
    ball2.velocityX = -10
    ball2.velocityY = -10
    
  }
  
  if(time === 1){
    
    ball2.velocityX = ball2.velocityX + 0.75
    ball2.velocityY = ball2.velocityY + 0.75
    
    if(ball2.isTouching(ground)){
      ball2.velocityX = 0
      ball2.velocityX = 0
      
    }
      
  }
  if(ball2.x === 400 && ball1.y > 245){
    ball1.velocityX = 10
    ball1.velocityY = -10
    time = 2
  }
  
  if(time === 2){
    ball1.velocityX = ball1.velocityX - 0.75
    ball1.velocityY = ball1.velocityY + 0.75 
  }  
  if(ball1.x < 610){
   // ball2.x = 390
    ball2.velocityX = -10
    ball2.velocityY = -10
    time = 1
    ball1.velocityX = 0
    ball1.velocityY = 0
    time = 1
    ball2.velocityX = -10
    ball2.velocityY = -10

    
    ball2.velocityX = 0
    ball2.velocityY = 0
  
    ball1.velocityX = 0
    ball1.velocityY = 0



  }

}

