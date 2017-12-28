// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Using recursion and a generic memoization function

var cache = {};

function memoize(fn) {
    // var cache = {};

    return function(...args) {
        if(cache[args]) {
            return cache[args];
        }

        // cache[args] = fn.apply(this, args);
        // cache[args] = fn(args);
        cache[args] = fn(...args);
        return cache[args];
    }
}

var fib = memoize(slowFib);

function slowFib(n) {
    
    if(n < 2) {
        return n;
    } else {
        // return fib(n-1) + fib(n-2);
        return Number(fib(n-1)) + Number(fib(n-2));
    }
}
module.exports = fib;

// fib(4);
console.log(fib(5));
console.log(cache);

// // Using Recursion and Memoization
// var fibSequence = [];

// function nFib(n) {
//     // if(n === 1) {
//     //     return 1;
//     // } else if (n === 2) {
//     //     return 1;
//     // } else {
//     //     return nFib(n-1) + nFib(n-2);
//     // }

//     if(n < 2) {
//         fibSequence[n] = n;
//         return n;
//     } else {
//         if(fibSequence[n]) {
//             return fibSequence[n];
//         } else {
//             fibSequence[n-1] = nFib(n-1);
//             fibSequence[n-2] = nFib(n-2);
//             return fibSequence[n-1] + fibSequence[n-2];
//         }
//     }
// }

// function fib(n) {
//     return nFib(n);

// }

// Using For loop
/*
function fib(n) {
    
        var fibLast = 0;
        var fibCurrent = 1;
        var fibNext = 0;
    
        if(n === 1) {
            return 1;
        }
    
        for(i = 2; i <= n; i++) {
    
            fibNext = fibLast + fibCurrent;
            fibLast = fibCurrent;
            fibCurrent = fibNext; 
        }
    
        return fibNext;
    }
    
*/