const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box;
var slingshot;
var polygon1;
var engine;



function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
    world = engine.world;

   // box1=new Box(330,235);
    box2=new Box(360,235);
    box3=new Box(390,235);
    box4=new Box(420,235);
    box5=new Box(450,235);
    box6=new Box(330,235);

    box7=new Box(360,195);
    box8=new Box(390,195);
    box9=new Box(420,195);

    box10=new Box(390,155);

    box11=new Box(800,235);
    box12=new Box(800,275);
    box13=new Box(830,275);
    box14=new Box(770,275);
    box15=new Box(800,315);
    box16=new Box(830,315);

    box17=new Box(860,315);
    box18=new Box(770,315);
    box19=new Box(740,315);

    ground1=new Ground(800,340,200,10);
    ground2=new Ground(390,260,200,10);

    polygon1=new Poly(200,200,60);

    slingshot = new Slingshot(polygon1.body,{x:200, y:200});

   
    Engine.run(engine);
}


function draw() {
    Engine.update(engine);
    rectMode(CENTER);
    background(0);

  //  box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();

    ground1.display();
    ground2.display();

    polygon1.display();


    slingshot.display();

    drawSprites();
}


function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(polygon1.body)
    }

}