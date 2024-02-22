//  Question 41

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  const magicians: string[] = ['Magician 1', 'Magician 2', 'Magician 3'];
  
  show_magicians(magicians);

//   In this code, we have a function show_magicians() that accepts an array of magician names as a parameter. 
//   Inside the function, we use a for...of loop to iterate over each magician in the array. For each magician, 
//   we use console.log() to print their name.

//   We then declare an array magicians containing the names of the magicians.

//   Finally, we call the show_magicians() function and pass the magicians array as an argument. 
//   This will invoke the function and print the name of each magician in the array.