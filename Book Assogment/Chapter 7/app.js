// Q 1



let cityName = prompt("Please enter the name of your city:");


if (cityName.toLowerCase() === "karachi") {
    
    console.log("Welcome to the city of lights");
} else {
   
    console.log("Welcome!");
}


//Q 2




let gender = prompt("Please enter your gender (male/female):");


gender = gender.toLowerCase();


if (gender === "male") {
    console.log("Good Morning Sir.");
} else if (gender === "female") {
    console.log("Good Morning Ma'am.");
} else {
    console.log("Invalid input. Please enter either 'male' or 'female'.");
}



// Q 3




let color = prompt("Enter the color of the road traffic signal (red, yellow, green):");


color = color.toLowerCase();


switch (color) {
    case "red":
        console.log("Vehicles must stop.");
        break;
    case "yellow":
        console.log("Vehicles should get ready to move.");
        break;
    case "green":
        console.log("Vehicles can move now.");
        break;
    default:
        console.log("Invalid color. Please enter 'red', 'yellow', or 'green'.");
}


// Q 4




let remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));


if (remainingFuel < 0.25) {
    console.log("Please refill the fuel in your car.");
} else {
    console.log("You have enough fuel.");
}



// Q 5


// A
let a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}

// B
let b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

// C
let c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

// D
let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

// E
if (true){
    alert("True");
}
if (false){
    alert("False");
}


// Q 6



function calculateGrade() {
  
    let subject1Marks = parseFloat(document.getElementById('subject1').value);
    let subject2Marks = parseFloat(document.getElementById('subject2').value);
    let subject3Marks = parseFloat(document.getElementById('subject3').value);
    let totalMarks = parseFloat(document.getElementById('totalMarks').value);
    
    let totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
    let percentage = (totalObtainedMarks / totalMarks) * 100;

  
    let grade, remarks;
    if (percentage >= 90) {
        grade = 'A+';
        remarks = 'Excellent';
    } else if (percentage >= 80) {
        grade = 'A';
        remarks = 'Very Good';
    } else if (percentage >= 70) {
        grade = 'B';
        remarks = 'Good';
    } else if (percentage >= 60) {
        grade = 'C';
        remarks = 'Satisfactory';
    } else if (percentage >= 50) {
        grade = 'D';
        remarks = 'Average';
    } else {
        grade = 'F';
        remarks = 'Fail';
    }

    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Result</h2>
        <p>Total Marks: ${totalMarks}</p>
        <p>Marks Obtained: ${totalObtainedMarks}</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
        <p>Grade: ${grade}</p>
        <p>Remarks: ${remarks}</p>
    `;
}

// Q 7



let secretNumber = Math.floor(Math.random() * 10) + 1; 

let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));


if (userGuess === secretNumber) {
    console.log("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    console.log("Close enough to the correct answer");
} else {
    console.log("Sorry, wrong guess. The secret number was " + secretNumber);
}



// Q 8



let number = parseInt(prompt("Enter a number:"));


if (number % 3 === 0) {
    console.log(number + " is divisible by 3.");
} else {
    console.log(number + " is not divisible by 3.");
}


// Q 9



let number2 = parseInt(prompt("Enter a number:"));


if (number2 % 2 === 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number2 + " is an odd number.");
}



// Q 10




let temperature = parseInt(prompt("Enter the temperature:"));


if (temperature > 40) {
    console.log("It is too hot outside.");
} else if (temperature > 30) {
    console.log("The Weather today is Normal.");
} else if (temperature > 20) {
    console.log("Today’s Weather is cool.");
} else if (temperature > 10) {
    console.log("OMG! Today’s weather is so Cool.");
} else {
    console.log("It's freezing outside!");
}


// Q 11




let num1 = parseFloat(prompt("Enter the first number:"));


let num2 = parseFloat(prompt("Enter the second number:"));


let operation = prompt("Enter the operation (+, -, *, /, %):");


let result;

if (operation === '+') {
    result = num1 + num2;
} else if (operation === '-') {
    result = num1 - num2;
} else if (operation === '*') {
    result = num1 * num2;
} else if (operation === '/') {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        console.log("Error: Division by zero is not allowed.");
    }
} else if (operation === '%') {
    result = num1 % num2;
} else {
    console.log("Error: Invalid operation.");
}


if (result !== undefined) {
    console.log("Result: " + result);
}