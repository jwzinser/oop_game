/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = ['this is a simple game',
                        'hello there how are you',
                        'random phrase this is',
                        'this has been a weird year'].map(string => new Phrase(string));
        this.activePhrase = null;
    };

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }; 

    // hides overlay and sets screen for new game
    startGame() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }; 

    // checks for each interaction (clicked or typed) if the letter si successful or not,
    // and updates lifes and screen accordingly
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

    removeLife() {
        const hearts = document.querySelectorAll('.tries img');
        hearts[this.missed].src = 'images/lostHeart.png';
        this.missed += 1; 
        if(this.missed >= 5) {
            this.gameOver(false);
        };
    };

    checkForWin() {
        return document.querySelectorAll('li.hide').length === 0;
    };

    // Shows overlay screen, and hides phrase/keyboard screen
    // resets keys and letter spaces
    gameOver(gameWon) {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = '';
        
        const gameOverMsg = document.querySelector('#game-over-message');
        // checks for win/lose and display win/lose message, classNames used for formating
        if(gameWon) {
            gameOverMsg.textContent = 'Succesfull Game!';
            overlay.classList.remove('start','lose');
            overlay.classList.add('win');
        } else {
            gameOverMsg.textContent = 'Game Over!';
            overlay.classList.remove('start', 'win');
            overlay.classList.add('lose');
        };
        document.querySelector(".main-container").style.background="white";

        const lis = document.querySelector("#phrase ul");
        lis.innerHTML = "";

        // resets key buttons
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


