
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var box1,box2,box3,box4,box5
function preload() {
//preload the images here
background1=loadImage("GamingBackground.png")

}

function setup() {
  createCanvas(1000, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,1200,20);
  // create sprites here
 fill("orange")

 box1 = new box(620, 200, 350, 50);

 
  box2 = new box(600, 230, 50, 50);
 box3 = new box(600, 240, 50, 50);
 box4 = new box(600, 250, 30, 50);
  box5 = new box(660, 260, 30, 50);
  
  box6 = new box(600, 270, 30, 40);
box7 = new box(600, 280, 30, 40);
   box8 = new box(620, 200, 30, 40);
//   box9 = new box(645, 220, 30, 40);


//   box10 = new box(600, 170, 30, 40);
//  fill("orange")
//   box11 = new box(570, 180, 30, 40);
//   //box11=fill("red")
//   box12 = new box(630, 180, 30, 40);


//   box13 = new box(600, 140, 30, 40);
monster1= new villan(200,200,50,50)
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
  // box9.display()
//  monster1.display()
  // box10.display()
  // box11.display()
  // box12.display()

}

