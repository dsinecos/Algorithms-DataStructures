// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }

    return arr;

}

function selectionSort(arr) {

    var sortedArray = [];

    while (arr.length) {
        var currentMin = Math.min(...arr);
        sortedArray.push(currentMin);
        arr.splice(arr.indexOf(currentMin), 1);
    }
    return sortedArray;

}

function mergeSort(arr) {

    if (arr.length === 1) {
        return arr;
    } else {
        //Split array
        var splitIndex = Math.floor(arr.length / 2)
        var right = arr.slice(splitIndex);
        var left = arr.splice(0, splitIndex);

        return merge(mergeSort(left), mergeSort(right));

    }   

}

console.log(mergeSort([100, -40, 500, -124, 0, 21]));

function merge(left, right) {
    var sortedArray = [];

    while (left.length && right.length) {

        (left[0] < right[0]) ? sortedArray.push(left.shift()) : sortedArray.push(right.shift());

    }

    // if(left.length > right.length) {
    //     left.map((e) => sortedArray.push(e));
    // } else {
    //     right.map((e) => sortedArray.push(e));
    // }

    return [...sortedArray, ...left, ...right];

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
