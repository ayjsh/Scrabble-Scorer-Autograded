// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

let userWord;
userWord = "";

function oldScrabbleScorer(word) {
	word = word.toLowerCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   userWord = input.question("Let's play some scrabble! Enter a word: ");
   // if ((typeof userWord === isNaN())|| (typeof userWord === Symbol)) {
   //    console.log("That's not a word. Please enter a word: ")
   // } else {
   //    return userWord;
   // }
};

function simpleScorer(word){
   let letterPoints = word.length;  
   return letterPoints;
};

function vowelBonusScorer(word){
   word = word.toLowerCase();
   let letterPoints = 0;

   for (let i = 0; i < word.length; i++){
      const vowelArray = ["a", "e", "i", "o", "u"];
      if (vowelArray.includes(word[i])){
         letterPoints = letterPoints += 3;
      } else {
         letterPoints = letterPoints += 1;
      }
   }
   return letterPoints;
};

function scrabbleScorer(word){
   word = word.toLowerCase();
   let letterPoints = 0;
   let checkedLetter = "";
      for (let i = 0; i < word.length; i++) {
      checkedLetter = word[i];
      if (newPointStructure.hasOwnProperty(checkedLetter)){
          letterPoints = letterPoints + newPointStructure[checkedLetter];
         }
    }
    return letterPoints;

};

let simple = {
   name: "Simple Scorer",
   description: "Each letter is worth 1 point.",
   scorerFunction: simpleScorer
};

let vowels = {
   name: "Bonus Vowels",
   description: "Vowels are 3 pts, consonants are 1 pt.",
   scorerFunction: vowelBonusScorer
};

let newScrabble = {
   name: "Scrabble",
   description: "The traditional scoring algorithm.",
   scorerFunction: scrabbleScorer
};

const scoringAlgorithms = [simple, vowels, newScrabble];


function scorerPrompt() {
   whichScorer = input.question(`
   Welcome to the Scrabble score calculator!
   Which scoring algorithm would you like to use?

   0 - Simple Score: Each character is worth 1 point. 
   1 - Bonus Vowels: Vowels are worth 3 pts.
   2 - Scrabble: The traditional scoring algorithm.

   Enter 0, 1, or 2: `);
   if (whichScorer == 0){
      console.log("Scoring Algorithm: ", scoringAlgorithms[0].name);
      console.log("Your Score: ", scoringAlgorithms[0].scorerFunction(userWord));
   } else if (whichScorer == 1){
      console.log("Scoring Algorithm: ", scoringAlgorithms[1].name);
      console.log("Your Score: ", scoringAlgorithms[1].scorerFunction(userWord));
   } else if (whichScorer == 2) {
      console.log("Scoring Algorithme: ", scoringAlgorithms[2].name);
      console.log("Your Score: ", scoringAlgorithms[2].scorerFunction(userWord));
   }
};

function transform(oldScoring) {
      newScoring = { };
      for (item in oldScoring) {
        itemArray = oldScoring[item];
        for(i=0; i<itemArray.length; i++) {
          newScoring[itemArray[i].toLowerCase()] = Number(item);
          }
      }           
      return newScoring
    };
   // console.log("Letters with score '4':", oldPointStructure['4']);
   // console.log("3rd letter within the key '4' array:", oldPointStructure['4'][2]);

   // let letters = oldPointStructure['8'];
   // console.log("Letters with score '8':", letters);
   // console.log("2nd letter within the key '8' array:", letters[1]);

let newPointStructure = transform(oldPointStructure);
    newPointStructure[' '] = 0;


function runProgram() {
    initialPrompt();
    scorerPrompt();
    
}
// 
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
