//  Question 37


function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The size of the shirt is ".concat(size, " and the message printed on it is \"").concat(message, "\"."));
}
make_shirt(); // Large shirt with default message
make_shirt('medium'); // Medium shirt with default message
make_shirt('small', 'Hello, World!'); // Custom-sized shirt with a different message
