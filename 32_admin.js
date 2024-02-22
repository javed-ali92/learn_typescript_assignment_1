//  Question 32


var current_users = ['John', 'Alice', 'Eric', 'Jane', 'Mike'];
var new_users = ['Jessica', 'John', 'David', 'Sarah', 'Mike'];
for (var i = 0; i < new_users.length; i++) {
    var usernameExists = false;
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log("Username '".concat(new_users[i], "' is not available. Please enter a new username."));
    }
    else {
        console.log("Username '".concat(new_users[i], "' is available."));
    }
}
