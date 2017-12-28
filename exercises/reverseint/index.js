// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    var reversed = n.toString().split("").reverse().join("");

    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

// function isPositiveNegativeZero(n) {
//     if(n === 0) {
//         return 'zero';
//     } else if (n > 0) {
//         return 'positive';
//     } else if (n < 0) {
//         return 'negative';
//     }
// }

// function reverseInt(n) {

//     var intSign = Math.sign(n);
    
//     if(intSign === 0 || intSign === -0) {
//         return 0;
//     } else if (intSign === 1) {
//         // return Number(String(n).split("").reverse().join(""));

//         // Turning a number to a string using toString method and a number to a string using parseInt method
//         return parseInt(n.toString().split("").reverse().join(""));

//     } else if (intSign === -1) {
//         // return Number(String(n*-1).split("").reverse().join(""))*-1;
//         // Turning a number to a string using toString method and a number to a string using parseInt method
//         return parseInt((n*-1).toString().split("").reverse().join(""))*(-1);
//     }
//     // console.log(String(n).split("").reverse().join(""));

// }