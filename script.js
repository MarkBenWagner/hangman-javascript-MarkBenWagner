let randomWords = require('random-words');
const prompt = require('prompt-sync')();

let wordslist = randomWords(300);
let myWord = wordslist[Math.floor(Math.random() * 250)];
console.log(myWord);
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

while (arr.join(' ') != lineArr.join(' ')){
    let userInput = prompt("Choose a letter: ");
    console.log("_________________________");

    // console.log(userInput);
    
    while (userInput.length > 1){
        console.log("You should write only one letter! \nTry again! \n");
        userInput = prompt("Choose a letter: ");
    }
    
    userLetters += userInput;
    userLettersArray = Array.from(userLetters);
    console.log("Your letters: " + userLettersArray.join(', '));
    console.log("_________________________");

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



