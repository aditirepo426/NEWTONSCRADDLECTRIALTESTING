class Rope {
    constructor (bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.05,
            length: 200
        }
        this.bodyA = this.bodyA;
        this.bodyB = this.bodyB;
        this.body = Constraint.create(options);
        World.add(world ,this.body);
        }

    display(){
        var pointA = this.body.bodyA.position;
        var pointB = this.body.bodyB.position;
        push();
        strokeWeight(4);
        stroke(255);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}