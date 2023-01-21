let randomWords = require('random-words');
const prompt = require('prompt-sync')();

let wordslist = randomWords(100);
let myWord = wordslist[Math.floor(Math.random() * 101)];
console.log(myWord);
// console.log(myWord.length);
let line = "";
for (let i = 0; i < myWord.length; i++){
    line += "_ ";
}
console.log(line);
let lineArr = Array.from(line);
console.log(lineArr);
lineArr = lineArr.replace(' ', '');


let userInput = prompt("Choose a letter: ");
// console.log(userInput);
let arr = Array.from(myWord);
// console.log(arr);
while (userInput.length > 1){
    console.log("You should write only one letter! \nTry again! \n");
    userInput = prompt("Choose a letter: ");
}

// else..

for (let j = 0; j < arr.length; j++){
    if (arr[j].includes(userInput)){
        console.log(userInput);
    }
}
console.log(typeof lineArr);
console.log(lineArr[3]);