// Calculate the area of a triangle
let base = parseFloat(prompt("Enter base:"));
let height = parseFloat(prompt("Enter height:"));
let triangleArea = 0.5 * base * height;
console.log(`The area of the triangle is ${triangleArea}`);

// Calculate the perimeter of a triangle
let side_a = parseFloat(prompt("Enter side a:"));
let side_b = parseFloat(prompt("Enter side b:"));
let side_c = parseFloat(prompt("Enter side c:"));
let trianglePerimeter = side_a + side_b + side_c;
console.log(`The perimeter of the triangle is ${trianglePerimeter}`);

// Calculate area and perimeter of a rectangle
let length = parseFloat(prompt("Enter length:"));
let width = parseFloat(prompt("Enter width:"));
let rectangleArea = length * width;
let rectanglePerimeter = 2 * (length + width);
console.log(`The area of the rectangle is ${rectangleArea}`);
console.log(`The perimeter of the rectangle is ${rectanglePerimeter}`);

// Calculate the area and circumference of a circle
const pi = 3.14;
let radius = parseFloat(prompt("Enter radius:"));
let circleArea = pi * radius * radius;
let circumference = 2 * pi * radius;
console.log(`The area of the circle is ${circleArea}`);
console.log(`The circumference of the circle is ${circumference}`);

// Calculate the slope, x-intercept, and y-intercept of y = 2x - 2
let slopeEquation = 2;
let yIntercept = -2;
let xIntercept = -yIntercept / slopeEquation;
console.log(`Slope: ${slopeEquation}`);
console.log(`X-intercept: (${xIntercept}, 0)`);
console.log(`Y-intercept: (0, ${yIntercept})`);

// Calculate the slope between (2,2) and (6,10)
let x1 = 2, y1 = 2, x2 = 6, y2 = 10;
let slopePoints = (y2 - y1) / (x2 - x1);
console.log(`Slope between (2,2) and (6,10) is ${slopePoints}`);

// Compare slopes
console.log(`The slopes are ${slopeEquation === slopePoints ? "equal" : "different"}`);

// Find x where y = x^2 + 6x + 9 is 0
for (let x = -10; x <= 10; x++) {
  let y = x ** 2 + 6 * x + 9;
  if (y === 0) {
    console.log(`y is 0 when x = ${x}`);
  }
}

// 9. Calculate weekly pay
let hours = parseFloat(prompt("Enter hours:"));
let ratePerHour = parseFloat(prompt("Enter rate per hour:"));
let weeklyPay = hours * ratePerHour;
console.log(`Your weekly earning is ${weeklyPay}`);

// 10. Check name length
let userName = prompt("Enter your name:");
console.log(userName.length > 7 ? "Your name is long" : "Your name is short");

// 11. Compare first and last name length
let name_first = prompt("Enter your first name:");
let name_last = prompt("Enter your last name:");
console.log(`Your first name, ${name_first} is ${name_first.length > name_last.length ? "longer" : "shorter"} than your family name, ${name_last}`);

// 12. Compare ages
let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} years older than you.`);

// 13. Check driving eligibility
let birthYear = parseInt(prompt("Enter birth year:"));
let ageNow = new Date().getFullYear() - birthYear;
if (ageNow >= 18) {
  console.log(`You are ${ageNow}. You are old enough to drive.`);
} else {
  console.log(`You are ${ageNow}. You will be allowed to drive after ${18 - ageNow} years.`);
}

// 14. Calculate total seconds a person can live (assuming 100 years)
let yearsLived = parseInt(prompt("Enter number of years you live:"));
let totalSeconds = yearsLived * 365 * 24 * 60 * 60;
console.log(`You lived ${totalSeconds} seconds.`);

// 15. Human-readable time format
let now = new Date();
let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, '0');
let day = String(now.getDate()).padStart(2, '0');
let hour = String(now.getHours()).padStart(2, '0');
let minute = String(now.getMinutes()).padStart(2, '0');

console.log(`${year}-${month}-${day} ${hour}:${minute}`); 
console.log(`${day}-${month}-${year} ${hour}:${minute}`); 
console.log(`${day}/${month}/${year} ${hour}:${minute}`)