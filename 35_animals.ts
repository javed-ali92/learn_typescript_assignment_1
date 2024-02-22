// Question 35

let animals: string[] = ['Dog', 'Cat', 'Rabbit'];

for (let i = 0; i < animals.length; i++) {
  console.log(`A ${animals[i]} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");

// In this code, we have an array animals that contains the names of three different animals: 
// 'Dog', 'Cat', and 'Rabbit'.

// We use a for loop to iterate through each animal in the array. 
// Inside the loop, we use console.log() to print a statement about each animal 
// using string interpolation (${animals[i]}). The statement template is "A [animal name] would make a great pet."

// After the loop, we have a separate console.log() statement that prints the final sentence 
// "Any of these animals would make a great pet!" outside of the loop.