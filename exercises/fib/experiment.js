// function variableArgs(...args) {
//     console.log(args);
//     console.log(args[0]);
// }

// variableArgs(1,2, 3,4,5);
// variableArgs("This is", {}, [1,2, "asda"]);

function testFn(arg1, arg2, arg3, arg4) {
    console.log("The arguments in testFn are");
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
    console.log(arg4);
}

function memoize(fn) {
    return function(...args) {
        console.log("Calling with apply");
        fn.apply(this, args);
        console.log("Calling without apply");
        fn(args);
        console.log("Calling without apply with the spread operator");
        fn(...args);
    }
}

var memoizeTestFun = memoize(testFn);

memoizeTestFun(1, 2, 3, 4);