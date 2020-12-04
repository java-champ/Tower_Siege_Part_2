class Slingshot{
    constructor(body1, pointB){
        var options = {
            bodyA : body1,
            pointB : pointB,
            stiffness : 0.04,
            length : 1
            
        }
        this.sling=Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
        strokeWeight(3);
        stroke("white");
        line(this.sling.bodyA.position.x,this.sling.bodyA.poition.y,this.sling.pointB.x,this.sling.pointB.y);
    }
}
}