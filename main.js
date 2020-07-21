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


let game = new Game(grid1, sokoboy1, boxList1);

const buildSplashScreen = () => {
  let splashScreen = document.createElement("div");
  splashScreen.id = "splash-screen";
  splashScreen.innerHTML = `
    <h1>SOKOBAN 92</h1>
      <p>
        Help Soko-boy to store his boxes on the yellow balls with as few moves
        as possible. <br />Be careful not to be stucked or you will have to try
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
    <h1>YEAH!</h1>
      <h2>YOU MADE IT!</h2>
      <div><img src="img/sokogif.gif" alt="Soko-boy dance" /></div>
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
    game = new Game(grid1, sokoboy1, boxList1);
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
