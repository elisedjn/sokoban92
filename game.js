class Game {
  constructor() {
    this.level = new Level();
    this.canvas = null;
    this.ctx = null;
    this.keyDown = false;
    this.movement = 0;
    this.intervalID = 0;
  }

  draw() {
    this.canvas = document.querySelector("#game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.level.draw(this.ctx);
    this.level.boxList.forEach((box) => {
      box.draw(this.ctx);
    });
    this.level.sokoboy.draw(this.ctx);
  }

  whichBox(x, y, direction) {
    let matchingBox;
    let nextX = x;
    let nextY = y;
    switch (direction) {
      case "D":
        nextY += 1;
        break;
      case "U":
        nextY -= 1;
        break;
      case "R":
        nextX += 1;
        break;
      case "L":
        nextX -= 1;
        break;
    }
    this.level.boxList.forEach((box, index) => {
      if (box.x === nextX && box.y === nextY) {
        matchingBox = box;
      }
    });

    return matchingBox;
  }

  collisionCheck() {
    //Checking if the sokoboy can move to the next place in that direction
    let sokoboyNextObstacle = this.level.nextObstacle(
      this.level.sokoboy.x,
      this.level.sokoboy.y,
      this.level.sokoboy.direction
    );

    // if the next obstacle is a box, checking if it can be pushed
    if (sokoboyNextObstacle === "B") {
      // Finding which box it is
      let targetedBox = this.whichBox(
        this.level.sokoboy.x,
        this.level.sokoboy.y,
        this.level.sokoboy.direction
      );
      // Checking if it can be pushed
      let boxNextObstacle = this.level.nextObstacle(
        targetedBox.x,
        targetedBox.y,
        this.level.sokoboy.direction
      );
      // If so, move the sokoboy and push the box
      if (targetedBox.canBePushed(boxNextObstacle)) {
        // Changing the box color if needed
        targetedBox.changeColor(boxNextObstacle);
        targetedBox.pushed(this.level.sokoboy.direction);
        this.level.sokoboy.move();
        this.draw();
      }
    } else {
      // If the next obstacle is not a box
      if (this.level.sokoboy.canMove(sokoboyNextObstacle)) {
        this.level.sokoboy.move();
        this.draw();
        //counting the movement
        this.movement += 1;
      }
    }
  }

  win() {
    let win = true;
    this.level.boxList.forEach((box) => {
      if (!box.onYellowBall) {
        win = false;
      }
    });
    if (win) {
      console.log("clean interval", this.intervalID);
      clearInterval(this.intervalID);
      alert("You Win!");
    }
  }

  play() {
    // Drawing the grid, the sokoboy and the boxes
    this.draw();

    // Listening to the keyboard event and changing the sokoboy direction deopending on the pressed arrow key
    document.addEventListener("keydown", (event) => {
      if (this.keyDown == false) {
        this.keyDown = true;
        switch (event.key) {
          case "ArrowRight":
            this.level.sokoboy.direction = "R";
            break;
          case "ArrowLeft":
            this.level.sokoboy.direction = "L";
            break;
          case "ArrowUp":
            this.level.sokoboy.direction = "U";
            break;
          case "ArrowDown":
            this.level.sokoboy.direction = "D";
            break;
          default:
            break;
        }
        //Checking the collisions between sokoboy and the box and walls
        // and the collisions between the box and the other boxes and the walls
        // and moving sokoboy and boxes if possible
        this.collisionCheck();
      }
    });
    // Checking when the key is not pressed anymore
    document.addEventListener("keyup", (event) => {
      this.keyDown = false;
    });

    //Checking if all the boxes are on yellowball
    this.win();
  }

  startGame() {
    this.intervalID = setInterval(() => {
      requestAnimationFrame(() => {
        this.play();
      });
    }, 100);
  }
}
