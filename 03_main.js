// Question 3
var Myname = "Javed";
console.log(Myname.toLowerCase());
console.log(Myname.toUpperCase());
console.log(Myname.replace(/([a-z])([A-Z])/g, '$1 $2'));
// In this code, we first declare a variable personName and assign it a person's name, in this case, "Javed".
// We then use console.log() to print the name in lowercase, uppercase, and titlecase.
// To convert the name to lowercase, we use the toLowerCase() method on the personName string.
// To convert the name to uppercase, we use the toUpperCase() method on the personName string.
// For titlecase conversion, we define a helper function toTitleCase() that takes a name as an argument. 
// Inside the function, we first convert the name to lowercase using toLowerCase(). 
// Then, we use a regular expression with replace() to match the first character of each word 
// and convert it to uppercase using an arrow function.
// Finally, we call toTitleCase() to convert the personName to titlecase and print the result.
