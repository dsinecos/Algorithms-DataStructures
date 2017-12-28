// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// Using Array.reverse() function
// function palindrome(str) {

//     var reverseString = str.split("").reverse().join("");

//     if(str === reverseString) {
//         return true;
//     } else {
//         return false;
//     }

// }

// Using Array.every function
function palindrome(str) {
    var strArray = str.split("");
    var len = strArray.length;

    var isPalindrome = strArray.every(function(element, index) {
        if(index > len/2) {
            return true;
        }
        return element === strArray[len-1-index];
    });

    return isPalindrome;

}

module.exports = palindrome;
