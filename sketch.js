const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,350,50,50);
    box2 = new Box(300,350,50,50);
    box3 = new Box(200,290,50,50)
    box4 = new Box(300,290,50,50)
    box5 = new Box(250,220,50,50)
    pig1 = new Pig(250,350,50,50)
    pig2 = new Pig(250,290,50,50)
    bird1 = new Bird(55,55,40,40)
    log1 = new Log(250,320,30,150,PI/2)
    log2 = new Log(250,270,30,150,PI/2)
    log3 = new Log(220,220,15,100,PI/7)
    log4 = new Log(275,220,15,100,PI/-7)
    ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display()
    box4.display()
    pig2.display()
    log2.display()
    box5.display()
    ground.display();
    log3.display()
    log4.display()
    bird1.display()
}