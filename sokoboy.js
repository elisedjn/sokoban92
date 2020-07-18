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
}
