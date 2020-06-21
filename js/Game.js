/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = ['vs'].map(string => new Phrase(string));
        this.activePhrase = null;
    };


    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }; 

    // Begins game by selecting a random phrase and displaying it to the player.
    startGame() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }; 


    handleInteraction(btn) {
        btn.disabled = true;
        const mc = document.querySelector(".main-container");

        if (this.activePhrase.checkLetter(btn.innerText)) {
            btn.classList.add("chosen");
            this.activePhrase.showMatchedLetter(btn.innerText);
            mc.style.background="green";
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            btn.classList.add("wrong");
            mc.style.background="red";
            this.removeLife();
        }
    }

    handleInteractionKey(code) {
        var keyCodes = { '65': 'a',  '66': 'b',  '67': 'c',  '68': 'd',  '69': 'e',  
                '70': 'f',  '71': 'g',  '72': 'h',  '73': 'i',  '74': 'j',  '75': 'k',  
                '76': 'l',  '77': 'm',  '78': 'n',  '79': 'o',  '80': 'p',  '81': 'q',  
                '82': 'r',  '83': 's',  '84': 't',  '85': 'u',  '86': 'v',  
                '87': 'w',  '88': 'x',  '89': 'y',  '90': 'z' 
        }
    }

    // Increases the value of the missed property, and removes a life from the scoreboard. 
    removeLife() {
        const hearts = document.querySelectorAll('.tries img');
        hearts[this.missed].src = 'images/lostHeart.png';

        // Also ends game once player is out of lives.
        this.missed += 1; 

        if(this.missed >= 5) {
            this.gameOver(false);
        };
    };


    checkForWin() {
        return document.querySelectorAll('li.hide').length === 0;
    };

    gameOver(gameWon) {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = '';
        
        const gameOverMsg = document.querySelector('#game-over-message');
        if(gameWon) {
            gameOverMsg.textContent = 'Succesfull Game!';
            overlay.classList.remove('start');
            overlay.classList.remove('lose');
            overlay.classList.add('win');
        } else {
            gameOverMsg.textContent = 'Game Over!';
            overlay.classList.remove('start');
            overlay.classList.remove('win');
            overlay.classList.add('lose');
        };

        const lis = document.querySelector("#phrase ul");
        lis.innerHTML = "";

        const buttons = document.querySelectorAll('#qwerty button');
        buttons.forEach(btn => {
            btn.disabled = false;
            btn.classList.remove('chosen');
            btn.classList.remove('wrong');
        });

        const hearts = document.querySelectorAll('.tries img');
        hearts.forEach(heart => {
            heart.src = 'images/liveHeart.png';
        });
    };
 };


