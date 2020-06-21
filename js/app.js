
let game;

const keys = document.querySelectorAll('.key');


// Adds a click event listener to the 'Start Game' button, which creates a new instance of the game.
document.querySelector('#btn__reset').addEventListener('click', () => {
   game = new Game();
   game.startGame();
});

// Adds click event listeners to each of the onscreen keyboard buttons.
document.querySelector('#qwerty').addEventListener('click', (e) => {
  if(e.target.className === 'key') {
     game.handleInteraction(e.target);
  };
});


// Adds event listeners to physical keyboard keys and START GAME button.
document.addEventListener('keyup', (e) => {
   console.log(e.key);
  // Allows player to use physical computer keyboard to enter guesses.
  if (document.querySelector('#overlay').style.display === 'none')
         document.querySelectorAll('.key').forEach(key => {
        if(key.textContent === e.key) {
           game.handleInteraction(key);
        };
     });
  
  // Allows the user to press 'Enter' on the keyboard to create a new instance of the game.   
  if (overlay.style.display !== 'none') {
    if (e.keyCode === 13) {
        game = new Game();
        game.startGame();
     };
   };
});












/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */





/*
//create game object
let game = new Game();

//click button to start new game
const startButton = document.querySelector("#btn__reset");
startButton.addEventListener("click", (e) => {
    game = new Game();
    game.resetGame();
    game.startGame();
});

//click buttons to select letters
const keyButtons = document.querySelectorAll(".key");
keyButtons.forEach(key => {
    key.addEventListener("click", (e) => {
        game.handleInteraction(e.target);
    });
});
*/