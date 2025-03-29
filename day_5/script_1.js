// Declare an empty array
const emptyArray = [];
console.log("Empty Array:", emptyArray);

// Declare an array with more than 5 elements
const numbers = [10, 20, 30, 40, 50, 60];
console.log("Array with more than 5 elements:", numbers);

// Find the length of the array
console.log("Length of numbers array:", numbers.length);

// Get the first, middle, and last item of the array
const firstItem = numbers[0];
const middleItem = numbers[Math.floor(numbers.length / 2)];
const lastItem = numbers[numbers.length - 1];
console.log("First Item:", firstItem);
console.log("Middle Item:", middleItem);
console.log("Last Item:", lastItem);

// Declare an array with mixed data types
const mixedDataTypes = [42, "Hello", true, { name: "John" }, [1, 2, 3], null];
console.log("Mixed Data Types Array:", mixedDataTypes);
console.log("Length of mixedDataTypes array:", mixedDataTypes.length);

// Declare an array with IT companies
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log("IT Companies:", itCompanies);

// Print the number of companies
console.log("Number of IT Companies:", itCompanies.length);

// Print the first, middle, and last company
console.log("First Company:", itCompanies[0]);
console.log("Middle Company:", itCompanies[Math.floor(itCompanies.length / 2)]);
console.log("Last Company:", itCompanies[itCompanies.length - 1]);

// Print out each company
console.log("Each Company:");
itCompanies.forEach((company) => console.log(company));

// Change each company to uppercase and print them
console.log("Uppercase Companies:");
itCompanies.forEach((company) => console.log(company.toUpperCase()));

// Print the array as a sentence
console.log(
  `${itCompanies.slice(0, -1).join(", ")} and ${
    itCompanies[itCompanies.length - 1]
  } are big IT companies.`
);

// Check if a company exists in the array
const companyToCheck = "Google";
if (itCompanies.includes(companyToCheck)) {
  console.log(`${companyToCheck} exists in the IT companies array.`);
} else {
  console.log(`${companyToCheck} is not found.`);
}

// Filter out companies that have more than one 'o' (without filter method)
const companiesWithSingleO = [];
for (let company of itCompanies) {
  let oCount = company.split("").filter((char) => char.toLowerCase() === "o")
    .length;
  if (oCount <= 1) {
    companiesWithSingleO.push(company);
  }
}
console.log("Companies with one or no 'o':", companiesWithSingleO);

// Sort the array using sort()
console.log("Sorted IT Companies:", itCompanies.sort());

// Reverse the array using reverse()
console.log("Reversed IT Companies:", itCompanies.reverse());

// Slice out the first 3 companies
console.log("First 3 Companies:", itCompanies.slice(0, 3));

// Slice out the last 3 companies
console.log("Last 3 Companies:", itCompanies.slice(-3));

// Slice out the middle IT company or companies
const middleIndex = Math.floor(itCompanies.length / 2);
const middleCompanies =
  itCompanies.length % 2 === 0
    ? [itCompanies[middleIndex - 1], itCompanies[middleIndex]]
    : [itCompanies[middleIndex]];
console.log("Middle Company(ies):", middleCompanies);

// Remove the first IT company
itCompanies.shift();
console.log("After Removing First Company:", itCompanies);

// Remove the middle IT company or companies
const midIndex = Math.floor(itCompanies.length / 2);
itCompanies.splice(midIndex, 1);
console.log("After Removing Middle Company:", itCompanies);

// Remove the last IT company
itCompanies.pop();
console.log("After Removing Last Company:", itCompanies);

// Remove all IT companies
itCompanies.length = 0;
console.log("After Removing All Companies:", itCompanies);
