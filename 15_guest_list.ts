// // Question 15



let guestList: string[] = ["Sibtain", "Tayyab", "Mishkat"];

// Printing invitation messages to each person
guestList.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner.`);
});

// Finding the guest who can't make it
let guestCannotAttend: string = guestList[1]; // Assuming the second guest cannot attend

// Printing the name of the guest who can't make it
console.log(`${guestCannotAttend} cannot make it to the dinner.`);

// Modifying the list by replacing the guest who can't make it
guestList[1] = "Ali"; // Adding Ali as a replacement guest

// Printing the second set of invitation messages
guestList.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner.`);
});