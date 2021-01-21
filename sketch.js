const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(220,100,50,100)
    box2=new Box(200,300,50,50)
    ground=new Ground(200,400,400,100)
   

    
}

function draw(){
    background(0);
    Engine.update(engine);
    
   ground.display();
   box2.display();
   box1.display();
}