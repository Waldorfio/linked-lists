console.clear();
console.log('----');

function linkedList() {
  return {
    append(value) {   // adds a new node to end of list
    },
    prepend(value) {  // adds a new node to start of list
      newNode = node(value,null);
      newNode.next = aList.head;    // Adding the rest of aList to the newNode's next
      aList.head = newNode;         // Appending newNode to the start of the list
    },
    size() {          // returns the total number of nodes in the list
    },
    head() {          // returns the first node in the list
      return aList.head.value;
    },
    tail() {          // returns the last node in the list
    },
    at(index) {       // returns the node at a given index
    },
    pop() {           // removes last element from list
    },
    contains(value) { // returns true if passed in value is in the list
    },
    find(value) {     // returns index of value
    },
    toString() {      // converts linkedList to string
    }
  };
}

function node(value,next) {   // Factory function to create new nodes
  return {
    value,
    next,
  };
}

const aList = {   // Initialis empty list
  head: {}        // Create empty object to hold nodes
}
aList.head = node(null,null); // Initialise with null node


//        Example output object for a linked ist:
// const aList = {
//   head: {
//       value: 6,
//       next: {
//           value: 10,
//           next: {
//               value: 12,
//               next: {
//                   value: 3,
//                   next: null,
//               }
//           }
//       }
//   }
// }
