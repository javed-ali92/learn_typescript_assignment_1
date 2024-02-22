// Question 43

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]): string[] {
    const modifiedMagicians: string[] = [];
  
    for (let magician of magicians) {
      modifiedMagicians.push(`the Great ${magician}`);
    }
  
    return modifiedMagicians;
  }
  
  const magicians: string[] = ['Magician 1', 'Magician 2', 'Magician 3'];
  
  const modifiedMagicians = make_great([...magicians]);
  show_magicians(magicians);
  show_magicians(modifiedMagicians);

//   In this modified code, we have the same show_magicians() 
//   function that accepts an array of magician names and prints each magician's name 
//   using console.log().

//   We also have the make_great() function, which now creates a new array 
//   modifiedMagicians to store the modified magician names. 
//   Instead of modifying the input array in-place, we iterate over the original array 
//   and push the modified magician names into the modifiedMagicians array.

//   We then create a copy of the magicians array using the spread operator 
//   [...magicians] and pass it as an argument to make_great(). 
//   This ensures that the original array remains unchanged.

//   The make_great() function returns the modifiedMagicians array, 
//   which we store in the modifiedMagicians variable.

//   we call show_magicians() twice: once with the original magicians array 
//   and once with the modifiedMagicians array. This allows us to see that 
//   we have one array of the original names and one array with "the Great" added to each magician's name.

