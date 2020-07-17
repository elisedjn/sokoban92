// This is the class for the level - it takes as parameter 
// - a grid (2 dimensional array)

// Images database
let voidImg = new Image();
voidImg.src = "img/bg.png";
let wallImg = new Image();
wallImg.src = "img/wall.png";
let ballImg = new Image();
ballImg.src = "img/ball.png";

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
    }
    draw() {
        let canvas = document.querySelector('#game-canvas')
        let ctx = canvas.getContext('2d');
        this.grid.forEach((line, yCoord) => {
            line.forEach((elem, xCoord) => {
                switch (elem) {
                    case 'BG':
                        break;
                    case 'W':
                        ctx.drawImage(wallImg, xCoord * 70, yCoord * 70, 70, 70);
                        break;
                    case 'V':
                        ctx.drawImage(voidImg, xCoord * 70, yCoord * 70, 70, 70);
                        break;
                    case 'YB':
                        ctx.drawImage(ballImg, xCoord * 70, yCoord * 70, 70, 70);
                        break;
                    default:
                        break;
                }
            })

        })

    }
}

