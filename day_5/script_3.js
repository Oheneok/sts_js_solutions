// Array of ages
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort ages and find min/max
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find median age
const midIndex = Math.floor(ages.length / 2);
const medianAge = ages.length % 2 === 0 ? (ages[midIndex - 1] + ages[midIndex]) / 2 : ages[midIndex];

// Find average age
const averageAge = ages.reduce((acc, age) => acc + age, 0) / ages.length;

// Find age range
const ageRange = maxAge - minAge;

// Compare min - average and max - average using Math.abs()
const minDiff = Math.abs(minAge - averageAge);
const maxDiff = Math.abs(maxAge - averageAge);

console.log("Sorted ages:", ages);
console.log("Min age:", minAge);
console.log("Max age:", maxAge);
console.log("Median age:", medianAge);
console.log("Average age:", averageAge);
console.log("Age range:", ageRange);
console.log("Difference (min - average):", minDiff);
console.log("Difference (max - average):", maxDiff);

// Import countries array from external file (Ensure the file exists in the same directory)
import countries from "./countries.js";

// Get the first 10 countries
const firstTenCountries = countries.slice(0, 10);

// Find the middle country(ies)
const midCountryIndex = Math.floor(countries.length / 2);
const middleCountries = countries.length % 2 === 0
  ? [countries[midCountryIndex - 1], countries[midCountryIndex]]
  : [countries[midCountryIndex]];

// Split the countries array into two halves
const halfIndex = Math.ceil(countries.length / 2);
const firstHalf = countries.slice(0, halfIndex);
const secondHalf = countries.slice(halfIndex);

// Output the results
console.log("First 10 countries:", firstTenCountries);
console.log("Middle country(ies):", middleCountries);
console.log("First half of countries:", firstHalf);
console.log("Second half of countries:", secondHalf);
