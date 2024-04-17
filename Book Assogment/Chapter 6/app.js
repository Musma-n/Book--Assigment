//  // Q1
  let number = prompt("Enter a number:");

  number = parseFloat(number);

  let square = number * number;
  let cube = number * number * number;
  let squareRoot = Math.sqrt(number);
  let cubeRoot = Math.cbrt(number);

  document.write("<h2>The value of a is : " + number + "</h2>");
  document.write("<p>Square: " + square + "</p>");
  document.write("<p>Cube: " + cube + "</p>");
  document.write("<p>Square Root: " + squareRoot + "</p>");
  document.write("<p>Cube Root: " + cubeRoot + "</p>");

 // Q2
  let a = 2, b = 1;
  let result = --a - --b + ++b + b--;

  console.log("a:", a); 
  console.log("b:", b); 
  console.log("result:", result);

 // Q3
  let userName = prompt("Please enter your name:");

  alert("Hello, " + userName );

 //  Q4
 let number = prompt("Enter a number:");

 number = parseInt(number) || 5;

 document.write("<h3>Multiplication Table of " + number + ":</h3>");
 for (var i = 1; i <= 10; i++) {
     document.write(number + " × " + i + " = " + (number * i) + "<br>");
 }
// Q5

let totalMarksPerSubject = 100;

let subject1 = prompt("Enter the name of the first subject:");
let subject2 = prompt("Enter the name of the second subject:");
let subject3 = prompt("Enter the name of the third subject:");

let marksSubject1 = parseFloat(prompt("Enter the obtained marks for " + subject1 + ":"));

let marksSubject2 = parseFloat(prompt("Enter the obtained marks for " + subject2 + ":"));
let marksSubject3 = parseFloat(prompt("Enter the obtained marks for " + subject3 + ":"));


let totalMarks = marksSubject1 + marksSubject2 + marksSubject3;
let percentage = (totalMarks / (3 * totalMarksPerSubject)) * 100;

document.write("<h2>Result:</h2>");
document.write(  subject1 + ": Obtained Marks: " + marksSubject1 + "<br>");
document.write( subject2 + ": Obtained Marks: " + marksSubject2 +"<br>" );
document.write( subject3 + ": Obtained Marks: " + marksSubject3 +"<br>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");