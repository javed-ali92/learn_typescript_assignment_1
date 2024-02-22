// Question 28

let age: number = 30;

if (age < 2) {
  console.log("The person is a baby.");
}
 else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
}
 else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
}
 else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
}
 else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
}
 else if (age >= 65) {
  console.log("The person is an elder.");
}



// In this code, we have a variable age that is initially assigned a value of 30. 
// We use an if-else chain to check the value of age and determine the stage of life based on the given conditions. 
// Depending on the value of age, the program will print the appropriate message 
// indicating the person's stage of life.

// In this example, since age is 30, the program will print the message "The person is an adult."