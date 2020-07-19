
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Base = new Wall(380,200,200,50);
	bob1 = new Bob (400,400,50);
	bob2 = new Bob (450,400,50);
	bob3 = new Bob (350,400,50);
	bob4 = new Bob (300,400,50);
	rope1 = new Rope(Base.body,bob2.body);
	rope2 = new Rope(Base.body,bob1.body);
	rope3 = new Rope(Base.body,bob3.body);
	rope4 = new Rope(Base.body,bob4.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Base.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  

 
}

function keyPressed(){
	if(keyCode === 24){

	Matter.Body.applyForce(bob2.body,bob2.body.position,{x: 85,y: -85})

	}
}



