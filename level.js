// This is the class for the level - it takes as parameter 
// - a grid (2 dimensional array)

// Grid for the 1st Level
let grid1 = [['BG','W','W','W','W','BG','BG','BG'],
            ['BG','W','V','V','W','W','W','BG'],
            ['BG','W','V','V','V','V','W','BG'],
            ['W','W','W','V','W','V','W','W'],
            ['W','YB','W','V','W','V','V','W'],
            ['W','YB','V','V','V','W','V','W'],
            ['W','YB','V','V','V','V','V','W'],
            ['W','W','W','W','W','W','W','W']];

class Level {
    constructor() {
        this.grid = grid1;

        // Images database 
        this.voidImg = new Image();
        this.voidImg.src = "img/bg.png";
        this.wallImg = new Image();
        this.wallImg.src = "img/wall.png";
        this.ballImg = new Image();
        this.ballImg.src = "img/ball.png";

        // this.sokoboy = sokoboy;
        // this.boxList = []
    }
    draw(ctx) {
        this.grid.forEach((line, yCoord) => {
            line.forEach((elem, xCoord) => {
                switch (elem) {
                    case 'BG':
                        break;
                    case 'W':
                        ctx.drawImage(this.wallImg, xCoord * 70, yCoord * 70, 70, 70);
                        break;
                    case 'V':
                        ctx.drawImage(this.voidImg, xCoord * 70, yCoord * 70, 70, 70);
                        break;
                    case 'YB':
                        ctx.drawImage(this.ballImg, xCoord * 70, yCoord * 70, 70, 70);
                        break;
                    default:
                        break;
                }
            })

        })
    }
}

