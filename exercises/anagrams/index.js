// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Using Array.sort 
function anagrams(stringA, stringB) {
    var modStringA = stringA.toLowerCase().replace(/[^\w]/g, "").split("").sort().join("");
    var modStringB = stringB.toLowerCase().replace(/[^\w]/g, "").split("").sort().join("");

    return modStringA === modStringB;

    
}

module.exports = anagrams;

/*
function getCharacterMapOfString(str) {
    var charMap = {};
    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;

    }
    return charMap;
}

function compareCharMap(charMapA, charMapB) {

    if(Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false;
    }
     
    for(let property in charMapA) {
        if(charMapA[property] !== charMapB[property]) {
            return false
        }
    }

    return true;
}

function anagrams(stringA, stringB) {
    
    // Consider capital letters to be the same as lower case letters
    // Ignore whitespace and punctuation - How to remove whitespace and punctuation from a string?
    // Generate character map for both the strings
    // Compare the character map for both the strings

    var stringa = stringA.toLowerCase().replace(/[^\w]/g, "");
    var stringb = stringB.toLowerCase().replace(/[^\w]/g, "");

    var charMapA = getCharacterMapOfString(stringa);
    var charMapB = getCharacterMapOfString(stringb);

    return compareCharMap(charMapA, charMapB);

    console.log(charMapA);
    console.log(charMapB);
}

*/