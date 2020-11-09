function setup() {
createCanvas(600, 600);
}

function draw() {
fill("Brown")
background(400,180,75);

//Triangle Background
triangle(300,25,30,550,570,550);

//Head
noStroke();
fill(800,180,160)
ellipse(300,350,280,290)

//Eyes
noStroke();
fill("black")
ellipse(350,325,30,50)
fill("black")
ellipse(250,325,30,50)

//Beanie
fill("Black")
ellipse(300,240,360,65)
fill("black");
arc(299, 250, 120, 180, PI, TWO_PI)
fill("Black")
ellipse(286,176,37,50)
ellipse(300,176,50,170)

//Mouth
fill("white")
arc(305,385,100,98,0,PI)
stroke(1)
line(346, 413, 290, 413);
}