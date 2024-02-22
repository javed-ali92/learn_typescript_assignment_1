//  Question 37

function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`The size of the shirt is ${size} and the message printed on it is "${message}".`);
  }
  
  make_shirt(); // Large shirt with default message
  make_shirt('medium'); // Medium shirt with default message
  make_shirt('small', 'Hello, World!'); // Custom-sized shirt with a different message

//   In this modified code, the make_shirt() function has been updated to have default parameters. 
//   The size parameter is set to 'large' by default, and the message parameter is set to 
//   'I love TypeScript' by default.

//   Inside the function, we use console.log() to print a sentence that summarizes the size of the shirt 
//   and the message printed on it, similar to the previous implementation.

//   We then call the make_shirt() function multiple times to create different shirts:

//   The first call make_shirt() creates a large shirt with the default message.
// The second call make_shirt('medium') creates a medium shirt with the default message.
// The third call make_shirt('small', 'Hello, World!') creates a custom-sized shirt (small) with a different message.