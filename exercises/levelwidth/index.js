// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    var counter = [0];
    var travellingArray = [root, 's'];

    while(travellingArray.length) {
        
        if(travellingArray[0] === 's' && travellingArray.length === 1) {

            return counter;
            
        } else if(travellingArray[0] === 's' && travellingArray.length !== 1) {

            travellingArray.push(travellingArray.shift());
            counter.push(0);
        }

        var temp = travellingArray.shift();
        counter[counter.length-1]++;

        travellingArray.push(...temp.children);

    }


}

module.exports = levelWidth;
