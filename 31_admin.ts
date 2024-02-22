// Question 31

let usernames: string[] = ['admin', 'Tayyab', 'Sibtain', 'Mishkat', 'Seema'];

if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'admin') {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
  }
}

// Remove all usernames from the array
usernames = [];

if (usernames.length === 0) {
  console.log("We need to find some users!");
}

// In this updated code, we first check if the usernames array is empty using the length property. 
// If it's empty, we print the message "We need to find some users!" 
// indicating that the list of users needs to be populated.

// After that, we have a loop that iterates through each username in the usernames array 
// and prints a specific greeting based on the username. 
// However, if the usernames array is empty at this point, 
// the loop won't execute because there are no usernames to iterate over.

// To demonstrate the scenario where the usernames array is empty, 
// we remove all the usernames from the array using usernames = []. 
// Then we perform the same check for an empty array using the length property, 
// and it will print the message "We need to find some users!".