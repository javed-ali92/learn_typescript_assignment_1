// Question 43
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var modifiedMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        modifiedMagicians.push("the Great ".concat(magician));
    }
    return modifiedMagicians;
}
var magicians = ['Magician 1', 'Magician 2', 'Magician 3'];
var modifiedMagicians = make_great(__spreadArray([], magicians, true));
show_magicians(magicians);
show_magicians(modifiedMagicians);


//   In this modified code, we have the same show_magicians() 
//   function that accepts an array of magician names and prints each magician's name 
//   using console.log().
//   We also have the make_great() function, which now creates a new array 
//   modifiedMagicians to store the modified magician names. 
//   Instead of modifying the input array in-place, we iterate over the original array 
//   and push the modified magician names into the modifiedMagicians array.
//   We then create a copy of the magicians array using the spread operator 
//   [...magicians] and pass it as an argument to make_great(). 
//   This ensures that the original array remains unchanged.
//   The make_great() function returns the modifiedMagicians array, 
//   which we store in the modifiedMagicians variable.
//   we call show_magicians() twice: once with the original magicians array 
//   and once with the modifiedMagicians array. This allows us to see that 
//   we have one array of the original names and one array with "the Great" added to each magician's name.
