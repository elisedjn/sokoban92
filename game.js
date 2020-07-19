class Game {
    constructor (){
        this.level = new Level();
        this.canvas = null;
        this.ctx = null;
        this.keyDown = false;
    }

    draw(){
        this.canvas = document.querySelector("#game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.level.draw(this.ctx);
        this.level.boxList.forEach(box => {
            box.draw(this.ctx)
        })
        this.level.sokoboy.draw(this.ctx);
    }

    play(){
        this.draw();
        document.addEventListener("keydown", event => {
            if(this.keyDown == false) {
            this.keyDown = true;
            console.log(event.key);
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
        this.level.sokoboy.move();
        this.draw();
        }} )
        document.addEventListener("keyup", event => {
            this.keyDown = false;
        })
    }
}