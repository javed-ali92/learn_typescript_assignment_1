//  Question 42

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = `the Great ${magicians[i]}`;
    }
  }
  
  const magicians: string[] = ['Magician 1', 'Magician 2', 'Magician 3'];
  
  make_great(magicians);
  show_magicians(magicians);

//   In this modified code, we have the show_magicians() function that remains the same as before. 
//   It accepts an array of magician names and prints each magician's name using console.log().

//   We then introduce a new function called make_great(). 
//   This function accepts the array of magician names and modifies it by adding the phrase 
//   "the Great" to each magician's name. 
//   We achieve this by iterating over the array using a for loop and modifying each element in-place.

//   Next, we declare the magicians array containing the initial magician names.

//   Finally, we call the make_great() function, passing the magicians array as an argument. 
//   This modifies the array by adding "the Great" to each magician's name. 
//   Then, we call the show_magicians() function to print the modified list of magicians.
