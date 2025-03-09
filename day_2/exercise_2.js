// Print the first quote
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// Print the Mother Teresa quote
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');

// Check if typeof '10' is exactly equal to 10 and convert if necessary
console.log(typeof '10' === typeof 10);  
let num = Number('10');
console.log(typeof num === typeof 10);   

// Check if parseFloat('9.8') is equal to 10, if not make it 10
console.log(parseFloat('9.8') === 10);  
let adjustedNum = Math.round(parseFloat('9.8'));
console.log(adjustedNum); 

// Check if 'on' is found in both 'python' and 'jargon'
console.log('python'.includes('on') && 'jargon'.includes('on'));  

// Check if 'jargon' is in the sentence
let sentence = "I hope this course is not full of jargon.";
console.log(sentence.includes('jargon'));  

// Generate a random number between 0 and 100 inclusively
console.log(Math.floor(Math.random() * 101));

// Generate a random number between 50 and 100 inclusively
console.log(Math.floor(Math.random() * 51) + 50);

// Generate a random number between 0 and 255 inclusively
console.log(Math.floor(Math.random() * 256));

// Access a random character in 'JavaScript'
let jsString = 'JavaScript';
let randomIndex = Math.floor(Math.random() * jsString.length);
console.log(jsString[randomIndex]);

// Print the pattern using escape characters
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// Slice out 'because because because' from the sentence
let longSentence = 'You cannot end a sentence with because because because is a conjunction';
let startIndex = longSentence.indexOf('because');
let endIndex = longSentence.lastIndexOf('because') + 'because'.length;
console.log(longSentence.substring(0, startIndex) + longSentence.substring(endIndex));
