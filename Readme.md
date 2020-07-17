# Sokoban 92

## Description
Sokoban 92 is a reproduction of Box World which is one of Sokoban games programed by Jeng-Long Jiang and released in 1992 for Windows 3.1.
In Sokoban 92, the player controls Soko-Boy and help him to push the boxes at the right places (the ones with a yellow ball on it). The player wins the game when each box is on a yellow ball.
There is no Game-Over but the player has to be carefull not to be stucked or not able anymore to push the boxes or he will have to try again. 
The number of moves of Soko-boy are calculated, the idea is to complete the level in as few moves as possible.


## MVP (DOM - CANVAS)
- one level with 3 boxes to move to 3 yellow balls
- Soko-boy can move in the labyrinth. on the void space and the yellow balls
- Soko-boy can only push one box at a time
- the boxes color changes when they are on a yellow ball
- if each box is on a yellow ball, the game end


## Backlog
- make the Soko-boy "dancing" when he moves, as in the original game
- add other levels
- store the scores of previous gamers to make a ranking for each level

## Data structure
Classes and methods definition.
# main.js
- buildSplashScreen (){}
- buildGameScreen (){}
- buildWinScreen (){}

# game.js
- Game () {}
- drawCanvas () {}
- Win () {}

# level.js
- Level () {this.gird; this.sokoboyInit; this.boxesInit}
- drawTheGrid () {}
- nextObstacle (x, y, direction) {}
- isYellowBall (x, y) {}

# sokoboy.js
- Sokoboy () {this.x, this.y, this.direction}
- draw () {}
- canMove () {}
- move () {}

# box.js
- Box () {this.x, this.y}
- draw () {}
- changeColor () {}
- canBePushed (direction) {}
- pushed (direction) {}



## States & States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- winScreen


## Task
- main - buildDom
- main - buildSplashScreen
- main - addEventListener
- main - buildGameScreen
- main - buildWinScreen
- game - buildCanvas
- game - drawCanvas
- level - drawTheGrid
- sokoboy - draw
- boxes - draw
- sokoboy - move
- level - nextObstacle
- sokoboy - canMove
- box - pushed
- box - canBePushed
- level - isYellowBall
- box - changeColor
- game - Win
- game - addEventListener


## Links


### Trello
[Link url](https://trello.com/invite/b/rZy293HB/16fb20996f512054d344682b6ab4fb9c/sokoban-92)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
