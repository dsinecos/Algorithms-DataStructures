// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    var result = "";
    var switchToUpperCase = 1;

    for(let char of str) {

        if(switchToUpperCase) {
            result = result+char.toUpperCase();;
        } else {
            result = result+char;
        }

        if(char === " ") {
            switchToUpperCase = 1;
        } else {
            switchToUpperCase = 0;
        }

    }

    return result;
}

module.exports = capitalize;

/*
function capLetter(str) {
    return str[0].toUpperCase() + str.slice(1, str.split("").length);
}

function capitalize(str) {
    var cleanString = str.split(" ").map(capLetter).join(" ");
    return cleanString;
}
*/