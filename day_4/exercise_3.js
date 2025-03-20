// Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  // Prompt the user for the month and year
  let month = prompt("Enter a month:").toLowerCase(); // Convert to lowercase for case insensitivity
  let year = parseInt(prompt("Enter a year:")); // Get year to check leap year for February
  
  // Object storing days in each month
  const monthDays = {
    january: 31,
    february: isLeapYear(year) ? 29 : 28,
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november: 30,
    december: 31
  };
  
  // Get the number of days in the entered month
  if (monthDays[month] !== undefined) {
    let formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);
    console.log(`${formattedMonth} has ${monthDays[month]} days.`);
  } else {
    console.log("Invalid month entered. Please enter a valid month name.");
  }
  