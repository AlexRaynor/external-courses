function Hangman(word) {
    let rightLetters = [];
    let wrongLetters = [];
    let maxErrorsValue = 6;
    let hiddenWord = word;
    
    this.guess = function (letter) {
        if (typeof letter !== 'string' || letter.length !== 1 || wrongLetters.length >= maxErrorsValue){
            console.log("Incorrect data (Game over)");
        } 
        else {
            if (hiddenWord.includes(letter)){
                rightLetters.push(letter);
                let result = hiddenWord.replace(new RegExp('[^' + rightLetters + ']', 'gi'), "_");
                if (!result.includes("_")){
                    result += " \| Victory!";
                    console.log(result);
                    return this;
                }
                console.log(result);
            } 
            else {
                if (wrongLetters.length >= maxErrorsValue){
                    console.log("Game over");
                } else {
                    wrongLetters.push(letter);
                    console.log("FALSCH!, iterations left: " + (maxErrorsValue - wrongLetters.length) + " \| " + wrongLetters);
                }
            }
        }
         return this;
    }

    this.getGuessedString = function(){
        console.log(hiddenWord.replace(new RegExp('[^' + rightLetters + ']', 'gi'), "_"));
        return this;
    }

    this.getErrorsLeft = function(){
        console.log(maxErrorsValue - wrongLetters.length + "");
        return this;
    }

    this.getWrongSymbols = function(){
        console.log(wrongLetters + "");
        return this;
    }
    
    this.startAgain = function(newWord){
        rightLetters = [];
        hiddenWord = newWord;
        wrongLetters = [];
        return this;
    }
}
var hangman = new Hangman('webpurple');

hangman.guess('w'); // "w________"
hangman.guess('e'); // "we______e"
hangman.guess('a'); // "wrong letter, errors left 5 | a"
hangman.guess('p'); // "we_p__p_e"
hangman.guess('k'); // "wrong letter, errors left 4 | a,k"

hangman.getGuessedString(); // we_p__p_e
hangman.getErrorsLeft(); // 4
hangman.getWrongSymbols(); // [a,k]

hangman.guess('b') // "webp___p_e"
  .guess('l') // "webp__ple"
  .getErrorsLeft() // 4
  .getWrongSymbols() // [a,k]
  .guess('u') // "webpu_ple"
  .guess('r'); // "webpurple | You won!"

  hangman.startAgain('Apocalypse')
  .guess('p') // "_p__p____"