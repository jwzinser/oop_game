/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    };
    
    // creates boxes for hidden letters
    addPhraseToDisplay() {
        const ul = document.querySelector('#phrase ul');

        for (let i = 0; i < this.phrase.length; i++) {
            const li = document.createElement('li');             
            if(/\s/.test(this.phrase[i])) {
                li.className = 'space';
                li.textContent = this.phrase[i];
            } else  if(/\w/.test(this.phrase[i])){
                li.className = `hide letter ${this.phrase[i]}`;
                li.textContent = this.phrase[i];
            } else{
                console.log("Invalid character.");
            };

            ul.appendChild(li);
        };
    }; 

    checkLetter(letter) {
        return this.phrase.includes(letter);
    };

    showMatchedLetter(letter) {
        const liLetter = document.getElementsByClassName(letter);
        for (let i = 0; i < liLetter.length; i++) {
            liLetter[i].classList.remove('hide');
            liLetter[i].classList.add('show');
        };
    };    
 };
