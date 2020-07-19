class Box {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = "img/yellowbox.png";
        this.redImage = new Image();
        this.redImage.src = "img/redbox.png"
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x * 70, this.y * 70, 70, 70);
    }

    canBePushed (obstacle){
        if (obstacle === "V" || obstacle === "YB"){
            return true;
        } else {
            return false;
        }
    }

    pushed(direction){
        switch (direction) {
            case "D":
              this.y += 1;
              break;
            case "U":
              this.y -= 1;
              break;
            case "R":
              this.x += 1;
              break;
            case "L":
              this.x -= 1;
              break;
          }
    }

    changeColor(ctx){
        ctx.drawImage(this.redImage, this.x * 70, this.y * 70, 70, 70);
    }
}