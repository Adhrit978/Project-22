const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;


function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	roof_options={
		isStatic:true			
	}

	bob_options = {
		restitution: 0.95,
		friction: 0.05
	}

	roof = Bodies.rectangle(400,100,330,20,roof_options);
    World.add(world,roof);

    bob1 = Bodies.circle(280, 480, 30, bob_options);
	World.add(world, bob1);

	bob2 = Bodies.circle(340, 480, 30, bob_options);
	World.add(world, bob2);

	bob3 = Bodies.circle(400, 480, 30, bob_options);
	World.add(world, bob3);

	bob4 = Bodies.circle(460, 480, 30, bob_options);
	World.add(world, bob4);

	bob5 = Bodies.circle(520, 480, 30, bob_options);
	World.add(world, bob5);

	rope1=new rope(bob1, roof, -120, 0);
    World.add(world, rope1);

	rope2=new rope(bob2, roof, -60, 0);
    World.add(world, rope2);

	rope3=new rope(bob3, roof, 0, 0);
    World.add(world, rope3);

	rope4=new rope(bob4, roof, 60, 0);
    World.add(world, rope4);

	rope5=new rope(bob5, roof, 120, 0);
    World.add(world, rope5);
	
	Engine.run(engine);
	
    rectMode(CENTER);
	ellipseMode(RADIUS);
}

function draw() {
  Engine.update(engine);
  background("#99004d");

  rect(roof.position.x,roof.position.y,330,20);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  ellipse(bob1.position.x, bob1.position.y, 30);
  ellipse(bob2.position.x, bob2.position.y, 30);
  ellipse(bob3.position.x, bob3.position.y, 30);
  ellipse(bob4.position.x, bob4.position.y, 30);
  ellipse(bob5.position.x, bob5.position.y, 30);
}

function keyPressed() {
	if (keyCode==UP_ARROW) {
        Matter.Body.applyForce(bob5, {x:0, y:0}, {x:0.2, y:0});
	}
}