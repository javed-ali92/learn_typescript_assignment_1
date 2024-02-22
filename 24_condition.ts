// Question 24

let string1: string = 'hello';
let string2: string = 'world';
let number1: number = 10;
let number2: number = 5;
let array: number[] = [1, 2, 3, 4, 5];

// Tests for equality and inequality with strings
console.log("Is string1 == string2? I predict false.");
console.log(string1 == string2);

console.log("Is string1 != string2? I predict true.");
console.log(string1 != string2);

// Tests using the lowercase function
console.log("Is string1 lowercase 'hello'? I predict true.");
console.log(string1.toLowerCase() == 'hello');

console.log("Is string2 lowercase 'WORLD'? I predict false.");
console.log(string2.toLowerCase() == 'WORLD');

// Numerical tests
console.log("Is number1 > number2? I predict true.");
console.log(number1 > number2);

console.log("Is number1 < number2? I predict false.");
console.log(number1 < number2);

console.log("Is number1 >= number2? I predict true.");
console.log(number1 >= number2);

console.log("Is number1 <= number2? I predict false.");
console.log(number1 <= number2);

// Tests using "and" and "or" operators
console.log("Is number1 > 5 and number2 < 10? I predict true.");
console.log(number1 > 5 && number2 < 10);

console.log("Is number1 > 10 or number2 < 5? I predict false.");
console.log(number1 > 10 || number2 < 5);


// We added tests for equality and inequality with strings,
// tests using the toLowerCase() function to compare lowercase strings,
// numerical tests involving equality, inequality, 
// greater than, less than, greater than or equal to, 
// and less than or equal to comparisons.

