
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700) 
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    juno = new Juno(200, 600, 250, 250);
	tree = new Tree(800, 600, 250, 250);
	stone
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  juno.display();
  tree.display();

  drawSprites();
 
}



