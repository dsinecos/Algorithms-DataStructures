// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function createEmptyMatrix(n) {
    var matrix = [];
    var i = 1;
    while (i <= n) {
        var subArray = new Array(n);
        matrix.push(subArray);
        i++;
    }
    return matrix;
}

/*
function matrix(n) {
    
    var startRow = 0;
    var endRow = n-1;
    var startColumn = 0;
    var endColumn = n-1;
    
    var resultMatrix = createEmptyMatrix(n);
    var count = 1;
    var coordinate = [0,0];
    
    for(var j = 0; j < n; j++) {
        
        // Print a row going forward
        // console.log("Printing a row going forward");
        for(var i = startRow; i <= endColumn; i++) {
            var coordinate = [startRow, i];
            resultMatrix[startRow][i] = count;
            count++;
            // console.log(coordinate);
        }
        
        startRow = startRow + 1;
        
        // console.log("Printing a column going down");
        // console.log("Value of startRow : " + startRow);
        // console.log("Value of endRow : " + endRow);
        // if(startRow >= endRow) {
        //     break;
        // }
        // Print a column going down
        for(var i = startRow; i <= endRow; i++) {
            var coordinate = [i, endColumn];
            resultMatrix[i][endColumn] = count;
            count++;
            // console.log(coordinate);
        }
        
        endColumn = endColumn - 1;
        
        // console.log("Printing a row going backwards");
        // Print a row going backwards
        // console.log("Value of endColumn : " + endColumn);
        for(var i = endColumn; i >= startColumn; i--) {
            var coordinate = [endRow, i];
            resultMatrix[endRow][i] = count;
            count++;
            // console.log(coordinate);
        }
        
        endRow = endRow - 1;
        
        // console.log("Printing a column going up");
        // console.log("Value of endRoe : " + endRow);
        // Print a column going up
        for(var i = endRow; i >= startRow; i--) {
            var coordinate = [i, startColumn];
            resultMatrix[i][startColumn] = count;
            count++;
            // console.log(coordinate);
        }
        
        startColumn = startColumn + 1;
        
    }
    
    console.log(resultMatrix);
    return resultMatrix;   
    
    // startColumn = startColumn + 1;
    
    
    
}
*/

matrix(7);

// console.log(createEmptyMatrix(2));

module.exports = matrix;


function matrix(n) {
    
    var startRow = 0;
    var endRow = n-1;
    var startColumn = 0;
    var endColumn = n-1;
    
    var resultMatrix = createEmptyMatrix(n);
    var count = 1;
    var coordinate = [0,0];

    while(startColumn <= endColumn && startRow <= endRow) {

        // Print a row going forward
        // console.log("Printing a row going forward");
        for(var i = startRow; i <= endColumn; i++) {
            var coordinate = [startRow, i];
            resultMatrix[startRow][i] = count;
            count++;
            // console.log(coordinate);
        }
        
        startRow = startRow + 1;
        
        // console.log("Printing a column going down");
        // console.log("Value of startRow : " + startRow);
        // console.log("Value of endRow : " + endRow);
        // if(startRow >= endRow) {
        //     break;
        // }
        // Print a column going down
        for(var i = startRow; i <= endRow; i++) {
            var coordinate = [i, endColumn];
            resultMatrix[i][endColumn] = count;
            count++;
            // console.log(coordinate);
        }
        
        endColumn = endColumn - 1;
        
        // console.log("Printing a row going backwards");
        // Print a row going backwards
        // console.log("Value of endColumn : " + endColumn);
        for(var i = endColumn; i >= startColumn; i--) {
            var coordinate = [endRow, i];
            resultMatrix[endRow][i] = count;
            count++;
            // console.log(coordinate);
        }
        
        endRow = endRow - 1;
        
        // console.log("Printing a column going up");
        // console.log("Value of endRoe : " + endRow);
        // Print a column going up
        for(var i = endRow; i >= startRow; i--) {
            var coordinate = [i, startColumn];
            resultMatrix[i][startColumn] = count;
            count++;
            // console.log(coordinate);
        }
        
        startColumn = startColumn + 1;

    }

    console.log(resultMatrix);
    return resultMatrix;   
    
    // startColumn = startColumn + 1;
    
    
    
}
