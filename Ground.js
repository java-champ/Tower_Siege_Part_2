class Ground{
    constructor(){
        var options = {
            isStatic : true
        }
        this.body=Bodies.rectangle(450,390,900,20,options);
        this.width=900;
        this.height=20;
        World.add(world, this.body);
    }
    display(){
        fill("brown");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
    }
}