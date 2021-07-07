const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world, engine

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ball = new Ball(200,100,50,50)
  block1 = new Block(750,350,50,50)
  block2 = new Block(750,300,50,50)
  block3 = new Block(750,250,50,50)
  block4 = new Block(750,200,50,50)

  block5 = new Block(700,350,50,50)
  block6 = new Block(700,300,50,50)
  block7 = new Block(700,250,50,50)
  block8 = new Block(700,200,50,50)

  block9 = new Block(650,350,50,50)
  block10 = new Block(650,300,50,50)
  block11 = new Block(650,250,50,50)
  block12 = new Block(650,200,50,50)

  ground = new Ground(450,390,900,20)
  //groundWall = new Ground(800,200,50,900)
  
}

function draw() {
  background(255,255,255);  

  textSize(15)
  text("Press Right Arrow to shoot the ball, press 'R' to shoot again", 200,150)
  
  
ball.display()
ground.display()
//groundWall.display()

block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()


  drawSprites();
}


  function keyPressed() { 
    if (keyCode === RIGHT_ARROW) {
      Matter.Body.applyForce(ball.body,ball.body.position,{x:0.4,y:-0.1}); 
    }

    if(keyCode === 82) {
      ball.body.x = 200
      ball.body.y = 100
      ball = new Ball(200,100,50,50)
      ball.display()
    }
  }

  