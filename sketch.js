const Engine = Matter.Engine;
const World=Matter.World; 
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var ground,hero,fly;
var block1 , block2 , block3 , block4 , block5 ;
var monster;
function preload() {
//preload the images here
backgroundImg=loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine=Engine.create();
  world =engine.world
  ground = new Ground(0,400,width-20,10);
  hero = new SuperHero(7,200,150);
  fly = new Fly(hero.body,{x:250, y:70});

  block1 = new Block (120,360,20,20);
  block2 = new Block (100,350,20,20);
  block3 = new Block (90,350,20,20);
  block4 = new Block (90,360,20,20);
  block5 = new Block (90,350,20,20);
  
  monster = new Monster(330,370,50);
}

function draw() {
  background(backgroundImg);
  //drawSprites();
  Engine.update(engine);
  ground.display();
  hero.display();
  fly.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  monster.display();
}
function mouseDragged(){
  
        Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  
}

