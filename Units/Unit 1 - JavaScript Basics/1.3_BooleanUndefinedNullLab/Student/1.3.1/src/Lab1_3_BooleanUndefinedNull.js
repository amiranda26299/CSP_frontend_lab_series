/* 
 Lab 003 – Data Types in JavaScript (Boolean, Undefined, Null & Immutability)
*/

// TODO 1: Booleans
// - Create isStudent = true, hasLicense = false
// - Print results of true || false, true && false, !true
// --- TODO 1: Booleans ---
const isStudent = true;
const hasLicense = false;
console.log('isStudent || hasLicense ->', isStudent || hasLicense); // true
console.log('isStudent && hasLicense ->', isStudent && hasLicense); // false
console.log('!true ->', !true); // false

// TODO 2: Short-circuit evaluation
// - Print result of false && (5 > 2)
// - Print result of true || (2 > 5)
// --- TODO 2: Short-circuit evaluation ---
console.log('\n-- Short-circuit evaluation --');
console.log('false && (5 > 2) ->', false && (5 > 2));
console.log('true || (2 > 5) ->', true || (2 > 5));

// TODO 3: Undefined
// - Declare variable grade and print it
// --- TODO 3: Undefined ---
let grade;
console.log('\n-- Undefined --');
console.log('grade ->', grade);

// TODO 4: Null
// - Create city = null, print it
// - Reassign city = "Miami" and print again
// --- TODO 4: Null ---
let city = null;
console.log('\n-- Null and reassignment --');
console.log('city (initial) ->', city);
city = 'Miami';
console.log('city (after reassignment) ->', city);

// TODO 5: Immutability
// - Create word = "hello"
// - Try word[0] = "H", print word
// - Reassign word = "Hello" and print again
// --- TODO 5: Immutability ---
console.log('\n-- Immutability of strings --');
let word = 'hello';
// strings are immutable: attempting to change a character does nothing
word[0] = 'H';
console.log('after attempted mutation word[0] = "H" ->', word);
// reassigning to a new string is allowed
word = 'Hello';
console.log('after reassignment ->', word);

// 🚀 Stretch Goals
// - Check if number is between 10 and 20 using &&
// - Check if city is "Miami" or "Berlin" using ||
