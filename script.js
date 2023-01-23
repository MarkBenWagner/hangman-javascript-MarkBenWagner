let randomWords = require('random-words');
const prompt = require('prompt-sync')();

let wordslist = randomWords(300);
let myWord = wordslist[Math.floor(Math.random() * 250)];
// console.log(myWord);
// console.log(myWord.length);
let line = "";
for (let i = 0; i < myWord.length; i++){
    line += "_ ";
}
console.log(line);
let lineArr = Array.from(line);
// console.log(lineArr);
lineArr = lineArr.filter(value => {
    return value != ' ';
})
// console.log(lineArr);
let arr = Array.from(myWord);
// console.log(arr);
let userLetters = [];
let wrongLetters;
let wrongGuesses = 0;

/*
  __ 
|    |
|   \O/
|    |
|   / \
|   / \ */
let hangman = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n" +
"\n|_____________" +
"\n|             |" +
"\n|_____________|\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

let firstWrong = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n|" +
"\n|_____________" +
"\n|             |" +
"\n|_____________|\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

let secondWrong = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n|" +
"\n|" +
"\n|_____________" +
"\n|             |" +
"\n|_____________|\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

let thirdWrong = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n|" +
"\n|" +
"\n|" +
"\n|_____________" +
"\n|             |" +
"\n|_____________|\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

let fourthWrong = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n|" +
"\n|" +
"\n|" +
"\n|" +
"\n|_____________" +
"\n|             |" +
"\n|_____________|\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

let fifthWrong = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  __ " +
"\n|" +
"\n|" +
"\n|" +
"\n|" +
"\n|_____________" +
"\n|             |" +
"\n|_____________|\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

let sixthWrong = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  __ " +
"\n|    |" +
"\n|" +
"\n|" +
"\n|" +
"\n|_____________" +
"\n|             |" +
"\n|_____________|\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";


let seventhWrong = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  __ " +
"\n|    |" +
"\n|    O" +
"\n|" +
"\n|" +
"\n|_____________" +
"\n|             |" +
"\n|_____________|\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

let eighthWrong = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  __ " +
"\n|    |" +
"\n|    O/" +
"\n|" +
"\n|" +
"\n|_____________" +
"\n|             |" +
"\n|_____________|\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

let nighthWrong = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  __ " +
"\n|    |" +
"\n|    O/" +
"\n|   /" +
"\n|" +
"\n|_____________" +
"\n|             |" +
"\n|_____________|\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

let tenthWrong = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  __ " +
"\n|    |" +
"\n|    O/" +
"\n|   /|" +
"\n|" +
"\n|_____________" +
"\n|             |" +
"\n|_____________|\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

let eleventhWrong = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  __ " +
"\n|    |" +
"\n|    O/" +
"\n|   /|" +
"\n|    )" +
"\n|_____________" +
"\n|             |" +
"\n|_____________|\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

let twelfthWrong = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  __ " +
"\n|    |" +
"\n|    O/" +
"\n|   /|" +
"\n|    ))" +
"\n|_____________" +
"\n|             |" +
"\n|_____________|\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";



while (arr.join(' ') != lineArr.join(' ') && wrongGuesses <= 12){
    let userInput = prompt("Choose a letter: ");
 console.log("_________________________");
    if (wrongGuesses == 0){
        console.log(hangman);
    } else if (wrongGuesses == 1){
        console.log(firstWrong);
    } else if (wrongGuesses == 2){
        console.log(secondWrong);
    } else if (wrongGuesses == 3){
        console.log(thirdWrong);
    } else if (wrongGuesses == 4){
        console.log(fourthWrong);
    } else if (wrongGuesses == 5){
        console.log(fifthWrong);
    } else if (wrongGuesses == 6){
        console.log(sixthWrong);
    } else if (wrongGuesses == 7){
        console.log(seventhWrong);
    } else if (wrongGuesses == 8){
        console.log(eighthWrong);
    } else if (wrongGuesses == 9){
        console.log(nighthWrong);
    } else if (wrongGuesses == 10){
        console.log(tenthWrong);
    } else if (wrongGuesses == 11){
        console.log(eleventhWrong);
    } else if (wrongGuesses == 12){
        console.log(twelfthWrong);
    } 
    

    // console.log(userInput);
    
    while (userInput.length > 1){
        console.log("You should write only one letter! \nTry again! \n");
        userInput = prompt("Choose a letter: ");
    }
    
    

    if (userLetters.includes(userInput) != true && myWord.includes(userInput) != true){
        userLetters += userInput;
        wrongGuesses += 1;
    }

    

   // console.log(wrongGuesses);
    userLettersArray = Array.from(userLetters);



    console.log("Your letters: " + userLettersArray.join(', '));
   // console.log("_________________________");

    // else..
    
    for (let j = 0; j < arr.length; j++){
        if (arr[j].includes(userInput)){
            lineArr[j] = userInput;
        }
    }

    console.log(lineArr.join(' '));
    if (arr.join(' ') == lineArr.join(' ')){
        console.log("HURRAAY!!")
    }
}

if (wrongGuesses > 12){
    console.log("GAME OVER!!   That was your word: " + myWord);
}



