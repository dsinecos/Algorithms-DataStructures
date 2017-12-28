// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, nextNode = null) {
        this.data = data;
        this.next = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {

        // Stepehen Grider's implementation
        const node = new Node(data, this.head);
        this.head = node;
        // Refer below module.exports for my implementation
    }

    size() {

        // Stephen Grider's implementation
        var count = 0;
        var travellingNode = this.head;

        while(travellingNode) {
            count++;
            travellingNode = travellingNode.next;
        }

        return count;        
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if(!this.head) {
            return null;
        }

        var travellingNode = this.head;

        while(travellingNode.next) {
            travellingNode = travellingNode.next;
        }

        return travellingNode;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        (this.head) ? this.head = this.head.next : this.head;
    }

    removeLast() {
        var previousNode;
        var currentNode = this.head;

        if(!this.head) {
            return;
        }

        if(!this.head.next) {
            this.head = null;
            return;
        }

        while(currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = null;
    }

    insertLast(data) {
        const node = new Node(data);

        const lastNode = this.getLast();

        if(lastNode) {
            lastNode.next = node;
        } else {
            this.head = node;
        }

    }

    getAt(index) {
        // if(!this.head) {
        //     return null;
        // }

        let counter = 0;
        let node = this.head;

        while(node) {
            if(counter === index) {
                return node;
            }

            node = node.next;
            counter++;
        }

        return null;
    }

    removeAt(index) {

        // Solution using getAt

        // var node = this.getAt(index-1)
        // node.next = this.getAt(index).next;

        if(!this.head) {
            return null;
        } else if (index === 0) {
            this.head = this.head.next;
        } else if (this.getAt(index)) {
            var previousNode = this.getAt(index-1);
            previousNode.next = (previousNode.next.next) ? previousNode.next.next : null;
        }

        // // if(!this.head) {
        // //     return null;
        // // }

        // var counter = 0;
        // var previousNode = null;
        // var currentNode = this.head;

        // while(currentNode) {
        //     if(counter === index) {
        //         if(index === 0) {
        //             this.head = (currentNode.next) ? currentNode.next : null;
        //         } else {
        //             previousNode.next = (currentNode.next) ? currentNode.next : null;
        //             return;
        //         }
                
        //     }

        //     previousNode = currentNode;
        //     currentNode = currentNode.next;
        //     counter++;
        // }

        // return null;
    }

    insertAt(data, index) {
        var node = new Node(data);

        if(index === 0 ) {
            node.next = this.head;
            this.head = node;
            return;
        }
        
        var previousNode = this.getAt(index-1) || this.getLast();
        var node = new Node(data, previousNode.next);
        previousNode.next = node;

        // var previousNode = this.getAt(index-1);
        // if(!previousNode) { // When the index is out of bounds
        //     this.getAt(this.size() - 1).next = node;
        //     return;
        // } else if(!previousNode.next) { // When the index is last
        //     previousNode.next = node;
        //     return;
        // } else {
        //     node.next = previousNode.next;
        //     previousNode.next = node;
        //     return;
        // }

        
    }

    forEach(fn) {
        var count = 0;
        var node = this.head;

        while((node)) {
            fn(node, count);
            node = node.next;
            count++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;

        while(node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };

/*
insertFirst(data) {
    
            // Stepehen Grider's implementation
            const node = new Node(data, this.head);
            this.head = node;
    
            // My implementation
            // var tempNode = new Node(data);
            // var tempReference;
            
            // if(this.head) {
            //     tempReference = this.head;
            //     this.head = tempNode;
            //     tempNode.next = tempReference;
            // } else {
            //     this.head = tempNode;
            // }
        }

size() {
    // My implementation
    if(!this.head) {
        return 0;
    }

    var travellingNode = this.head;
    var count = 1;

    while(travellingNode.next) {
        count++;
        travellingNode = travellingNode.next;
    }

    return count;

}

getAt(getIndex) {
        // Assuming invalid input
        if(getIndex > this.size()-1) {
            return null;
        }
        // Assuming valid input
        var nodeAtIndex = this.head;
        var indexOfNode = 0;

        if(nodeAtIndex) {
            while(nodeAtIndex && getIndex !== indexOfNode) {
                indexOfNode++;
                nodeAtIndex = nodeAtIndex.next;
            }
        } else {
            return null;
        }

        return nodeAtIndex;
    }

*/