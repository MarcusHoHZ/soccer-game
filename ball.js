class Ball{

    constructor(x,y,width,height){
        var body_options={
            isStatic : false
          }
          this.width = width;
          this.height = height 
          this.image = loadImage("soccer ball.png")
          this.body = Bodies.rectangle(x,y,width,height,body_options)
          World.add(world,this.body);
    }
    display(){
        noStroke();
        fill("yellow");
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);

        
    }
}