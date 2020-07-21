let main = document.querySelector("main");

// Elements for the 1st Level
let grid1 = [
  ["BG", "W", "W", "W", "W", "BG", "BG", "BG"],
  ["BG", "W", "V", "V", "W", "W", "W", "BG"],
  ["BG", "W", "V", "V", "V", "V", "W", "BG"],
  ["W", "W", "W", "V", "W", "V", "W", "W"],
  ["W", "YB", "W", "V", "W", "V", "V", "W"],
  ["W", "YB", "V", "V", "V", "W", "V", "W"],
  ["W", "YB", "V", "V", "V", "V", "V", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
];
let sokoboy1 = [2, 1];
let boxList1 = [[3, 2], [2, 5], [5, 6]];

// Elements for the 2nd Level
let grid2 = [
  ["BG","BG", "W", "W", "W", "W", "BG", "BG"],
  ["BG","BG", "W", "YB", "YB", "W", "BG", "BG"],
  ["BG","W", "W", "V", "YB", "W", "W", "BG"],
  ["BG","W", "V", "V", "V", "YB", "W", "BG"],
  ["W","W", "V", "V", "V", "V", "W", "W"],
  ["W", "V", "V", "W", "V", "V", "V", "W"],
  ["W","V", "V", "V", "V", "V", "V", "W"],
  ["W","W", "W", "W", "W", "W", "W", "W"]
]
let sokoboy2 = [3, 6];
let boxList2 = [[4,3],[3,4],[4,5],[5,5]];

// Elements for the 3rd Level
let grid3 = [
  ["BG","W", "W", "W", "W", "W", "W", "W"],
  ["BG","W", "YB", "YB", "V", "YB", "YB", "W"],
  ["BG","W", "YB", "YB", "W", "YB", "YB", "W"],
  ["BG","W", "V", "V", "V", "V", "V", "W"],
  ["BG","W", "V", "V", "V", "V", "V", "W"],
  ["BG","W", "V", "V", "V", "V", "V", "W"],
  ["BG","W", "V", "V", "W", "V", "V", "W"],
  ["BG","W", "W", "W", "W", "W", "W", "W"]
]
let sokoboy3 = [6, 6];
let boxList3 = [[4,1],[3,3],[4,3],[5,3],[4,4],[3,5],[4,5],[5,5]];

// Elements for the 4th Level
let grid4 = [
  ["BG","BG", "BG", "BG", "BG", "BG", "BG", "BG"],
  ["BG", "W", "W", "W", "W", "W", "W", "W"],
  ["BG","W", "YB", "V", "YB", "V", "YB", "W"],
  ["BG","W", "V", "V", "V", "V", "V", "W"],
  ["BG","W", "YB", "V", "V", "V", "YB", "W"],
  ["BG","W", "V", "V", "V", "V", "V", "W"],
  ["BG","W", "YB", "V", "YB", "V", "YB", "W"],
  ["BG","W", "W", "W", "W", "W", "W", "W"]
]
let sokoboy4 = [4, 4];
let boxList4 = [[3,3],[4,3],[5,3],[3,4],[5,4],[3,5],[4,5],[5,5]];

let levelList = [[grid1, sokoboy1, boxList1],[grid2, sokoboy2, boxList2], [grid3, sokoboy3, boxList3],[grid4, sokoboy4, boxList4]];
let i = 1;

let currentGrid = levelList[0][0];
let currentSokoboy = levelList[0][1];
let currentBoxList = levelList[0][2];

let game = new Game(currentGrid, currentSokoboy, currentBoxList);

const buildSplashScreen = () => {
  let splashScreen = document.createElement("div");
  splashScreen.id = "splash-screen";
  splashScreen.innerHTML = `
    <h1>SOKOBAN 92</h1>
      <p>
        Help Soko-boy to store his boxes on the yellow balls with as few moves
        as possible. <br />Be careful not to be stuck or you will have to try
        again!<br /><br />
        Use your keyboard’s arrows to move.<br />
        You can only push one box at a time!
      </p>
      <img src="img/sokogif.gif" alt="Soko-boy dance" />
      <button id="start-button">START</button> `;
  main.appendChild(splashScreen);
};

const buildGameScreen = () => {
  // Removing the splash screen or the previous game screen
  main.removeChild(main.firstChild);
  //creating and adding the canvas to the body
  let gameScreen = document.createElement("div");
  gameScreen.id = "game-screen";
  gameScreen.innerHTML = `<canvas id='game-canvas' width = '560' height = '560'></canvas> 
  <button id = "retry-btn">RETRY</button>`;
  main.appendChild(gameScreen);
};

const buildWinScreen = () => {
  // Removing the game screen
  main.removeChild(main.firstChild);
  // creating and adding the win screen to the body
  let winScreen = document.createElement("div");
  winScreen.id = "win-screen";
  winScreen.innerHTML = `
    <h1><img src="img/sokogif.gif" alt="Soko-boy dance" />YEAH!</h1>
      <h2>YOU MADE IT!</h2>
      <button id="next-level-btn">Next Level</button>
      <p id="final-score"> Your moves : <span>${game.movement}</span></p>
      <p id="can-do-better"> Wanna try to do better? </p>
      <button id="play-again-btn">Play again</button>`;
  main.appendChild(winScreen);
};

const retry = () => {
  //Checking if the  player wants to retry
  let retryBtn = document.getElementById("retry-btn");
  retryBtn.addEventListener("click", (event) => {
    game.music.pause();
    clearInterval(game.intervalID);
    buildGameScreen();
    game = new Game(currentGrid, currentSokoboy, currentBoxList);
    game.retry(retry);
    game.startGame();
    game.music.play();
  });
};

const nextLevel = () => {
  let nextLevelBtn = document.querySelector("#next-level-btn");
  nextLevelBtn.addEventListener("click", () => {
    game.soundselect.play();
    game.soundWin.pause();
    game.soundWin.currentTime = 0;
    buildGameScreen();
    currentGrid = levelList[i][0];
    currentSokoboy = levelList[i][1];
    currentBoxList = levelList[i][2];
    game = new Game(currentGrid, currentSokoboy, currentBoxList);
    game.retry(retry);
    game.startGame();
    game.music.play();
    i ++;
  })
}

const playAgain = () => {
  let playAgainBtn = document.querySelector("#play-again-btn");
  playAgainBtn.addEventListener("click", () => {
      // Re starting the game
    game.soundselect.play();
    game.soundWin.pause();
    game.soundWin.currentTime = 0;
    buildGameScreen();
    game = new Game(currentGrid, currentSokoboy, currentBoxList);
    game.retry(retry);
    game.startGame();
    game.music.play();
    });
  };

// Waiting for the page to load before to show the splash screen
window.addEventListener("load", () => {
  buildSplashScreen();

  //Waiting for the player to press Start to build the game
  let startBtn = document.querySelector("#start-button");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      buildGameScreen();
      game.soundselect.play();
      game.retry(retry);
      game.startGame();
      game.music.play();
    });
  } 
});
