class Ball {
  constructor(x,y,width,height,angle) {

      var options ={
          density:1,
          frictionAir:0.005           
      }
      this.width=width;
      this.height=height
    
      this.body = Bodies.rectangle(x, y, this.width,this.height,options);       
      World.add(world, this.body);

  }
  display() {

      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //ellipseMode(RADIUS);
      fill("pink")
      ellipse(0, 0, this.width,this.height);
      pop();
  }

};