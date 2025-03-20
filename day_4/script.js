// Task 1: Check if the user is old enough to drive
let age = parseInt(prompt("Enter your age:"));

if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  console.log(`You are left with ${18 - age} years to drive.`);
}

// Task 2: Compare myAge and yourAge
let myAge = 25; // Change this to your actual age
let yourAge = parseInt(prompt("Enter your age:"));

if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} years older than me.`);
} else if (yourAge < myAge) {
  console.log(`I am ${myAge - yourAge} years older than you.`);
} else {
  console.log("We are the same age.");
}

// Task 3: Compare a and b using if-else
let a = 4;
let b = 3;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}

// Task 4: Compare a and b using a ternary operator
console.log(a > b ? "a is greater than b" : "a is less than b");

// Task 5: Check if a number is even or odd
let number = parseInt(prompt("Enter a number:"));

if (number % 2 === 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}
