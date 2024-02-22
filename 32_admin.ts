//  Question 32

let current_users: string[] = ['John', 'Alice', 'Eric', 'Jane', 'Mike'];
let new_users: string[] = ['Jessica', 'John', 'David', 'Sarah', 'Mike'];

for (let i = 0; i < new_users.length; i++) {
  let usernameExists = false;
  for (let j = 0; j < current_users.length; j++) {
    if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
      usernameExists = true;
      break;
    }
  }
  if (usernameExists) {
    console.log(`Username '${new_users[i]}' is not available. Please enter a new username.`);
  } else {
    console.log(`Username '${new_users[i]}' is available.`);
  }
}

// In this code, we have two arrays: current_users and new_users. 
// The current_users array contains the existing usernames, 
// while the new_users array contains the new usernames to be checked.

// We use a nested for loop to iterate through each username in the new_users array and compare it 
// with each username in the current_users array. 
// The comparison is case-insensitive, as we convert both usernames to lowercase using the toLowerCase() method 
// before comparing them.

// If a match is found (indicating that the username already exists), 
// we set the usernameExists flag to true and break out of the inner loop. 
// Then, we print a message indicating that the username is not available 
// and the person needs to enter a new username.

// If no match is found (indicating that the username is available), 
// we keep the usernameExists flag as false and print a message indicating that the username is available.

// The output will be as follows:

// "Username 'Jessica' is available."
// "Username 'John' is not available. Please enter a new username."
// "Username 'David' is available."
// "Username 'Sarah' is available."
// "Username 'Mike' is not available. Please enter a new username."