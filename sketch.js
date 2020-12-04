const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground, ball, stand1, stand2, holder, slingshot, polygon_image;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;

function preload(){
  polygon_image = loadImage("marble.png");
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  Engine.run(engine);

  ground = new Ground();
  stand1 = new Stand(390, 300, 250, 10);
  stand2 = new Stand(700, 200, 200, 10);
  block1 = new Block(330, 235, 30, 40);
  block2 = new Block(360, 235, 30, 40);
  block3 = new Block(390, 235, 30, 40);
  block4 = new Block(420, 235, 30, 40);
  block5 = new Block(450, 235, 30, 40);
  block6 = new Block(360, 195, 30, 40);
  block7 = new Block(390, 195, 30, 40);
  block8 = new Block(420, 195, 30, 40);
  block9 = new Block(360, 155, 30, 40);
  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);
  slingshot = new Slingshot(this.ball, {x : 100, y : 200});
  

}

function draw() {
  background(255,255,255); 
  imageMode(CENTER);
  image(polygon_image, ball.position.x, ball.position.y, 40, 40); 
  ground.display();
  slingshot.display();
  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x : mouseX, y : mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32 && slingshot.body.speed < 1){
      Matter.Body.setPosition(block.body,{x : 200, y : 50});
      slingshot.attach(block.body);
  }
}