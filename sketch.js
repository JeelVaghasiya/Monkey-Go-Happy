var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var survival = 0;

function preload(){
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  
  monkey = createSprite(80,415,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite(400,450,1100,10);
  ground.velocityX = -4;
  ground.shapeColor = "white";
  ground.x = ground.width/2;
  
  bananasGroup = new Group();
  obstaclesGroup = new Group();
}


function draw() {
  background(100);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,400,40);
  
  stroke("white");
  textSize(20);
  fill("white");
  survival=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survival,170,40);
  
  if(ground.x <0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")&&monkey.y > 414){
    monkey.velocityY = -15;
  }
  
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(ground);
  
  bananas();
  rock();
  
  drawSprites();
}

function bananas(){
  if(frameCount%80===0){
    yb=Math.round(random(180,260));
    banana=createSprite(600,yb,10,10);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-5;
    banana.lifetime=150;
    
    bananasGroup.add(banana);
  }
}

function rock(){
  if(frameCount%300===0){
    obstacle=createSprite(600,410,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-6;
    obstacle.scale=0.2;
    obstacle.lifetime=150;
    obstaclesGroup.add(obstacle);
  }
}
