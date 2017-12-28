// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution using recursion

function staircase(total, step) {
    step = step || 1;

    if(step === total) {
        console.log("#".repeat(step));
    } else {
        console.log("#".repeat(step) + " ".repeat(total-step))
        staircase(total, step+1);
    }
}

function steps(n) {
    staircase(n);    
}

// steps(6);

module.exports = steps;

/*
function steps(n) {
    var step = 1;

    while(step <= n) {
        var stepLine = "#".repeat(step) + " ".repeat(n-step);
        console.log(stepLine);
        step++;
    }
}
*/