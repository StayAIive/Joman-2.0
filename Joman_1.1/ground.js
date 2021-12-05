class Ground{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = loadImage("./assets/ground.png");
        this.body = createSprite(x,y,w,h);
        //this.body.addImage(this.image);
        this.body.velocityX = -5; 
        this.body.scale = 0.5;
        platformGroup.add(this.body);
    }
}