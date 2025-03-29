// Sample countries array
const countries = [
    "Finland", "Sweden", "Iceland", "Norway", "Denmark", "Estonia", "Swaziland",
    "Ireland", "Thailand", "United States", "South Africa", "New Zealand",
    "Canada", "India", "China", "Brazil", "Argentina", "Germany", "Japan"
];

// Sample arrays for sorting
const webTechs = ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB"];
const mernStack = ["MongoDB", "Express", "React", "Node"];

//  Copy countries array without modifying original
const copiedCountries = [...countries]; 

//  Sort the copied array and store in sortedCountries
const sortedCountries = [...copiedCountries].sort();
console.log("Sorted Countries:", sortedCountries);

//  Sort webTechs and mernStack arrays
const sortedWebTechs = [...webTechs].sort();
const sortedMernStack = [...mernStack].sort();
console.log("Sorted Web Techs:", sortedWebTechs);
console.log("Sorted MERN Stack:", sortedMernStack);

//  Extract all countries that contain "land"
const landCountries = countries.filter(country => country.toLowerCase().includes("land"));
console.log("Countries with 'land':", landCountries);

//  Find the country with the highest number of characters
const longestCountry = countries.reduce((longest, country) => 
    country.length > longest.length ? country : longest, "");
console.log("Country with the highest number of characters:", longestCountry);

//  Extract countries containing only four characters
const fourLetterCountries = countries.filter(country => country.length === 4);
console.log("Four-letter countries:", fourLetterCountries);

//  Extract countries containing two or more words
const multiWordCountries = countries.filter(country => country.includes(" "));
console.log("Countries with two or more words:", multiWordCountries);

//  Reverse the countries array, capitalize each country, and store it
const reversedAndCapitalized = [...countries]
    .reverse()
    .map(country => country.toUpperCase());
console.log("Reversed and Capitalized Countries:", reversedAndCapitalized);
