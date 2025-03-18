// Get current date and time
let now = new Date();

// Extract date and time components
let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, '0'); // Ensure two-digit month
let day = String(now.getDate()).padStart(2, '0'); // Ensure two-digit day
let hour = String(now.getHours()).padStart(2, '0'); // Ensure two-digit hour
let minute = String(now.getMinutes()).padStart(2, '0'); // Ensure two-digit minute

// Format the output
let formattedTime = `${year}-${month}-${day} ${hour}:${minute}`;

console.log(formattedTime);
