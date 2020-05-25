var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudImg;
var obstacleImg1, obstacleImg2, obstacleImg3, obstacleImg4, obstacleImg5, obstacleImg6;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImg = loadImage("cloud.png");
  obstacleImg1 = loadImage("obstacle1.png");
  obstacleImg2 = loadImage("obstacle2.png");  
  obstacleImg3 = loadImage("obstacle3.png");  
  obstacleImg4 = loadImage("obstacle4.png");  
  obstacleImg5 = loadImage("obstacle5.png");  
  obstacleImg6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -10;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(200);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  spawnObstacles();
  spawnClouds();
  
  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -10;
    
 
    var rand = Math.round(random(1,6));
    switch(rand)
    {
      case 1: obstacle.addImage(obstacleImg1);
      break;
      case 2: obstacle.addImage(obstacleImg2);    
      break;
      case 3: obstacle.addImage(obstacleImg3); 
      break;   
      case 4: obstacle.addImage(obstacleImg4); 
      break;
      case 5: obstacle.addImage(obstacleImg5); 
      break;
      case 6: obstacle.addImage(obstacleImg6);  
      break;
      default: break;
    }
    
        
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
  }
}

function spawnClouds() {

  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = random(80,120);
    cloud.addImage(cloudImg);
    cloud.scale = 0.5;
    cloud.velocityX = -10;
    

    cloud.lifetime = 134;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
  
}