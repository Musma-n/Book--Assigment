// Q 1 , Q2
let studentNames = [];

// Q 3
let stringsArray = ["orange", "white", "blue", "black", "gray"];

// Q 4
let numbers = [1, 2, 3, 4, 5];

// Add more numbers
numbers.push(6);
numbers.push(7);

console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7]

// Q 5
let booleanArray = [true, false, true, false];

// Q 6
let mixedArray = [1, "Hello", true, [1, 2, 3], { name: "Ali", age: 35 }];

console.log(mixedArray);

// Q 7
let qualifications = [
  "SSC",
  "HSC",
  "BSC",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PHD",
];

let list = "<h2>Qualifications:</h2><ul>";
for (let i = 0; i < qualifications.length; i++) {
  list += "<li>" + qualifications[i] + "</li>";
}
list += "</ul>";

document.body.innerHTML = list;

// Q 8

let studentNames = ["Michael", "John", "Tony"];

let scores = [320, 230, 480];

let totalMarks = 500;
let percentages = [];
for (var i = 0; i < scores.length; i++) {
  var percentage = (scores[i] / totalMarks) * 100;
  percentages.push(percentage);
}

for (var i = 0; i < studentNames.length; i++) {
  console.log(
    "Score of " +
      studentNames[i] +
      " is " +
      scores[i] +
      ". Percentage: " +
      percentages[i] +
      "%"
  );
}

// Q 9
let colors = ["Red", "Green", "Blue"];

document.write("<b>Initial Array:</b> " + colors.join(", ") + "<br>");

// A

let colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddAtBeginning);

document.write(
  "<b>Array after adding color to the beginning:</b> " +
    colors.join(", ") +
    "<br>"
);

// B
let colorToAddAtEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddAtEnd);

document.write(
  "<b>Array after adding color to the end:</b> " + colors.join(", ") + "<br>"
);
// C

let colorsToAdd = prompt(
  "Enter two or more colors to add to the beginning (comma-separated):"
).split(",");
colors.unshift(...colorsToAdd);

document.write(
  "<b>Array after adding multiple colors to the beginning:</b> " +
    colors.join(", ") +
    "<br>"
);

// D
colors.shift();

document.write(
  "<b>Array after deleting the first color:</b> " + colors.join(", ") + "<br>"
);

// E
colors.pop();

document.write(
  "<b>Array after deleting the last color:</b> " + colors.join(", ") + "<br>"
);

// F
var indexToAddColor = parseInt(
  prompt("Enter the index where you want to add a color:")
);
var colorToAddAtIndex = prompt(
  "Enter the color to add at index " + indexToAddColor + ":"
);
colors.splice(indexToAddColor, 0, colorToAddAtIndex);

document.write(
  "<b>Array after adding color at index " +
    indexToAddColor +
    ":</b> " +
    colors.join(", ") +
    "<br>"
);

// G
var indexToDeleteFrom = parseInt(
  prompt("Enter the index from where you want to delete color(s):")
);
var numberOfColorsToDelete = parseInt(
  prompt("Enter the number of colors you want to delete:")
);
colors.splice(indexToDeleteFrom, numberOfColorsToDelete);

document.write(
  "<b>Array after deleting " +
    numberOfColorsToDelete +
    " color(s) from index " +
    indexToDeleteFrom +
    ":</b> " +
    colors.join(", ") +
    "<br>"
);

// Q10

let scores = [320, 230, 480, 120];

scores.sort(function (a, b) {
  return a - b;
});

console.log("Scores of students: " + scores.join(", "));

// Q 11

let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

let selectedCities = [];

selectedCities.push(cities[2]);
selectedCities.push(cities[3]);

console.log("Selected cities list:");
for (let i = 0; i < selectedCities.length; i++) {
  console.log(selectedCities[i]);
}

// Q 12
var arr = ["this", "is", " my ", " cat"];
var singleString = arr.join("");

console.log(singleString);
