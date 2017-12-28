// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Stephen Girder's Solution

function maxChar(str) {

    // Create a charMap object
    var charMap = {};

    // Iterate over the string
    for(let char of str) {
        // OR
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
        // OR
        // charMap[char] ? charMap[char]++ : charMap[char] = 1;
    }

    console.log(charMap);

    // console.log(charMap);
    var max = 0;
    var maxChar = "";

    for(i in charMap) {
        if(charMap[i] > max) {
            max = charMap[i];
            maxChar = i;
        }
    }

    return maxChar;
}

module.exports = maxChar;

// Solved by only using Arrays to count and compare characters

/*
function getUniqueCharacters(str) {

    var uniqueCharacters = [];
    
        uniqueCharacters = str.split("").reduce(function(uniqueChars, element) {

            if(uniqueChars.indexOf(element) !== -1) {
                return uniqueChars;
            } else {
                uniqueChars.push(element);
                return uniqueChars;
            }
        }, []);

    return uniqueCharacters;
}

function maxChar(str) {
    // Number of unique characters and their positions

    var uniqueCharacters = getUniqueCharacters(str);

    var strArray = str.split("");

    var frequencyOfUniqueCharacters = strArray.reduce(function(frequencyOfUniqueChars, element) {

        // Compare element to uniqueCharacters array
        var getIndex = 0;
        uniqueCharacters.filter(function(uniqueElement, index) {

            if(uniqueElement ===  element) {
                getIndex = index;
                return uniqueElement === element;
            } else {
                return uniqueElement === element;
            }
        })
        // Increment value for that position in the frequencyOfUniqueChars array

        if(frequencyOfUniqueChars[getIndex] === NaN || frequencyOfUniqueChars[getIndex] === undefined) {
            frequencyOfUniqueChars[getIndex] = 1;
            return frequencyOfUniqueChars;
        } else {
            frequencyOfUniqueChars[getIndex]++;
            return frequencyOfUniqueChars;
        }
        
    }, [])

    var maxFrequencyOfCharacter = frequencyOfUniqueCharacters.reduce(function(max, element) {
        return Math.max(max, element);
    });

    var indexOf = 0;

    var indexOfMaxFrequencyOfCharacter =  frequencyOfUniqueCharacters.filter(function(element, index) {
        if(maxFrequencyOfCharacter === element) {
            indexOf = index 
            return true;
        } 
    });

    var maxFrequencyCharacter = uniqueCharacters[indexOf];
    return maxFrequencyCharacter;
    
}
*/