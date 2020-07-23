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
- levels elements
- buildSplashScreen (){}
- buildLevelsScreen (){}
- buildGameScreen (){}
- buildWinScreen (){}
- buildSuperWinScreen (){}
- gameSetup (){}
- retry (){}
- nextLevel (){}
- playAgain (){}
- levelSelection (){}
- goToLevelScreen (){}
- undo (){}
- hiddenLevel (){}

# game.js
- Game () {}
- draw () {}
- whichBox (){}
- savePreviousPosition (){}
- undoLastAction (){}
- collisionCheck (){}
- updateScore (){}
- play (){}
- Win () {}
- startGame (){}

# level.js
- Level () {this.gird; this.sokoboyInit; this.boxesInit}
- draw (){}
- nextObstacle (x, y, direction) {}

# sokoboy.js
- Sokoboy () {this.x, this.y, this.direction}
- draw (){}
- animate (){}
- canMove (){}
- move (){}

# box.js
- Box () {this.x, this.y}
- draw (){}
- changeColor (){}
- canBePushed(obstacle) {}
- pushed(direction) {}



## States & States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- winScreen
- superWinScreen
- levelsScreen


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
[Link url](https://trello.com/b/rZy293HB/sokoban-92)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/elisedjn/sokoban92)
[Link Deploy](https://elisedjn.github.io/sokoban92/)


### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/1q8S_AX5agm_TA5f_j75sPEyEBDm3WycCCdhoLj-2yNc/edit?usp=sharing)
