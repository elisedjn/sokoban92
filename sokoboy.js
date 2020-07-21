class Sokoboy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direction = "D";

    this.image = new Image();
    this.image.src = "img/sb-face.png";

    this.bool = true;
    this.intervalIDSoko = 0;
  }

  draw(ctx) {
      ctx.drawImage(this.image, this.x * 70, this.y * 70, 70, 70);
  }

  animate(src1, src2){
    clearInterval(this.intervalIDSoko);
        this.intervalIDSoko = setInterval(()=> {
    if (this.bool){
      this.bool = false;
      this.image.src = src1;
    } else {
      this.bool = true;
      this.image.src = src2;
    }}, 200)
  }

  canMove(obstacle) {
    if (obstacle === "V" || obstacle === "YB") {
      return true;
    } else if (obstacle === "B") {
      return true; //check if the box can move
    } else {
      return false;
    }
  }

  move() {
    switch (this.direction) {
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
      default:
        break;
    }
  }
}
