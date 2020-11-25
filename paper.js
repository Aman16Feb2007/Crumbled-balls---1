class Paper{
    constructor(x,y,r) {    
    var options={
        restitution : 0.3,
        friction : 0.5,
        density : 1.2
    }
    this.body = Bodies.circle(x,y,r,options) 
    World.add(world,this.body);
    }

    display(){
        fill("white")
        var pos = this.body.position;
        var r = this.body.radius;
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, r);



    }





}