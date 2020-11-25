
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var box1;
var box2;
var box3;
var paper1;



function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	 
	
    box1 = new Box (620,650,200,20);
	box2 = new Box (700,650,20,450);
	box3 = new Box (500,650,20,450);
  ground = new Ground(600,height,1200,20)
  paper1 = new Paper(100,100,50,50);
	



	Engine.run(engine);



  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);


  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper1.display();
  
  drawSprites();

  

 
}


function keyPressed (){
  if (keyCode === UP_ARROW){

    Matter.Body.applyForce(PaperObject.body,PaperObject.body.position,{x:85,y:-85}); } }

 




