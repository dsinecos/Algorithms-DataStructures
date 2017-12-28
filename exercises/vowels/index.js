// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution using RegEx

function vowels(str) {
    var matches = str.match(/[aeiou]/gi) || 0;
    console.log(matches);
    return matches.length || 0;
}

vowels("bcdfghjkl");

module.exports = vowels;


/*

// Solution using map, reduce and by generating characterMap

function generateCharMap(str) {
    var charMap = {};

    for(let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

function vowels(str) {

    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var charMap = generateCharMap(str.toLowerCase());

    var countVowels = vowels
    .map(function(element) {
        return charMap[element] || 0;
    })
    .reduce(function(vowelCount, element) {
        return vowelCount + element;
    });

    return countVowels;


}
*/