var boy,ball;
var gameState;
function preload(){
boyimage=loadImage("iamakarsh.png");
ballimage=loadImage("c.png");
boy1image=loadImage("b.png");
}
function setup() {
  createCanvas(1200,600);
gameState="play";
 boy= createSprite(600,450);
boy.addImage("boy",boyimage);
ballgroup=createGroup();
ball1group=createGroup();
ball2group=createGroup();
}

function draw() {
  background(0, 173, 188); 
createEdgeSprites();

  if(gameState==="play"){
boy.velocityY=10; 
if(keyDown==="left"){
  boy.x=boy.x-20
}
if(keyDown==="right"){
  boy.x=boy.x+20
}
if(keyDown==="up"){
  boy.y=boy.y+20
}
spawnball();
  }
if(gameState==="end"){
  
}
//boy.collide(bottomEdge);

  drawSprites();
}
function spawnball(){
if(World.frameCount%60===0){
  ball=createSprite(0,0);
var rand=Math.round(random(10,400));
var rand2=Math.round(random(420,800));
var rand3=Math.round(random(820,1180));
ball.x=rand;
ball1=createSprite(420,0);
ball1.x=rand2;
ball2=createSprite(820,0);
ball2.x=rand3;
ball.velocityY=4;
ball1.velocityY=6;
ball2.velocityY=2;
ball.addImage("ball",ballimage);
ball1.addImage("ball",ballimage);
ball2.addImage("ball",ballimage);
ballgroup.add(ball);
ball1group.add(ball1);
ball2group.add(ball2);
}
}