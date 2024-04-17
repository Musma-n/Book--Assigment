 // Q1
 let multiArray = [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]
 ];
 // Q2
let matrix = [
     [0, 1, 2, 3],
     [1, 0, 1, 2],
     [2, 1, 0, 1]
 ];
 // Q3
 for (let i = 1; i <= 10; i++) {
     console.log(i);
 }
// Q4
let tableNumber = parseInt(prompt("Enter the table number:"));
let tableLength = parseInt(prompt("Enter the length of the table:"));

let tableHTML = "<h2>Multiplication Table of " + tableNumber + "</h2>";

for (let i = 1; i <= tableLength; i++) {
    tableHTML += "<p>" + tableNumber + " x " + i + " = " + (tableNumber * i) + "</p>";
}

document.body.innerHTML = tableHTML;
// Q5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Q6
function generateSeries() {
    // a
    let countingSeries = "Counting: ";
    for (let i = 1; i <= 15; i++) {
        countingSeries += i + ",";
    }

    // b
    let reverseCountingSeries = "Reverse counting: ";
    for (let i = 10; i >= 1; i--) {
        reverseCountingSeries += i + ",";
    }

    // c
    let evenSeries = "Even: ";
    for (let i = 0; i <= 20; i += 2) {
        evenSeries += i + ",";
    }

    // d
    let oddSeries = "Odd: ";
    for (let i = 1; i <= 19; i += 2) {
        oddSeries += i + ",";
    }
    document.write("<h2>" + countingSeries + "</h2>");
    document.write("<h2>" + reverseCountingSeries + "</h2>");
    document.write("<h2>" + evenSeries + "</h2>");
    document.write("<h2>" + oddSeries + "</h2>");
}

generateSeries();
