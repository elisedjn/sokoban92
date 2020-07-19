let main = document.querySelector("main");
let box1 = new Box(3, 2);
let box2 = new Box(2, 5);
let box3 = new Box(5,6);
let sokoboy = new Sokoboy(2, 1);
let level1 = new Level();
let game = new Game()

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
  // Removing the splash screen
  main.removeChild(main.firstChild);
  //creating and adding the canvas to the body
  let gameScreen = document.createElement("canvas");
  gameScreen.width = "560";
  gameScreen.height = "560";
  gameScreen.id = "game-canvas";
  let ctx = gameScreen.getContext('2d');
  level1.draw(ctx);
  sokoboy.draw(ctx);
  box1.draw(ctx);
  box2.draw(ctx);
  box3.draw(ctx);
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
      <p id="final-score"> Your moves : <span>20</span></p>
      <button id="play-again-btn">Play again</button>`;
  main.appendChild(winScreen);
};

// Waiting for the page to load before to show the splash screen
window.addEventListener("load", () => {
  buildSplashScreen();

  //Waiting for the player to press Start to build the game
  let startBtn = document.querySelector("#start-button");
  startBtn.addEventListener("click", () => {
    // let intervalID = setInterval (() => {
    //   requestAnimationFrame(buildGameScreen)
    // }, 100);
    buildGameScreen();
    

    
    // Waiting for the player to win the game
    // !!!! I Need to create a never ending loop between play again and the game screen
    // Make a function that calls itself in the if / addEventListener
    // Begining of a logic
    let win = false;
    if (win) {
      clearInterval(intervalID)
      buildWinScreen();
      // Waiting for the player to click on play again
      let playAgainBtn = document.querySelector("#play-again-btn");
      playAgainBtn.addEventListener("click", () => {
        buildGameScreen();
      });
    }
  });
});
