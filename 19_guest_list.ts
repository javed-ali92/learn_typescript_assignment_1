// Question 19

let guestList: string[] = ["Sibtain", "Tayyab",  "Mishkat", "Suhail", "Rashid", "Seema", ];

// Printing invitation messages to each person
guestList.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner.`);
});

// Printing the number of people invited to dinner
console.log(`Number of people invited to dinner: ${guestList.length}`);