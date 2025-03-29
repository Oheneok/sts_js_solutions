const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// iterate 0 to 10 using the for loop
console.log("For loop 0 to 10:");
for(i=0; i<=10; i++) {
    console.log(i);
}

// same task but with while loop
console.log("while loop 0 to 10:");
let k = 0;
while (k <= 10){
    console.log(k);
    k++;
}

// with do while loop
console.log("Do while loop 0 to 10:");
d = 0;
do {
  console.log(d);
  d++;
} while (d <= 10);

// iterate 10 to 0 using for loop
console.log("For loop 10 to 0:");
for (i = 10; i >= 0; i--){
    console.log(i);
}

// same task with while loop
console.log("while loop 10 to 0:");
let l =10;
while (l >= 0) {
    console.log(l);
    l--;
}

// same task with do while
console.log("Do while loop 10 to 0:");
g = 10
do {
    console.log(g);
    g--;
} while( g >= 0);


// Iterate 0 to n using for loop
let n = 5;
console.log(`\nFor loop 0 to ${n}:`);
for (let i = 0; i <= n; i++) {
  console.log(i);
}

// Pattern #
console.log("\nPattern #:");
for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i));
}

// Multiplication pattern
console.log("\nMultiplication pattern:");
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

// i, i^2, i^3 table
console.log("\n i    i^2   i^3");
for (let i = 0; i <= 10; i++) {
  console.log(`${i}    ${i ** 2}    ${i ** 3}`);
}

// Print only even numbers from 0 to 100
console.log("\nEven numbers from 0 to 100:");
for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}

// Print only odd numbers from 0 to 100
console.log("\nOdd numbers from 0 to 100:");
for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}

// Print only prime numbers from 0 to 100
console.log("\nPrime numbers from 0 to 100:");
for (let num = 2; num <= 100; num++) {
  let isPrime = true;
  for (let div = 2; div * div <= num; div++) {
    if (num % div === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(num);
}

// Sum of all numbers from 0 to 100
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`\nThe sum of all numbers from 0 to 100 is ${sum}.`);

// Sum of all evens and all odds from 0 to 100
let sumEven = 0,
  sumOdd = 0;
for (let i = 0; i <= 100; i++) {
  i % 2 === 0 ? (sumEven += i) : (sumOdd += i);
}
console.log(
  `\nThe sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`
);
console.log(`[${sumEven}, ${sumOdd}]`);

// Generate an array of 5 random numbers
console.log("\nArray of 5 random numbers:");
let randomNumbers = Array.from({ length: 5 }, () =>
  Math.floor(Math.random() * 100)
);
console.log(randomNumbers);

// Generate an array of 5 unique random numbers
console.log("\nArray of 5 unique random numbers:");
let uniqueRandomNumbers = [];
while (uniqueRandomNumbers.length < 5) {
  let num = Math.floor(Math.random() * 100);
  if (!uniqueRandomNumbers.includes(num)) {
    uniqueRandomNumbers.push(num);
  }
}
console.log(uniqueRandomNumbers);

// Generate a 6-character random ID
console.log("\nSix-character random ID:");
const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let randomID = "";
for (let i = 0; i < 6; i++) {
  randomID += chars.charAt(Math.floor(Math.random() * chars.length));
}
console.log(randomID);
