// Question 17
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
// Informing about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Adding new guests to the list
guestList.unshift("Suhail"); // Adding Suhail at the beginning
guestList.splice(Math.ceil(guestList.length / 2), 0, "Rashid"); // Adding Rashid in the middle
guestList.push("Seema"); // Adding Seema at the end
// Printing the final set of invitation messages
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
});
// Informing that only two people can be invited
console.log("Apologies, due to unforeseen circumstances, we can only invite two people for dinner.");
// Removing guests until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Printing invitation messages to the two remaining guests
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
});
// Removing the last two names from the list
guestList.pop();
guestList.pop();
// Printing the final empty list
console.log("Guest list: ".concat(guestList));
