// --------------------------------------------
// ------------ LEVEL SETTINGS ----------------
// --------------------------------------------

// Elements for the 1st Level
let number1 = 1;
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
let number2 = 2;
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
let number3 = 3;
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
let number4 = 4;
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

// Elements of the hidden levels
let extraNumber1 = 92;
let extraGrid1 = [
  ["BG", "W", "W", "W", "W", "W", "W", "BG"],
  ["BG", "W", "YB", "V", "YB", "YB", "W", "BG"],
  ["BG", "W", "YB", "V", "V", "YB", "W", "BG"],
  ["W", "W", "W", "FW", "V", "V", "W", "W"],
  ["W", "V", "FW", "V", "V", "FW", "V", "W"],
  ["W", "V", "W", "FW", "W", "W", "V", "W"],
  ["W", "V", "V", "V", "V", "V", "V", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
];
let extraSokoboy1 = [4, 6];
let extraBoxList1 = [
  [4, 2],
  [5, 3],
  [2, 4],
  [5, 4],
  [3, 5],
];

let extraNumber2 = 90;
let extraGrid2 = [
  ["BG", "BG", "BG", "BG", "BG", "BG", "BG", "BG"],
  ["BG", "W", "W", "W", "W", "W", "W", "BG"],
  ["W", "W", "V", "FW", "V", "V", "W", "W"],
  ["W", "V", "V", "FW", "V", "V", "V", "W"],
  ["W", "YB", "YB", "YB", "YB", "YB", "YB", "W"],
  ["W", "V", "V", "V", "FW", "V", "V", "W"],
  ["W", "W", "W", "V", "V", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
];
let extraSokoboy2 = [1, 5];
let extraBoxList2 = [
  [2, 3],
  [4, 3],
  [5, 3],
  [2, 5],
  [3, 5],
  [5, 5],
];

let hiddenLevelList = [
  [extraNumber1, extraGrid1, extraSokoboy1, extraBoxList1],
  [extraNumber2, extraGrid2, extraSokoboy2, extraBoxList2],
];

let levelList = [
  [number1, grid1, sokoboy1, boxList1],
  [number2, grid2, sokoboy2, boxList2],
  [number3, grid3, sokoboy3, boxList3],
  [number4, grid4, sokoboy4, boxList4],
];
let i = 1;

let currentNumber = levelList[0][0];
let currentGrid = levelList[0][1];
let currentSokoboy = levelList[0][2];
let currentBoxList = levelList[0][3];

// --------------------------------------------
// ------------- SCREEN SETTINGS --------------
// --------------------------------------------
let main = document.querySelector("main");
let game = new Game(currentNumber, currentGrid, currentSokoboy, currentBoxList);

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
      <img class="soko-dance" src="./img/sokogif.gif" alt="Soko-boy dance" />
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
  <img class="soko-dance" src="./img/sokogif.gif" alt="Soko-boy dance" />`;
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
  <button id="mute"><img src="./img/soundOn.png" alt="Sound on"/></button>`;
  main.appendChild(gameScreen);
};

const buildWinScreen = () => {
  // Removing the game screen
  main.removeChild(main.firstChild);
  // creating and adding the win screen to the body
  let winScreen = document.createElement("div");
  winScreen.id = "win-screen";
  winScreen.innerHTML = `
    <h1><img class="soko-dance" src="./img/sokogif.gif" alt="Soko-boy dance" />YEAH!</h1>
      <h2>YOU MADE IT!</h2>
      <button class="next-level-btn">Next Level</button>
      <p class="final-score"> Your moves : <span>${game.movement}</span></p>
      <p class="can-do-better"> </br>  </br>Wanna try to do better? </p>
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
    <h1><img class="soko-dance" src="./img/sokogif.gif" alt="Soko-boy dance" />YEAH!</h1>
    <h2>YOU ROCK!</h2>
    <button class="next-level-btn">Restart the all game</button>
    <p class="final-score"> Your moves : <span>${game.movement}</span></p>
    <p class="can-do-better"> </br>  </br>Wanna try to do better? </p>
    <button id="play-again-btn">Restart the <br/> last level</button>`;
  main.appendChild(winScreen);
};

// --------------------------------------------
// -------------- GAME SETTINGS ---------------
// --------------------------------------------
let muted;

const gameSetup = () => {
  game = new Game(currentNumber, currentGrid, currentSokoboy, currentBoxList);
  buildGameScreen();
  game.soundselect.play();
  game.retry(retry);
  game.goToLevelScreen(goToLevelScreen);
  game.undo(undo);
  game.startGame();
  mute();
  let muteBtn = document.querySelector("#mute");
  if (muted) {
    game.music.pause();
    muteBtn.innerHTML = `<img src ="./img/soundOff.png" alt="Sound Off"/>`;
  } else {
    game.music.play();
    muteBtn.innerHTML = `<img src ="./img/soundOn.png" alt="Sound On"/>`;
  }
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
    currentNumber = levelList[i][0];
    currentGrid = levelList[i][1];
    currentSokoboy = levelList[i][2];
    currentBoxList = levelList[i][3];
    gameSetup();
    i++;
  });
  // Or waiting for the player to go to the hidden Level
  hiddenLevel();
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
      // The box list is erased
      game.level.boxList.splice(0, game.level.boxList.length);
      switch (btn.innerText) {
        case "Level 1":
          currentNumber = levelList[0][0];
          currentGrid = levelList[0][1];
          currentSokoboy = levelList[0][2];
          currentBoxList = levelList[0][3];
          i = 1;
          break;
        case "Level 2":
          currentNumber = levelList[1][0];
          currentGrid = levelList[1][1];
          currentSokoboy = levelList[1][2];
          currentBoxList = levelList[1][3];
          i = 2;
          break;
        case "Level 3":
          currentNumber = levelList[2][0];
          currentGrid = levelList[2][1];
          currentSokoboy = levelList[2][2];
          currentBoxList = levelList[2][3];
          i = 3;
          break;
        case "Level 4":
          currentNumber = levelList[3][0];
          currentGrid = levelList[3][1];
          currentSokoboy = levelList[3][2];
          currentBoxList = levelList[3][3];
          i = 4;
          break;
      }
      gameSetup();
    });
  });
  // Or waiting for the player to go to the hidden Level
  hiddenLevel();
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
      muteBtn.innerHTML = `<img src ="./img/soundOn.png" alt="Sound On"/>`;
    } else {
      game.music.pause();
      muteBtn.innerHTML = `<img src ="./img/soundOff.png" alt="Sound Off"/>`;
    }
    muted = !muted;
  });
};

const hiddenLevel = () => {
  let hiddenBtn = document.querySelector(".soko-dance");
  if (hiddenBtn) {
    hiddenBtn.addEventListener("click", () => {
      // The box list is erased
      game.level.boxList.splice(0, game.level.boxList.length);
      // Choosing randomly the level
      let randomIndex = Math.round(Math.random() * hiddenLevelList.length)
      currentNumber = hiddenLevelList[randomIndex][0];
      currentGrid = hiddenLevelList[randomIndex][1];
      currentSokoboy = hiddenLevelList[randomIndex][2];
      currentBoxList = hiddenLevelList[randomIndex][3];
      i = 4;
      game.soundWin.pause();
      game.soundWin.currentTime = 0;
      gameSetup();
      gameScreen.classList.add("animated")
    });
  }
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

  // Or waiting for the player to go to the hidden Level
  hiddenLevel();
});
