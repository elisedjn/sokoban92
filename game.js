class Game {
    constructor (){
        this.level = level1;
        this.sokoboy = sokoboy;
    }

    play (){
        document.addEventListener("keydown", event => {
            switch (event.key) {
                case "ArrowRight":
                    this.sokoboy.direction = "R";
                    break;
                case "ArrowLeft":
                    this.sokoboy.direction = "L";
                    break;
                case "ArrowUp":
                    this.sokoboy.direction = "U";
                    break;
                case "ArrowDown":
                    this.sokoboy.direction = "D";
                    break;
                default:
                    break;
            }

            this.sokoboy.move();
        } )
    }
}