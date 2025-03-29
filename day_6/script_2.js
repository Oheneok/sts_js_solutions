//generating random numbers of difeerent lengths
// length = 12
let characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
let randomID = '';
let length = 12;
for (let i = 0; i < length; i++){
    randomID += characters.charAt(Math.floor(Math.random() * characters.length))
}
console.log(randomID);

// length = 24 
let usable_characters = 'abccdefghijklmnopqrstuvwxyz1234567890';
let generated_id = '';
let length_usable = 24;
for (let i = 0; i < length_usable; i++){
    generated_id += usable_characters.charAt(Math.floor(Math.random() * usable_characters.length))
}
console.log(generated_id);

// generate hexadecimal number
let hexNumber = '';
let hexCharacters = 'abcdef0123456789';
for (let i = 0; i < 8; i++){
    hexNumber += hexCharacters.charAt(Math.floor(Math.random() * hexCharacters.length))
} 
console.log(hexNumber)

//genetaing random rgb colors
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
console.log(`rgb(${r},${g},${b})`);

//countries array
const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan",  "Kenya"];
const uppercaseCountries = countries.map(country => country.toLocaleUpperCase());
console.log(uppercaseCountries);

// country lengths
const countryLengths = countries.map(country => country.length)
console.log(countryLengths)

//Create an array of arrays (Country, Abbreviation, Length) with .map
const countryData = countries.map(country => [
    country,                      
    country.slice(0, 3).toUpperCase(),  // First three letters in uppercase
    country.length                // Length of the country name
  ]);
  
  console.log(countryData);

// with for loop
let countryInfo = [];
for (let i = 0; i < countries.length; i++){
    let abbreviation = countries[i].slice(0, 3).toUpperCase();
    let length = countries[i].length;
    countryInfo.push([countries[i], abbreviation, length]);
}
console.log(countryInfo);

// countris containing "land"
const landCountries = countries.filter(country => country.includes('land'));
console.log(landCountries);

// countries ending in "ia"
const iaCountries = countries.filter(country => country.endsWith("ia"));
console.log(iaCountries);

// Country with the longest name
let longestCountry = "";
for (let country of countries) {
    if (country.length > longestCountry.length) {
        longestCountry = country;
    }
}
console.log(longestCountry);

// five-letter countries
const fiveCharCountries = [];
for ( let i = 0; i < countries.length; i++){
    if (countries[i].length === 5) {
        fiveCharCountries.push(countries[i]);
    }
}
console.log(fiveCharCountries);

// five-letter countires alternative method
const fiveletterCountries = countries.filter(country => country.length === 5);
console.log(fiveletterCountries);


// Longest word in the webTechs array
let webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']
let longestWord = "";

for (let word of webTechs){
    if (word.length > longestWord.length) {
        longestWord = word;
    }
}
console.log(longestWord);

// webtech info array
let webTechInfo = webTechs.map(tech => [tech, tech.length]);
console.log(webTechInfo);

// MERN acronym
const mernStack = ["MongoDB", "Express", "React", "Node"];
let mernAcronym = '';
for (let OneTech of mernStack) {
    mernAcronym += OneTech[0];
}
console.log(mernAcronym);


// Printing out elements in an array after every iteration
const techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for (let tech of techs) {
    console.log(tech);
}

//Reverse order of fruits array without .reverse()
let fruits = ['banana', 'orange', 'mango', 'lemon'];
let reversedfruits = [];
for (let i = fruits.length - 1; i >= 0; i--){
    reversedfruits.push(fruits[i]);
}
console.log(reversedfruits);

// Print elements of fullstack array
const Fullstack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];
for (let stack of Fullstack) {
    for (tech of stack) {
        console.log(tech.toUpperCase())
    }
}



