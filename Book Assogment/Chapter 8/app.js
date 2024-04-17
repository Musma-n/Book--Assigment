// Q1

function checkInputType(character) {
  let charCode = character.charCodeAt(0);

  if (charCode >= 48 && charCode <= 57) {
    return "Number";
  } else if (charCode >= 65 && charCode <= 90) {
    return "Uppercase Letter";
  } else if (charCode >= 97 && charCode <= 122) {
    return "Lowercase Letter";
  } else {
    return "Special Character";
  }
}

let input = prompt("Enter a character:");
let result = checkInputType(input);

alert("The input '" + input + "' is a " + result + ".");

// Q2

function displayLargerInteger() {
  let num1 = parseInt(prompt("Enter the first integer:"));
  let num2 = parseInt(prompt("Enter the second integer:"));

  if (num1 === num2) {
    alert("The two integers are equal: " + num1);
  } else {
    let largerInteger = num1 > num2 ? num1 : num2;

    alert("The larger integer is: " + largerInteger);
  }
}

displayLargerInteger();

// Q3

function determineSign(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

let userInput = parseFloat(prompt("Enter a number:"));

let result = determineSign(userInput);
alert("The number you entered is " + result + ".");

// Q4

function isVowel(character) {
  character = character.toLowerCase();

  return ["a", "e", "i", "o", "u"].includes(character);
}

let userInput = prompt("Enter a character:");

if (userInput.length === 1) {
  let result = isVowel(userInput);
  alert("Is the character a vowel? " + result);
} else {
  alert("Please enter only one character.");
}

// Q5

let correctPassword = "password123";

let userInput = prompt("Please enter your password:");

if (userInput === null || userInput === "") {
  alert("Please enter your password.");
} else {
  if (userInput === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
  } else {
    alert("Incorrect password.");
  }
}

// Q6
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good Day";
} else {
  greeting = "Good Evening";
}

// Q7

let time = parseInt(
  prompt("Enter time in 24-hour clock format (e.g., 1900 for 7:00 PM):")
);

let hour = Math.floor(time / 100);
let minute = time % 100;

let convertedTime;

// Implementing cases using if, else if, and else statements
if (hour >= 0 && hour <= 11) {
  convertedTime = hour + ":" + (minute < 10 ? "0" + minute : minute) + " AM";
} else if (hour === 12) {
  convertedTime = "12:" + (minute < 10 ? "0" + minute : minute) + " PM";
} else {
  convertedTime =
    hour - 12 + ":" + (minute < 10 ? "0" + minute : minute) + " PM";
}

// Display the converted time to the user
alert("Converted time in 12-hour clock format: " + convertedTime);
