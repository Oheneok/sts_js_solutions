// Importing external files
import countries from "./countries.js";
import webTechs from "./web_techs.js";

console.log("Countries:", countries);
console.log("Web Technologies:", webTechs);

//  Remove punctuation and count words
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.replace(/[.,]/g, "").split(" "); // Removing punctuation & splitting into array
console.log("Words:", words);
console.log("Number of words:", words.length);

//  Shopping Cart Operations
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// Add 'Meat' to the beginning if not already added
if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}

// Add 'Sugar' to the end if not already added
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}

// Remove 'Honey' if allergic
const allergicToHoney = true; // Change to false if not allergic
if (allergicToHoney) {
  let index = shoppingCart.indexOf("Honey");
  if (index !== -1) {
    shoppingCart.splice(index, 1);
  }
}

// Modify 'Tea' to 'Green Tea'
let teaIndex = shoppingCart.indexOf("Tea");
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = "Green Tea";
}

console.log("Updated Shopping Cart:", shoppingCart);

// ✅ Check and modify 'countries' array
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
}

// 
// check and modify 'webTechs' array
if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocessor.");
} else {
  webTechs.push("Sass");
  console.log("Updated Web Technologies:", webTechs);
}

//  Concatenating front-end and back-end technologies
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log("FullStack Technologies:", fullStack);
