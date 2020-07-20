class Box {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = "img/yellowbox.png";
        this.redImage = new Image();
        this.redImage.src = "img/redbox.png"
        this.onYellowBall = false;
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

    changeColor(obstacle){
        if(obstacle === "YB"){
            this.image = this.redImage;
            this.onYellowBall = true;
        } else {
            this.image.src = "img/yellowbox.png";
        }
        
    }
}