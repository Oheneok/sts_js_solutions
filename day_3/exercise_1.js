/* checking different data types */
let firstName = "Ohene";
let lastName = "Oduro";
let country = "Ghana";
let age = 52;
let isMarried = false;
let year = 2025;

console.log(typeof(firstName))
console.log(typeof(age))
console.log(typeof(isMarried))

/* check if type of '10' is equal to 10 */
console.log(typeof '10' === typeof 10)

/* Check if parseInt('9.8') is equal to 10 */
console.log(parseInt('9.8') === 10)

// Truthy values
console.log(Boolean(1));       
console.log(Boolean("Hello")); 
console.log(Boolean([]));      

// Falsy values
console.log(Boolean(0));      
console.log(Boolean(""));     
console.log(Boolean(null));    

// Comparison expressions
console.log(4>3)
console.log(4 >= 3);  
console.log(4 < 3);   
console.log(4 <= 3);  
console.log(4 == 4);  
console.log(4 === 4); 
console.log(4 != 4);  
console.log(4 !== 4); 
console.log(4 != '4');  
console.log(4 == '4');  
console.log(4 === '4');

// Length comparison of "python" and "jargon"
console.log("python".length);
console.log("jargon".length); 
console.log("python".length !== "jargon".length);

// Logical operators
console.log(4 > 3 && 10 < 12); 
console.log(4 > 3 && 10 > 12); 
console.log(4 > 3 || 10 < 12); 
console.log(4 > 3 || 10 > 12); 
console.log(!(4 > 3));         
console.log(!(4 < 3));        
console.log(!false);           
console.log(!(4 > 3 && 10 < 12)); 
console.log(!(4 > 3 && 10 > 12)); 
console.log(!(4 === '4')); 

// There is no 'on' in both dragon and python
console.log(!("dragon".includes("on") && "python".includes("on")))

// Date object tasks
const now = new Date();

console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getMonth() + 1);
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());

//number of seconds elapsed from January 1, 1970 till now
console.log(Math.floor(now.getTime() / 1000));



