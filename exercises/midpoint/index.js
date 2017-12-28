// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
    var slow = list.getFirst();
    var fast = list.getFirst();

    while(fast.next && fast.next.next) {
        
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

module.exports = midpoint;

/*
// Finding midpoint by deleting nodes until only a single node remains

function midpoint(list) {
    if(!list.head) { // When the Linked List is empty
        return null;
    }

    var lastRemovedFromFirst = false; 

    while(list.head.next !== null) {  // When there are more than two nodes in the Linked List      

        if(list.head.next.next === null) { // When there are only two nodes remaining in the Linked List
            list.removeLast();
            return list.head;
        } else {
            (lastRemovedFromFirst) ? list.removeLast() : list.removeFirst();
            lastRemovedFromFirst = !lastRemovedFromFirst;
        }
    }

    return list.head;
}
*/