// Question 44

function make_sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    console.log("Bread");
    for (let item of items) {
      console.log(item);
    }
    console.log("Bread");
    console.log("----------------------");
  }
  
  make_sandwich("Tomato", "Onine", "Cheese");
  make_sandwich("Mayo", "Mustard", "Chili Garlic sauce");
  make_sandwich("Chiken", "Bacon", "Cucumber", "ketchup");

//   In this code, we have a function make_sandwich() that uses the rest parameter 
//   syntax (...items: string[]) to collect as many items as the function call provides. 
//   Inside the function, we print a summary of the sandwich being ordered.

//   The function starts by printing "Sandwich Summary:" to indicate the beginning of the summary. 
//   Then, it prints "Bread" to represent the top slice of bread.

//   Next, we iterate over each item using a for...of loop and print each item on a separate line.

//   After printing all the items, we print "Bread" again to represent the bottom slice of bread. 
//   Finally, we print a line of dashes to separate each sandwich summary.

//   We then call the make_sandwich() function three times, each time passing a different number of arguments 
//   representing the items on the sandwich.

