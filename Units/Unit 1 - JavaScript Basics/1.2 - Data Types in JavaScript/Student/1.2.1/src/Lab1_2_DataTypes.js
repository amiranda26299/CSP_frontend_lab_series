/* 
 Lab 002 – Data Types in JavaScript
*/

// TODO 1: Create variables age (34) and price (12.99), print both
let age = 34;
let price = 12.99;
console.log(age);
console.log(price);
// TODO 1b: Divide "Sandra" by 2 and print result (expect NaN)
console.log("Sandra" / 2);
// TODO 2: Print basic math ops: + - * /
console.log(2 + 2);
console.log(4 - 2);
console.log(3 * 2);
console.log(6 / 2);
// TODO 2b: Use exponentiation (2 ** 3) and modulo (7 % 2)
console.log(2 ** 3);
console.log(7 % 2);
// TODO 3: Assignment operators with score variable
let score = 10;
score += 5;
score -= 3;
score *= 2;
score /= 4;
console.log(score);
// TODO 4: Expressions with operator precedence
console.log(((7+5)/3)-8);
// TODO 5: Strings (single, double, backticks)
let name1="Alex";
let age1=17;
let greeting = `Hello, my name is ${name1} and I am ${age1} years old.`;
console.log(greeting);
// TODO 6: String properties and methods
// - greeting.length
let greet = "Hello There!";
console.log(greet.length);
// - charAt(0), charAt(5), [3]
console.log(greet.charAt(0));
console.log(greet.charAt(5));
console.log(greet[3]);
// - indexOf("sad")
console.log(greet.indexOf("sad"));
// - repeat()
console.log(greet.repeat(2));
// - substring, substr, slice examples
let phrase = "Don't Worry, Be Happy!";
console.log(phrase.substring(0,4));
console.log(phrase.substr(0,3));
console.log(phrase.slice(0,3));
// 🚀 Stretch Goals
// - Even number check using %
// - localeCompare() example
