// var str = "HHHH";

// function getCharMap(str) {
    
//     var charMap = {};

//     for(let char of str) {
//         console.log("Value of charMap = " + charMap[char]);
//         charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
//         console.log(charMap);
//     }

//     return charMap;
// }

// getCharMap(str);

var charMap = {
    'property': 1
}

var test1 = charMap['property']++;
var test2 = charMap['property'];
var test3 = charMap['property'] + 1;

console.log(test1);
console.log(test2);
console.log(test3);