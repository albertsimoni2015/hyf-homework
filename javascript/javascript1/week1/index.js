 //A future age calculator
const yearOfBirth = 1992;
        let yearFuture = 2090;
        let age = yearFuture - yearOfBirth;
        console.log("you will be " + age +"years  old in" + yearFuture + ".");
 // A dog age calculator
 console.log["\n"]
 const dogYearOfBirth = 2019 ;
 let dogYearFuture =  2025 ;
 let shouldShowResultInDogYears = true
 let dogYear = dogYearFuture - dogYearOfBirth; 
        if (shouldShowResultInDogYears) {
            console.log('your dog will be ${dogYear * 7} dog years old in ${dogYearFuture}.');
        }
        else { 
            console.log('Your dog will be ${dogYear} human years old in ${dogYearFuture}.');
        }
        // A house price estimator

console.log("\n");
let houseWidth = 5; 
let houseDepth = 11; 
let houseHeight = 8; 
let gardenSizeInM2 = 70; 
const volumeInMeters = houseWidth * houseDepth * houseHeight;
const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let houseCosts = 1000000; 

console.log(
  `The house price should be around ${housePrice}. The actual price is ${houseCosts}.`
);
if (housePrice >= houseCosts) {
  console.log("The house price is good, buy it!");
} else {
  console.log("The house is too expensive!");
}

// Startup name generator

console.log("\n");
let firstWords = [
  "easy",
  "fine",
  "fly",
  "amazing",
  "super",
  "fun",
  "awesome",
  "instant",
  "best",
  "cool",
];
let secondWords = [
  "fix",
  "service",
  "solution",
  "up",
  "improve",
  "option",
  "example",
  "switch",
  "tune",
  "repair",
];

let startupName = `${
  firstWords[Math.floor(Math.random() * firstWords.length)]
} ${secondWords[Math.floor(Math.random() * secondWords.length)]}`;

console.log(
  `The startup: "${startupName}" contains ${startupName.length} characters`
);