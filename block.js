class Block{

    constructor(x,y,width,height){
        var body_options={
            isStatic : false
          }
          this.width = width
          this.height = height
          this.body = Bodies.rectangle(x,y,width,height,body_options)
          World.add(world,this.body);
    }
    display(){
       
        fill("green");
        stroke("black")
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}