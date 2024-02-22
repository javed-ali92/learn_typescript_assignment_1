// Question 26

var alien_color = 'green';

// Version that runs the if block
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}

// Version that runs the else block
alien_color = 'red';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}

// In this code, we have a variable alien_color that is initially assigned a value of 'green'. 
// We use an if-else chain to check the value of alien_color. If the value is 'green', 
// the program will print the message "Congratulations! You just earned 5 points for shooting the alien.". 
// If the value is not 'green', the program will print the message 
// "Congratulations! You just earned 10 points for shooting the alien.".
// In the second version, we change the value of alien_color to 'red'. 
// This time, the if condition will not be true, so the program will execute the else block and print the message 
// "Congratulations! You just earned 10 points for shooting the alien.".
