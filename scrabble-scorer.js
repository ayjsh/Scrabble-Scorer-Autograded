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
	word = word.toUpperCase();
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

};

function simpleScorer(word){
   let letterPoints = word.length;
   return letterPoints;
}

function vowelBonusScorer(word){
   word = word.toUpperCase();
   let letterPoints = 0;
   let vowelArray = ["A", "E", "I", "O", "U"];
   for (let i = 0; i < word.length; i++){
      if (vowelArray.includes(word[i])){
         letterPoints = letterPoints + 3;
      } else {
         letterPoints = letterPoints + 1;
      }
   }
   return letterPoints;
}

const scrabbleScorer = [simpleScorer, vowelBonusScorer, oldScrabbleScorer];

let simple = {
   name: "Simple Scorer",
   description: "Each letter is worth 1 point.",
   scoringFunction: simpleScorer
};

let vowels = {
   name: "Bonus Vowels",
   description: "Vowels are 3 pts, consonants are 1 pt.",
   scoringFunction: vowelBonusScorer
};

let original = {
   name: "Scrabble",
   description: "The traditional scoring algorithm.",
   scoringFunction: oldScrabbleScorer
};

const scoringAlgorithms = [simple, vowels, original];


function scorerPrompt() {
   whichScorer = input.question(`
   Welcome to the Scrabble score calculator!
   Which scoring algorithm would you like to use?

   0 - Simple Score: Each character is worth 1 point. 
   1 - Bonus Vowels: Vowels are worth 3 pts.
   2 - Scrabble: The traditional scoring algorithm.

   Enter 0, 1, or 2: `);
   if (whichScorer == 0){
      console.log("algorithm name: ", scoringAlgorithms[0].name);
      console.log("scoringFunction result: ", scoringAlgorithms[0].scoringFunction("Javascript"));
   } else if (whichScorer == 1){
      console.log("algorithm name: ", scoringAlgorithms[1].name);
    console.log("scoringFunction result: ", scoringAlgorithms[1].scoringFunction("Javascript"));
   } else if (whichScorer == 2) {
     console.log("algorithm name: ", scoringAlgorithms[2].name);
     console.log("scoringFunction result: ", scoringAlgorithms[2].scoringFunction("Javascript"));
   }
};

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   scorerPrompt();
   
}

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
