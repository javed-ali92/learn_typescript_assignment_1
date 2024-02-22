// Question 44


function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    console.log("Bread");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log(item);
    }
    console.log("Bread");
    console.log("----------------------");
}
make_sandwich("Tomato", "Onine", "Cheese");
make_sandwich("Mayo", "Mustard", "Chili Garlic sauce");
make_sandwich("Chiken", "Bacon", "Cucumber", "ketchup");
