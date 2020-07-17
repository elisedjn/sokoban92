class Sokoboy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direction = "D";
  }

  draw() {
      //Not working... I don't know why
    let canvas = document.querySelector("#game-canvas");
    let ctx = canvas.getContext("2d");
    let sokoboyImg = new Image();
    sokoboyImg.src = "img/sb-face.png";
    ctx.drawImage(sokoboyImg, this.x * 70, this.y * 70, 70, 70);
  }
}
