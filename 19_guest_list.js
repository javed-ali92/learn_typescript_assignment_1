// Question 19

var guestList = ["Sibtain", "Tayyab", "Mishkat", "Suhail", "Rashid", "Seema",];

// Printing invitation messages to each person
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner."));

});

// Printing the number of people invited to dinner
console.log("Number of people invited to dinner: ".concat(guestList.length));
