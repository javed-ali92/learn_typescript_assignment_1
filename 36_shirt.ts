//  Question 36

function make_shirt(size: string, message: string): void {
    console.log(`The size of the shirt is ${size} and the message printed on it is "${message}".`);
  }
  
  make_shirt('L', 'Hello, World!');

//   In this code, we have a function make_shirt() that accepts two parameters: 
//   size and message. The function is defined with the void return type, 
//   indicating that it doesn't return any value.

//   Inside the function, we use console.log() to print a sentence that summarizes the size of the shirt 
//   and the message printed on it. We use string interpolation to include the values of size 
//   and message in the sentence.

//   Finally, we call the make_shirt() function with the arguments 'L' for the size 
//   and 'Hello, World!' for the message. This will invoke the function and print the summary of the shirt.