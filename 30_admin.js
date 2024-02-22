//  Question 30


var usernames = ['admin', 'Tayyab', 'Sibtain', 'Mishkat', 'Seema'];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
    }
}
