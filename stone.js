class Stone{
    constructor(x,y,w){
        this.body = Bodies.circle(x,y,w)
        World.add(world,this.body);
        this.w = w;
    }

    display(){
        fill("red")
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.w*2)
    }
}