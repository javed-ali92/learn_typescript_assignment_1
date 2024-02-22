//  Question 29

let favorite_fruits: string[] = ['banana', 'apple', 'mango'];

if (favorite_fruits.indexOf('banana') !== -1) {
  console.log("You really like bananas!");
}

if (favorite_fruits.indexOf('apple') !== -1) {
  console.log("You really like apples!");
}

if (favorite_fruits.indexOf('mango') !== -1) {
  console.log("You really like mangoes!");
}

if (favorite_fruits.indexOf('orange') !== -1) {
  console.log("You really like oranges!");
}

if (favorite_fruits.indexOf('strawberry') !== -1) {
  console.log("You really like strawberries!");
}

// In this code, we have an array favorite_fruits that contains three favorite fruits: 
// 'banana', 'apple', and 'mango'. We use independent 
// if statements to check whether each fruit is present 
// in the array using the indexOf method. If the index returned by indexOf is not -1, 
// it means the fruit exists in the array, and the corresponding message is printed.

// In this example, since 'banana', 'apple', and 'mango' are all present 
// in the favorite_fruits array, the program will print the following messages:

// "You really like bananas!"
// "You really like apples!"
// "You really like mangoes!"