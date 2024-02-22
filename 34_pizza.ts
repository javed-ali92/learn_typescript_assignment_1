//  Question 34

let pizzas: string[] = ['Veggie', 'BBQ Chicken', 'Tandoori Tikka'];

for (let i = 0; i < pizzas.length; i++) {
  console.log(`I like ${pizzas[i]} pizza.`);
}

console.log("I really love pizza!");

// In this code, we have an array pizzas that contains the names of three favorite pizza types.

// We use a for loop to iterate through each pizza in the array. 
// Inside the loop, we use console.log() to print a sentence 
// that includes the name of each pizza using string interpolation (${pizzas[i]}). 
// The sentence template is "I like [pizza name] pizza."

// After the loop, we have a separate console.log() 
// statement that prints the final sentence "I really love pizza!" outside of the loop.
