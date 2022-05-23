
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bola, quadrado, retangulo
var solo

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


  var opcoes = {
	isStatic : true
  }
  solo = Bodies.rectangle(400, 705, 800, 10, opcoes)
  World.add(world, solo)

  var opcoes_2 = {
	  restitution : 0.9,
	  frictionAir : 0.01,
	  friction : 0.05

	}
  bola = Bodies.circle(200, 0, 50, opcoes_2)
  World.add(world, bola)

  var opcoes_3 = {
	  restitution : 0.7
  }
  quadrado = Bodies.rectangle(400, 0, 40, 40, opcoes_3)
  World.add(world, quadrado)

  var opcoes_4 = {
	  restitution : 0 
  }
  retangulo = Bodies.rectangle(600, 0, 40, 80, opcoes_4)
  World.add(world, retangulo)





	

	//Crie os Corpos Aqui.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  ellipse(bola.position.x, bola.position.y, 100)
  rect(retangulo.position.x, retangulo.position.y, 40, 80) 
  rect(quadrado.position.x, quadrado.position.y, 40, 40)

  Engine.update(engine)


  
  drawSprites();
 
}



