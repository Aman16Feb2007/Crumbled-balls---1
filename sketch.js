var P;
var G;
var D1, D2, D3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	backgroundImg = loadImage("GB.jpg");
}

function setup() {
	createCanvas(800, 700);





	engine = Engine.create();
	world = engine.world;

	P = new Paper(100,350,20);
	
	G = new Ground(400,690,800,20);

	D1 = new Dustbin(700,600,20,150);
	D2 = new Dustbin(625,665,120,20);
	D3 = new Dustbin(550,600,20,150);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);

	P.display();

	G.display();
	
	D1.display();
	D2.display();
	D3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(P.body, P.body.position, {x:45 ,y: -85});
	}


}

