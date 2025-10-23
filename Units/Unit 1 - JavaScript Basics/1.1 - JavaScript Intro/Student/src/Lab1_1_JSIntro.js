/* ===========================================================
   Lab 1.1 – Intro
   Exploring JavaScript syntax, console output, and variables.
   =========================================================== */

// TODO 1: Print your full name with console.log()
console.log("Alejandro Miranda");

// TODO 2: Declare variable favoriteFood, assign "Steak", then reassign "Pizza"
let favoriteFood = "Steak";
favoriteFood = "Pizza";
const favoriteDrink = "Coke";
// TODO 3: Create variable mystery, assign a string, then a number, print type each time
let mystery = "Hello";
console.log("Value: "+ mystery + " Data Type:" + typeof mystery); //string
mystery = 42;
console.log("Value: " + mystery + " Data Type:" + typeof mystery); //number
// TODO 4: Declare const schoolName, try to reassign
const schoolName = "Christopher Columbus High School";
//schoolName = "New School"; // This will cause an error because const cannot be reassigned

// TODO 5: Create three valid camelCase variables and print them
let quarterBack;
let pointGuard;

pointGuard = "Dwyane Wade"; // Initialize

let classRoom = "L12"; // Declare and Initialize

// 🚀 Stretch Goals (optional)
// - Create a variable age and print "I am X years old" using concatenation
// - Repeat using template literals
let age = 17; // Declared and Initialized
console.log("I am " + age + " years old");
console.log(`I am ${age} years old`); // ${} variable goes inside of these
/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab?
   Declaring and Initializing variables using let and const.
   3. Where else could this programming concept be useful?
   Using the right convention and telling the difference when using CamelCase.
   4. Where else could this programming concept be useful?
   Making sure that structure and problem solving is done correctly.
   =========================================================== */


let width = 8;
let height = 5;
let area = width * height;
let perimeter = 2 * (width + height);

console.log ("Area: " + area);
console.log ("Perimeter: " + perimeter);

   