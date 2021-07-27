function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
function preload(){
  bg=loadImage("images/iss.png");
sleep=loadAnimation("images/sleep.png");
brush=loadAnimation("images/brush.png");
gym=loadAnimation("images/gym21.png","images/gym22.png");
eat=loadAnimation("add images urls here");
drink=loadAnimation("add images urls here");
move=loadAnimation("add images urls here");
}
astronaut=createSprite(300,230);
astronaut.addAnimation("sleeping",sleep);
astronaut.Scale=0.1;

if (keyDown("UP_ARROW")) {
 astronaut.addAnimation("brushing",brush);
 astronaut.changeAnnimation("brushing");
 astronaut.y=350;
 astronaut.velocityX=0;
 astronaut.velocityY=0; 
}
if (keyDown("DOWN_ARROW")) {
  astronaut.addAnimation("gyming",gym);
  astronaut.changeAnnimation("gyming");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0; 
 }
 if (keyDown("LEFT_ARROW")) {
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnnimation("bathing");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0; 
 }
 if (keyDown("RIGHT_ARROW")) {
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnnimation("eating");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0; 
 }
 if (keyDown(M)) {
  velocityX=1;
  velocityY=1; 
 }
