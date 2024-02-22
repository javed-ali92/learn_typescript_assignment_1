//  Question 33

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  let ordinalEnding = '';

  if (number === 1) {
    ordinalEnding = 'st';
  } else if (number === 2) {
    ordinalEnding = 'nd';
  } else if (number === 3) {
    ordinalEnding = 'rd';
  } else {
    ordinalEnding = 'th';
  }

  console.log(`${number}${ordinalEnding}`);
}

// In this code, we have an array numbers that contains the numbers 1 through 9. 
// We use a for loop to iterate through each number in the array.

// Inside the loop, we declare a variable ordinalEnding which will store the proper ordinal ending 
// for each number. We use an if-else chain to determine the correct ordinal ending 
// based on the value of the number.

// If the number is 1, we set ordinalEnding to 'st'. 
// If the number is 2, we set ordinalEnding to 'nd'. 
// If the number is 3, we set ordinalEnding to 'rd'. 
// For all other numbers, we set ordinalEnding to 'th'.

// Finally, we use console.log() to print each number followed by its respective ordinal ending. 