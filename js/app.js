
let game;

const keys = document.querySelectorAll('.key');


// 'Start Game' button
document.querySelector('#btn__reset').addEventListener('click', () => {
   game = new Game();
   game.startGame();
});

// Keys click listeners
document.querySelector('#qwerty').addEventListener('click', (e) => {
  if(e.target.className === 'key') {
     game.handleInteraction(e.target);
  };
});


// Keyboard key listeners
document.addEventListener('keyup', (e) => {
  if (document.querySelector('#overlay').style.display === 'none')
         document.querySelectorAll('.key').forEach(key => {
        if(key.textContent === e.key) {
           game.handleInteraction(key);
        };
     });
});
