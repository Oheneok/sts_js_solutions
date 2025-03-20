// Task 1: Grade Calculator
let score = parseInt(prompt("Enter your score:"));

if (score >= 80 && score <= 100) {
  console.log("Your grade is A");
} else if (score >= 70 && score <= 79) {
  console.log("Your grade is B");
} else if (score >= 60 && score <= 69) {
  console.log("Your grade is C");
} else if (score >= 50 && score <= 59) {
  console.log("Your grade is D");
} else if (score >= 0 && score <= 49) {
  console.log("Your grade is F");
} else {
  console.log("Invalid score. Please enter a number between 0 and 100.");
}

// Task 2: Check the season based on the month
let month = prompt("Enter the month:").toLowerCase(); 

if (["september", "october", "november"].includes(month)) {
  console.log("The season is Autumn.");
} else if (["december", "january", "february"].includes(month)) {
  console.log("The season is Winter.");
} else if (["march", "april", "may"].includes(month)) {
  console.log("The season is Spring.");
} else if (["june", "july", "august"].includes(month)) {
  console.log("The season is Summer.");
} else {
  console.log("Invalid month entered.");
}

// Task 3: Check if the day is a weekend or working day
let day = prompt("What is the day today?").toLowerCase(); 

if (["saturday", "sunday"].includes(day)) {
  console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} is a weekend.`);
} else if (["monday", "tuesday", "wednesday", "thursday", "friday"].includes(day)) {
  console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} is a working day.`);
} else {
  console.log("Invalid day entered.");
}
