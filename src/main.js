// --------------------------------------------
// ------------ LEVEL SETTINGS ----------------
// --------------------------------------------

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
let boxList1 = [
  [3, 2],
  [2, 5],
  [5, 6],
];

// Elements for the 2nd Level
let grid2 = [
  ["BG", "BG", "W", "W", "W", "W", "BG", "BG"],
  ["BG", "BG", "W", "YB", "YB", "W", "BG", "BG"],
  ["BG", "W", "W", "V", "YB", "W", "W", "BG"],
  ["BG", "W", "V", "V", "V", "YB", "W", "BG"],
  ["W", "W", "V", "V", "V", "V", "W", "W"],
  ["W", "V", "V", "W", "V", "V", "V", "W"],
  ["W", "V", "V", "V", "V", "V", "V", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
];
let sokoboy2 = [3, 6];
let boxList2 = [
  [4, 3],
  [3, 4],
  [4, 5],
  [5, 5],
];

// Elements for the 3rd Level
let grid3 = [
  ["BG", "W", "W", "W", "W", "W", "W", "W"],
  ["BG", "W", "YB", "YB", "V", "YB", "YB", "W"],
  ["BG", "W", "YB", "YB", "W", "YB", "YB", "W"],
  ["BG", "W", "V", "V", "V", "V", "V", "W"],
  ["BG", "W", "V", "V", "V", "V", "V", "W"],
  ["BG", "W", "V", "V", "V", "V", "V", "W"],
  ["BG", "W", "V", "V", "W", "V", "V", "W"],
  ["BG", "W", "W", "W", "W", "W", "W", "W"],
];
let sokoboy3 = [6, 6];
let boxList3 = [
  [4, 1],
  [3, 3],
  [4, 3],
  [5, 3],
  [4, 4],
  [3, 5],
  [4, 5],
  [5, 5],
];

// Elements for the 4th Level
let grid4 = [
  ["BG", "BG", "BG", "BG", "BG", "BG", "BG", "BG"],
  ["BG", "W", "W", "W", "W", "W", "W", "W"],
  ["BG", "W", "YB", "V", "YB", "V", "YB", "W"],
  ["BG", "W", "V", "V", "V", "V", "V", "W"],
  ["BG", "W", "YB", "V", "V", "V", "YB", "W"],
  ["BG", "W", "V", "V", "V", "V", "V", "W"],
  ["BG", "W", "YB", "V", "YB", "V", "YB", "W"],
  ["BG", "W", "W", "W", "W", "W", "W", "W"],
];
let sokoboy4 = [4, 4];
let boxList4 = [
  [3, 3],
  [4, 3],
  [5, 3],
  [3, 4],
  [5, 4],
  [3, 5],
  [4, 5],
  [5, 5],
];

let levelList = [
  [grid1, sokoboy1, boxList1],
  [grid2, sokoboy2, boxList2],
  [grid3, sokoboy3, boxList3],
  [grid4, sokoboy4, boxList4],
];
let i = 1;

let currentGrid = levelList[0][0];
let currentSokoboy = levelList[0][1];
let currentBoxList = levelList[0][2];

// --------------------------------------------
// ------------- SCREEN SETTINGS --------------
// --------------------------------------------
let main = document.querySelector("main");
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
      <img src="/img/sokogif.gif" alt="Soko-boy dance" />
      <button id="start-button">START</button> 
      <button class="level-selector">Levels</button>`;
  main.appendChild(splashScreen);
};

const buildLevelsScreen = () => {
  // Removing the splash screen or the previous game screen
  main.removeChild(main.firstChild);
  // creating the level screen and adding it to the main
  let levelsScreen = document.createElement("div");
  levelsScreen.id = "levels-screen";
  levelsScreen.innerHTML = `<h2>Choose your level</h2>
  <button class="level-btn odd">Level 1</button>
  <button class="level-btn even">Level 2</button>
  <button class="level-btn odd">Level 3</button>
  <button class="level-btn even">Level 4</button>
  <img src="/img/sokogif.gif" alt="Soko-boy dance" />`;
  main.appendChild(levelsScreen);
};

const buildGameScreen = () => {
  // Removing the splash screen or the previous game screen
  main.removeChild(main.firstChild);
  //creating and adding the canvas to the body
  let gameScreen = document.createElement("div");
  gameScreen.id = "game-screen";
  gameScreen.innerHTML = `<canvas id='game-canvas' width = '560' height = '560'></canvas> 
  <button id = "retry-btn">RETRY</button>
  <button class = "level-selector">LEVELS</button>
  <button id="undo-btn">UNDO</button>
  <button id="mute"><img src="/img/soundOn.png" alt="Sound on"/></button>`;
  main.appendChild(gameScreen);
};

const buildWinScreen = () => {
  // Removing the game screen
  main.removeChild(main.firstChild);
  // creating and adding the win screen to the body
  let winScreen = document.createElement("div");
  winScreen.id = "win-screen";
  winScreen.innerHTML = `
    <h1><img src="/img/sokogif.gif" alt="Soko-boy dance" />YEAH!</h1>
      <h2>YOU MADE IT!</h2>
      <button class="next-level-btn">Next Level</button>
      <p class="final-score"> Your moves : <span>${game.movement}</span></p>
      <p class="can-do-better"> Wanna try to do better? </p>
      <button id="play-again-btn">Play again</button>`;
  main.appendChild(winScreen);
};

const buildSuperWinScreen = () => {
  // Removing the game screen
  main.removeChild(main.firstChild);
  // creating and adding the win screen to the body
  let winScreen = document.createElement("div");
  winScreen.id = "super-win-screen";
  winScreen.innerHTML = `
    <h1><img src="/img/sokogif.gif" alt="Soko-boy dance" />YEAH!</h1>
    <h2>YOU ROCK!</h2>
    <button class="next-level-btn">Restart the all game</button>
    <p class="final-score"> Your moves : <span>${game.movement}</span></p>
    <p class="can-do-better"> Wanna try to do better? </p>
    <button id="play-again-btn">Restart the <br/> last level</button>`;
  main.appendChild(winScreen);
};

// --------------------------------------------
// -------------- GAME SETTINGS ---------------
// --------------------------------------------
let muted;

const gameSetup = () => {
  game = new Game(currentGrid, currentSokoboy, currentBoxList);
  buildGameScreen();
  game.soundselect.play();
  game.retry(retry);
  game.goToLevelScreen(goToLevelScreen);
  game.undo(undo);
  game.startGame();
  muted = false;
  mute();
  game.music.play();
};

const retry = () => {
  //Checking if the  player wants to retry
  let retryBtn = document.getElementById("retry-btn");
  retryBtn.addEventListener("click", (event) => {
    game.music.pause();
    clearInterval(game.intervalID);
    // The box list is erased
    game.level.boxList.splice(0, game.level.boxList.length);
    gameSetup();
  });
};

const nextLevel = () => {
  let nextLevelBtn = document.querySelector(".next-level-btn");
  nextLevelBtn.addEventListener("click", () => {
    game.soundWin.pause();
    game.soundWin.currentTime = 0;
    if (i === levelList.length) {
      i = 0;
    }
    currentGrid = levelList[i][0];
    currentSokoboy = levelList[i][1];
    currentBoxList = levelList[i][2];
    console.log(currentBoxList);
    gameSetup();
    i++;
  });
};

const playAgain = () => {
  let playAgainBtn = document.querySelector("#play-again-btn");
  playAgainBtn.addEventListener("click", () => {
    // Re starting the game
    game.soundWin.pause();
    game.soundWin.currentTime = 0;
    gameSetup();
  });
};

const levelSelection = () => {
  let levelBtnList = document.querySelectorAll(".level-btn");
  levelBtnList.forEach((btn) => {
    btn.addEventListener("click", () => {
      switch (btn.innerText) {
        case "Level 1":
          currentGrid = levelList[0][0];
          currentSokoboy = levelList[0][1];
          currentBoxList = levelList[0][2];
          i = 1;
          break;
        case "Level 2":
          currentGrid = levelList[1][0];
          currentSokoboy = levelList[1][1];
          currentBoxList = levelList[1][2];
          i = 2;
          break;
        case "Level 3":
          currentGrid = levelList[2][0];
          currentSokoboy = levelList[2][1];
          currentBoxList = levelList[2][2];
          i = 3;
          break;
        case "Level 4":
          currentGrid = levelList[3][0];
          currentSokoboy = levelList[3][1];
          currentBoxList = levelList[3][2];
          i = 4;
          break;
      }
      gameSetup();
    });
  });
};

const goToLevelScreen = () => {
  let levelBtn = document.querySelector(".level-selector");
  levelBtn.addEventListener("click", () => {
    clearInterval(game.intervalID);
    game.music.pause();
    game.music.currentTime = 0;
    buildLevelsScreen();
    game.soundselect.play();
    levelSelection();
  });
};

const undo = () => {
  let undoBtn = document.querySelector("#undo-btn");
  undoBtn.addEventListener("click", () => {
    // Avoid that the player wins by clicking on undo before he starts moving
    if (game.movement !== 0) game.undoLastAction();
    game.soundselect.play();
  });
};

const mute = () => {
  let muteBtn = document.querySelector("#mute");
  muteBtn.addEventListener("click", () => {
    if (muted) {
      game.music.play();
      muteBtn.innerHTML = `<img src ="/img/soundOn.png" alt="Sound On"/>`;
    } else {
      game.music.pause();
      muteBtn.innerHTML = `<img src ="/img/soundOff.png" alt="Sound Off"/>`;
    }
    muted = !muted;
  });
};
// --------------------------------------------
// ------------ STARTING THE GAME -------------
// --------------------------------------------
// Waiting for the page to load before to show the splash screen
window.addEventListener("load", () => {
  buildSplashScreen();

  //Waiting for the player to press Start to build the game
  let startBtn = document.querySelector("#start-button");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      gameSetup();
    });
  }
  // Or waiting for the player to click on Levels
  goToLevelScreen();
});
