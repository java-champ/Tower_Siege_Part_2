class Block{
    constructor(x,y,width,height){
        var options = {
            restitution : 0.4
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display(){if(this.body.speed < 3){
        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();
        block6.display();
        block7.display();
        block8.display();
        block9.display();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
       }
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}