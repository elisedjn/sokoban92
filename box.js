class Box {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = "img/yellowbox.png";
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x * 70, this.y * 70, 70, 70);
    }
}