class Sokoboy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direction = "D";

    this.image = new Image();
    this.image.src = "img/sb-face.png";
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x * 70, this.y * 70, 70, 70);
  }

  canMove(obstacle) {
    if (obstacle === "V" || obstacle === "YB"){
      return true;
    } else if (obstacle === "B"){
      return true;//check if the box can move
    } else {
      return false;
    }
    }

  move() {
    switch (this.direction) {
      case "D":
        this.y += 1;
        this.image.src = "img/sb-face.png";
        break;
      case "U":
        this.y -= 1;
        this.image.src = "img/sb-back.png";
        break;
      case "R":
        this.x += 1;
        this.image.src = "img/sb-right.png";
        break;
      case "L":
        this.x -= 1;
        this.image.src = "img/sb-left.png";
        break;
    }
  }
}
