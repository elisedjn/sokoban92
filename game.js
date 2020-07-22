class Game {
  constructor(grid, sokoboy, boxList) {
    this.level = new Level(grid, sokoboy, boxList);
    this.canvas = null;
    this.ctx = null;
    this.keyDown = false;
    this.movement = 0;
    this.intervalID = 0;
    
    // Sounds
    this.music = new Audio("sound/bgmusic.wav");
    this.music.volume = 0.2;
    this.music.loop = true;
    this.soundselect = new Audio("sound/select.wav");
    this.soundWin = new Audio("sound/winmusic.wav");
  }

  draw() {
    this.canvas = document.querySelector("#game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.level.draw(this.ctx);
    this.level.boxList.forEach((box) => {
      box.draw(this.ctx);
    });
    this.level.sokoboy.draw(this.ctx);
    this.ctx.font = '20px courier';
    this.ctx.fillText(`Your moves : ${this.movement}`, 85, 515);
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
    this.level.boxList.forEach((box) => {
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
        //counting the movement
        this.movement += 1;
      } else {
        this.draw();
      }
    } else {
      // If the next obstacle is not a box
      if (this.level.sokoboy.canMove(sokoboyNextObstacle)) {
        this.level.sokoboy.move();
        this.draw();
        //counting the movement
        this.movement += 1;
      } else {
        this.draw();
      }
    }
  }

  win() {
    // Checking if every box is on a yellow ball
    let win = true;
    this.level.boxList.forEach((box) => {
      if (!box.onYellowBall) {
        win = false;
      }
    });
    if (win) {
        this.music.pause()
        this.music.currentTime = 0;
      // If the player wins the game, the interval is cleared.
      clearInterval(game.intervalID);
      // The buildscreen appears
      if (i < levelList.length){
        buildWinScreen();
        this.soundWin.volume = 0.1;
        this.soundWin.play();
        // Waiting for the player to click on play again
        playAgain();
        // Or to go to the next level
        nextLevel();
      } else {
        buildSuperWinScreen();
        this.soundWin.volume = 0.1;
        this.soundWin.play();
        // Waiting for the player to click on play again
        playAgain();
        // or to go back to the first level
        nextLevel();
      }
      
    }
  }

  retry(callback){
    this.retryMethod = callback();
  }

  goToLevelScreen(callback){
    this.goToLevelScreenMethod = callback();
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
            this.level.sokoboy.animate("img/sb-right.png","img/sb-right-dab.png");
            break;
          case "ArrowLeft":
            this.level.sokoboy.direction = "L";
            this.level.sokoboy.animate("img/sb-left.png","img/sb-left-dab.png");
            break;
          case "ArrowUp":
            this.level.sokoboy.direction = "U";
            this.level.sokoboy.animate("img/sb-back-right.png","img/sb-back-left.png");
            break;
          case "ArrowDown":
            this.level.sokoboy.direction = "D";
            this.level.sokoboy.animate("img/sb-face-right.png","img/sb-face-left.png");
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

    //Checking if all the boxes are on a yellow ball
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
