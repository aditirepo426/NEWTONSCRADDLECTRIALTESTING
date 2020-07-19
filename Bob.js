class Bob {
    constructor(x,y,radius) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      push();
      translate(pos.x,pos.y);
      fill("red");
      ellipse(0,0, this.radius,this.radius);
      pop();
    }
  }