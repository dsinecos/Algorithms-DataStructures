// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Stephen Girder's First Solution
/*
function chunk(array, size) {
    var chunkedArray = [];

    for(let element of array) {
        var lastSubArrayOfChunkedArray = chunkedArray[chunkedArray.length-1];

        if(!lastSubArrayOfChunkedArray || lastSubArrayOfChunkedArray.length === size) {
            chunkedArray.push([element]);
        } else {
            lastSubArrayOfChunkedArray.push(element);
        }
    }
    
    return chunkedArray;
}
*/

// Stephen Girder's Second solution - Using Slice
function chunk(array, size) {
    var index = 0;
    var chunkedArray = [];
    while (index < array.length) {
        chunkedArray.push(array.slice(index, index+size));
        index = index + size;
    }

    console.log(chunkedArray);

    return chunkedArray;

}

chunk([1, 2, 3, 4, 5], 2);
// console.log(chunk([1, 2, 3, 4, 5], 2));
// chunk([1, 2, 3, 4, 5], 2);

module.exports = chunk;

// function chunk(array, size) {
    
//         var subArray = [];
    
//         var chunkedArray = array.reduce(function(chunkedArray, element, index) {
    
//             // Create a subArray until it reaches the size defined
//             // When it reaches that size, push the subArray into chunkedArray
//             // When you reach the end of the array, push the subArray even if it has not reached the size
    
//             if((index+1)%size !== 0 && index+1 === array.length) {
                
//                 subArray.push(element);
//                 chunkedArray.push(subArray);
//                 subArray = [];
//                 return chunkedArray;
    
//             } else if((index+1)%size !== 0) {
    
//                 subArray.push(element);
//                 return chunkedArray;
    
//             } else if((index+1)%size === 0) {
    
//                 subArray.push(element);
//                 chunkedArray.push(subArray);
//                 subArray = [];            
//                 return chunkedArray;
//             }
    
//         }, []);
    
//         return chunkedArray;
    
//     }