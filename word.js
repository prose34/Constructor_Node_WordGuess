// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing 
// the current word the user is attempting to guess. That means the constructor should define:


// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function 
// on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

var Letter = require("./letter.js");

function Word (randomWord) {

    this.word = randomWord; //store the string randomWord - random word chosen from word list/array

    this.letters = []; //push letters into this array

    this.wordFound = false;

    this.getRandomWordLetters = function () {
        for (var i = 0; i < this.word.length; i++) {
            var newLetter = new Letter(this.word[i]);
            this.letters.push(newLetter);
        };
    };

    // this.didWeFindTheWord

    this.wasLetterFound = function (guessedLetter) {
        // var whatToReturn = 0;
        this.letters.forEach(function(letterToGuess) {
            if(letterToGuess.letter === guessedLetter) {
                letter.hasThisLetterBeenGuessed = true;

            };
        });
    };

    this.wordRender = function () {
        var display = '';
        this.letters.forEach(function(letterToGuess){
            var currentLetter = letterToGuess.letterGuessResult();
            display+= currentLetter;
        });
    };

    return display;

}

module.exports = Word;
