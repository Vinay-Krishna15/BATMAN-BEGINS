const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var man,manI;
var drop;
function preload() {
//manI =  loadAnimation("images/walking_1.png","images/walking_2.png","images/walking_3.png","images/walking_4.png","images/walking_5.png","images/walking_6.png","images/walking_7.png","images/walking_8.png");   
}

function setup(){
    var canvas = createCanvas(400,650);
    engine = Engine.create();
    world = engine.world;
   
    drop = new Drops(100,100,10);
    
}

function draw(){
   background("black")
    Engine.update(engine);
   drop.display()
}


