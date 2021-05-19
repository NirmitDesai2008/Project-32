class Block{
    constructor(x,y,width,height) {
      var options = {
          restitution: 0.4
      }
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visibiliy = 255;
      World.add(world, this.body);
    }
  
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;

      if ((this.body.speed)<3){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        this.Visiblity = this.Visiblity-5;
        tint(255, this.Visiblity);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
      
      else {
        World.remove(world,this.body);        
      }
    }
}