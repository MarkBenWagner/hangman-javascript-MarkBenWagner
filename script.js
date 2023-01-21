let randomWords = require('random-words');
const prompt = require('prompt-sync')();

let wordslist = randomWords(100);
let myWord = wordslist[Math.floor(Math.random() * 101)];
console.log(myWord);
console.log(myWord.length);
let line = "";
for (let i = 0; i < myWord.length; i++){
    line += "_ ";
}
console.log(line);
let userInput = prompt("Choose a letter: ");
console.log(userInput);