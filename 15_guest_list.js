// // Question 15
var guestList = ["Sibtain", "Tayyab", "Mishkat"];
// Printing invitation messages to each person
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
});
// Finding the guest who can't make it
var guestCannotAttend = guestList[1]; // Assuming the second guest cannot attend
// Printing the name of the guest who can't make it
console.log("".concat(guestCannotAttend, " cannot make it to the dinner."));
// Modifying the list by replacing the guest who can't make it
guestList[1] = "Ali"; // Adding Ali as a replacement guest
// Printing the second set of invitation messages
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
});
