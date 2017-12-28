// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function printLine(total, step) {
    var step = step || 1;
    // console.log("Step number : " + step);
    var totalPositions = 2*total-1;
    // console.log("Total positions : " + totalPositions);
    var hashRepeat = 2*step-1;
    // console.log("hashRepeat : " + hashRepeat);
    var spaceRepeat = (totalPositions-hashRepeat)/2;
    // console.log("spaceRepeat : " + spaceRepeat);

    var hashString = "#".repeat(hashRepeat);
    var spaceString = " ".repeat(spaceRepeat);

    // console.log(spaceString+hashString+spaceString);

    console.log(" ".repeat(spaceRepeat) + "#".repeat(hashRepeat) + " ".repeat(spaceRepeat));

    if(step === total) {
        return;
    } else {
        printLine(total, step+1);
    }
}

function pyramid(n) {
    
    printLine(n);

}

pyramid(3);

module.exports = pyramid;
