
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  stickminRunning = loadImage('GUxtcYK.gif');

}
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  stickfigure = createSprite(200,200,0,0)
  stickfigure.addImage('stickmin',stickminRunning)
}


function draw() 
{
  background('white');
  Engine.update(engine);
  drawSprites()
  
}

