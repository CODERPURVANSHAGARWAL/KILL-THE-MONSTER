
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var box1,box2,box3,box4,box5,box6,box7,box8,box6
function preload() {
//preload the images here
background1=loadImage("GamingBackground.png")

}

function setup() {
  createCanvas(2000, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,2000,20);
  // create sprites here
 fill("red")

  box1 = new box(600, 200, 50, 50);

 
 box2 = new box(600, 200, 50, 50);
 box3 = new box(600, 200, 50, 50);
 box4 = new box(600, 250, 50, 50);
 box5 = new box(600, 260, 50, 50);
  
   box6 = new box(600, 270, 50, 50);
box7 = new box(600, 280, 50, 50);
    box8 = new box(690, 200, 50, 50);
   
  box9 = new box(690, 200, 50, 50);
 box10 = new box(690, 200, 50, 50);
  box11= new box(690, 250, 50, 50);
 box12 = new box(690, 260, 50, 50);
       box13= new box(690, 270, 50, 50);
  box14 = new box(790, 280, 50, 50);
 
box15= new box(790, 200, 50, 50);
box16 = new box(790, 200, 50, 50);
 box17 = new box(790, 250, 50, 50);
  box18 = new box(790, 260, 50, 50);
  
   box19 = new box(790, 270, 50, 50);
 box20 = new box(790, 280, 50, 50);
   box21 = new box(790, 200, 50, 50);

    box22 = new box(790, 250, 50, 50);
    box23= new box(890, 260, 50, 50);
   
   box24 = new box(890, 270, 50, 50);
  box25 = new box(890, 280, 50, 50);
     box26 = new box(890, 200, 50, 50);
     box27 = new box(890, 290, 50, 50);

    
   

monster1= new villan(1200,200,200,200)
hero1= new hero(300,200,400,300)
}

function draw() {
  background(background1);
  Engine.update(engine);
      
   box1.display()
  box2.display()
  box3.display()
   box4.display()
   box5.display()
   box6.display()
    box7.display()
    box8.display()
    box9.display() 
   box10.display()
   box11.display()
   box12.display()
    box13.display()
   box14.display()
   box15.display()
   box16.display()
   box17.display()
   box18.display()
   box19.display()
box20.display()
   box21.display()
   box22.display()
   box23.display()
    box24.display()
     box25.display()
    box27.display()


   
  box26.display()

 
 monster1.display()

  hero1.display()

}


function mouseDragged(){
  Matter.Body.setPosition(hero1.body,{x:mouseX,y:mouseY});
}