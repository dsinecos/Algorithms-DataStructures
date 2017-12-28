var arr = ["angel", "clown", "drum", "mandarin", "sturgeon"];

var splitIndex = Math.floor(arr.length/2)
var right = arr.slice(splitIndex);
var left = arr.splice(0, splitIndex);

console.log(left);
console.log(right);