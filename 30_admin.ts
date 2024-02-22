//  Question 30

let usernames: string[] = ['admin', 'Tayyab', 'Sibtain', 'Mishkat', 'Seema'];

for (let i = 0; i < usernames.length; i++) {
  if (usernames[i] === 'admin') {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
  }
}

// In this code, we have an array usernames that contains five or more usernames, 
// including the name 'admin'. We use a for loop to iterate through each username in the array. 
// Inside the loop, we use an if statement to check if the current username is 'admin'. 
// If it is, we print a special greeting for the admin user. 
// Otherwise, we print a generic greeting for all other users.

// The output will be as follows:

// "Hello admin, would you like to see a status report?" (for the username 'admin')
// "Hello tayyab, thank you for logging in again." (for the username 'Tayyab')
// "Hello Sibtain, thank you for logging in again." (for the username 'Sibtain')
// "Hello Mishkat, thank you for logging in again." (for the username 'Mishkat')
// "Hello Seema, thank you for logging in again." (for the username 'Seema')