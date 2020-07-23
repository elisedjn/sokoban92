// This is the class for the level - it takes as parameter
// - the number of the level
// - a grid (2 dimensional array)
// - an array with the initial values of the sokoboy
// - a 2 dimensional array with all the initial values of boxes

class Level {
  constructor(number, grid, sokoboyInit, boxListInit) {
    this.number = number;
    this.grid = grid;
    this.boxList = [];
    boxListInit.forEach(box => {
      this.boxList.push(new Box(box[0], box[1]))
    })
    this.sokoboy = new Sokoboy(sokoboyInit[0], sokoboyInit[1]);

    // Images database
    this.voidImg = new Image();
    this.voidImg.src = "./img/bg.png";
    this.wallImg = new Image();
    this.wallImg.src = "./img/wall.png";
    this.ballImg = new Image();
    this.ballImg.src = "./img/ball.png";
    this.bgImg = new Image();
    this.bgImg.src = "./img/blackbg.png"
  }

  draw(ctx) {
    this.grid.forEach((line, yCoord) => {
      line.forEach((elem, xCoord) => {
        switch (elem) {
          case "BG":
            ctx.drawImage(this.bgImg, xCoord * 70, yCoord * 70, 70, 70);
            break;
          case "W":
            ctx.drawImage(this.wallImg, xCoord * 70, yCoord * 70, 70, 70);
            break;
          case "V":
            ctx.drawImage(this.voidImg, xCoord * 70, yCoord * 70, 70, 70);
            break;
          case "YB":
            ctx.drawImage(this.ballImg, xCoord * 70, yCoord * 70, 70, 70);
            break;
          default:
            break;
        }
      });
    });
  }

  nextObstacle(x, y, direction) {
    //Adding the acutal boxes position to the grid
    let gridWithBox = JSON.parse(JSON.stringify(this.grid));
    this.boxList.forEach((box) => {
      gridWithBox[box.y][box.x] = "B";
    });

    //Checking the grid
    switch (direction) {
      case "D":
        return gridWithBox[y + 1][x];
      case "U":
        return gridWithBox[y - 1][x];
      case "R":
        return gridWithBox[y][x + 1];
      case "L":
        return gridWithBox[y][x - 1];
      default:
        break;
    }
  }
}
