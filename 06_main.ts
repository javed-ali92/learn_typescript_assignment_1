// Question 6

let personName:  String = "\n\t Javed Ali \t\n";
console.log(personName);
let stripped:  string = personName.replace(/[\t]/g, "").trim();
console.log(stripped);

// In this code, we have a personName variable that stores a person's name 
// with whitespace characters (a combination of \t and \n) at the beginning and end of the name.

// We then use the trim() method on the personName string to replace() whitespace  
// from both ends of the string and store the result in the stripped variable.

