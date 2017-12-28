// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Reverse a string using Array.forEach function || Using Array.reverse function

// function reverse(str) {
//     var reversedArray = [];
//     var strArray = str.split(""); // Convert string to array using split

//     // strArray.forEach(function(element) {
//     //     reversedArray.unshift(element); // Add an element to the start of the array using unshift
//     // });

//     reversedArray = strArray.reverse(); // Reverse an array using reverse method

//     var reversedString = reversedArray.join(""); // Convert an array to a string using join
//     return reversedString;

//     // return str.split("").reverse().join(""); // Learning to chain queries when operating on arrays

// }

module.exports = reverse;

// Reverse a string using For loop

// function reverse(str) {
//     // var strArray = str.split("");
//     // var reversed = [];

//     // Using different For Loop syntaxes

       // Greater chance of error in this syntax
//     // for(var i = strArray.length-1; i >= 0; i--) {
//     //     reversed.push(strArray[i]);
//     // }

       // This syntax might run over into objects in __proto__ ?? Confirm this
//     // for(i in strArray) {
//     //     reversed.unshift(strArray[i]);
//     // }

//     let reversed = "";

       // ES6 syntax (Reduces possibility of syntax errors)
//     for (let character of str) {
//         reversed = character + reversed;
//     }

//     return reversed;

//     // return reversed.join("");
// }

// Reverse a string using Array.reduce
function reverse(str) {
    var strArray = str.split("");

    var reversed = strArray.reduce(function(reversedString, element) {
        return element + reversedString;
    }, "");

    return reversed;
}

reverse("HolaGola");