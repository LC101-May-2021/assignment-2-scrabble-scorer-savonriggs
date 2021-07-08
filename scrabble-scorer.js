// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

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
let word = ""
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
   console.log("Let's play some scrabble!");
word = input.question("Enter word to be scored: ")
console.log(scorerPrompt(word));
};

let simpleScore = function(word){
  
  return(`Score for ${word} : ${word.length}`);
};

let scrabbleScore = function(word){
  let score = 0
  for (const letter in newPointStructure){
    for (let i = 0; i < word.length; i++){
      if (letter.includes(word[i].toLowerCase())){
    score += Number(newPointStructure[letter])
    }
    }
  }

    
 return (`Score for ${word} : ${score}`)
};



let vowelBonusScore = function(word){
  const vowels = "AEIOU"
  let score = 0
  for (let i = 0; i < word.length; i++){
if (vowels.includes(word[i].toUpperCase())){
  score += 3
}else if (word.length){
  score += 1
}}
return (`Score for ${word} : ${score}`)
};





 let simpleScorer = {
  name: "SimpleScore",
  description: "Each letter is worth 1 point.",
  scorerFunction: simpleScore
 }
  let bonusVowels = {
    name: "BonusVowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scorerFunction: vowelBonusScore
  }

  let scrabbleScorer = {
    name: "Scrabble",
  description: "Uses Scrabble point system",
  scorerFunction: scrabbleScore
  }
const scoringAlgorithms = [simpleScorer, bonusVowels, scrabbleScorer ];

function scorerPrompt() {
  console.log("Which scoring algorithm would you like to use?");
  console.log("")
  console.log("0- ", simpleScorer.name);
  console.log(simpleScorer.description);
  console.log("1- ", bonusVowels.name);
  console.log(bonusVowels.description);
  console.log("2- ", scrabbleScorer.name);
  console.log(scrabbleScorer.description)
  let choice = input.question("Enter 0, 1, or 2:")
  if (choice === "0"){
    console.log(scoringAlgorithms[0].scorerFunction(word))
  }else if  (choice === "1"){
    console.log(scoringAlgorithms[1].scorerFunction(word))
  }else if (choice === "2"){
    console.log(scoringAlgorithms[2].scorerFunction(word))
  }
}
let newPointStructure = transform(oldPointStructure);

function transform(oldPointStructure) {
  let newPointStructure = {}
  
  for (const point in oldPointStructure){
   for (let i = 0; i < oldPointStructure[point].length; i++){
    
    newPointStructure[oldPointStructure[point][i].toLowerCase()] = Number(point);
   }}
  
return newPointStructure;
};



function runProgram() {
   initialPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

