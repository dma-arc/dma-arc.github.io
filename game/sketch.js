

// Beach Cleaning 

var ballx = 300;
var bally = 300;
var ballSize = 40;
var trash = 0;

function setup(){
  createCanvas(600,600);
  textAlign(CENTER);
  textSize(30);
} // End of Setup ======================================

function draw(){
  background(0,150,640);
  
  LevelOne();
  
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
    //background(random(255));
      
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
    //background(random(255));
      
    }
  
  line(ballx,bally,mouseX, mouseY)
  
  circle(ballx, bally, ballSize, ballSize);
  
} // End of Level 2 ====================================




