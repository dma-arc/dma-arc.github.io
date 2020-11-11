// Beach Cleaning 

var ballx = 300;
var bally = 300;
var ballSize = 40;
var trash = 0;
var gameState = "L1";

function setup(){
 let image = createImage(600,578);
  img.beach.jpg();
  createCanvas(600,578);
  background(0);
  textAlign(CENTER);
  textSize(30);
} // End of Setup ======================================

function draw(){
  background(0,150,640);
  if(gameState == "L1"){  
  LevelOne();
  }
  if(gameState == "L2"){
  LevelTwo();
  }
  if(gameState == "L3"){
  LevelThree();
  }
  
  text(("trash:" + trash),width/2,40);
} // End of Draw =======================================

function LevelOne(){
  text("Level 1", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    trash = trash + 1;
  }
    
    if(trash>=5){
    gameState = "L2";
      
    }

  line(ballx,bally,mouseX, mouseY)
  
  circle(ballx, bally, ballSize, ballSize);
  
} // End of Level 1 ====================================


function LevelTwo(){
  text("Level 2", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    trash = trash + 1;
  }
  
  if(trash>=10){
    gameState = "L3";
      
    }
  
  //line(ballx,bally,mouseX, mouseY)
  
  circle(ballx, bally, ballSize, ballSize);
  
} // End of Level 2 ====================================


function LevelThree(){
  text("Level 3", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    trash = trash + 1;
    ballSize = ballSize - 4;
  }
  
  if(trash>=15){
  //background(random(255));
      
    }
  
  //line(ballx,bally,mouseX, mouseY)
  
  circle(ballx, bally, ballSize, ballSize);
  
} // End of Level 3 ====================================




