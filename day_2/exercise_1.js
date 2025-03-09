// Declare a variable named challenge and assign it a value
let challenge = '30 Days Of JavaScript';

// Print the string
console.log(challenge);

// Print the length of the string
console.log(challenge.length);

// Convert to uppercase
console.log(challenge.toUpperCase());

// Convert to lowercase
console.log(challenge.toLowerCase());

// Slice out the first word using substr()
console.log(challenge.substr(3)); 

// Slice out 'Days Of JavaScript' from '30 Days Of JavaScript'
console.log(challenge.substring(3));

// Check if the string contains 'Script'
console.log(challenge.includes('Script'));
// Split the string into an array
console.log(challenge.split(''));

// Split the string at spaces
console.log(challenge.split(' '));

// Split the given company names at commas and store in an array
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));

// Replace 'JavaScript' with 'Python'
console.log(challenge.replace('JavaScript', 'Python'));

// Get the character at index 15
console.log(challenge.charAt(15));

// Get the character code of 'J'
console.log(challenge.charCodeAt(challenge.indexOf('J')));

// Find index of first occurrence of 'a'
console.log(challenge.indexOf('a'));

// Find index of last occurrence of 'a'
console.log(challenge.lastIndexOf('a'));

// Find the first occurrence of 'because' in a sentence
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

// Find the last occurrence of 'because'
console.log(sentence.lastIndexOf('because'));

// Use search() to find 'because'
console.log(sentence.search('because'));

// Remove whitespace from both ends of the string
let trimmedChallenge = ' 30 Days Of JavaScript ';
console.log(trimmedChallenge.trim());

// Check if the string starts with '30'
console.log(challenge.startsWith('30'));

// Check if the string ends with 'JavaScript'
console.log(challenge.endsWith('JavaScript'));

// Find all occurrences of 'a' using match()
console.log(challenge.match(/a/g));

// Concatenate strings
console.log('30 Days of '.concat('JavaScript'));

// Repeat the string twice
console.log(challenge.repeat(2));







