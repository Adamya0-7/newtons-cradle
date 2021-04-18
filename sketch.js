
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	roof1 = new Roof(200,200,400,20);
	ball1 = new Ball(200,350,20)
	ball2 = new Ball(180,350,20)
    ball3 = new Ball(220,350,20)
	rope1 = new Rope(roof1.body, ball1.body,0,0);
	rope2 = new Rope(roof1.body, ball2.body, 40,0);
	rope3 = new Rope(roof1.body, ball3.body, 80,0);
  
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();

  roof1.display();
  ball1.display();
  ball2.display();
  ball3.display();

  rope1.display();
  rope2.display();
  rope3.display();
 
}

function keyPressed() {
	if(keyCode == UP_ARROW){
		Matter.body.applyForce(ball3.body, ball3.body.position,{
			x:50, y:-50
		})
	}
}



