
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world,engine;

function setup(){
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,790,1200,10);

  stone = new Stone(400,700,50)
   box1 = new Box(700,750,100,100)
  box2 = new Box(800,750,100,100)
  box3 = new Box(900,750,100,100)

}

function draw(){
background("lightgreen");
ground.display()
box1.display()
box2.display()
box3.display()
stone.display()
Engine.update(engine)
}