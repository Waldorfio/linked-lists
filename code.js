console.clear();
console.log('----');

function node(value,next) {   // Factory function to create new nodes
  return {
    value,
    next,
  };
}

function linkedList() {
  return {

    append(value) {   // adds a new node to end of list
      lastIndex = (linkedList().size() - 1);    // last Index prior to tail
      a = aList.head;
      indexMatch = false;
      i = 0;

      while (indexMatch == false) {
        if (i == lastIndex) {
          a.next = node(value,null);
          console.log('added!');
          indexMatch = true;
        }
        i += 1;
        a = a.next;
      }
    },

    prepend(value) {  // adds a new node to start of list
      newNode = node(value,null);
      newNode.next = aList.head;    // Adding the rest of aList to the newNode's next
      aList.head = newNode;         // Appending newNode to the start of the list
    },

    size() {          // returns the total number of nodes in the list
      // Initialise
      endOfList = false;
      let a = aList.head;
      i = 0;

      while (endOfList == false) {    // Loop
        if (a == null) {
          endOfList = true;
        } else {
          a = a.next;
          i += 1;
        };
      }
      return i
    },

    head() {          // returns the first node in the list
      return aList.head.value;
    },

    tail() {          // returns the last node in the list
      lastIndex = (linkedList().size() - 1);    // last Index prior to tail
      a = aList.head;
      indexMatch = false;
      i = 0;

      while (indexMatch == false) {
        if (i == lastIndex) {
          lastVal = a.value;
          console.log('last val: '+lastVal);
          indexMatch = true;
          return lastVal
        }
        i += 1;
        a = a.next;
      }
    },

    at(index) {       // returns the node at a given index
      a = aList.head;
      indexMatch = false;
      i = 0;

      while (indexMatch == false) {
        if (i == index) {
          console.log('node: '+a.value);
          indexMatch = true;
          return a
        }
        i += 1;
        a = a.next;
      }
    },

    pop() {           // removes last element from list
      lastIndex = (linkedList().size() - 1);    // last Index prior to tail
      a = aList.head;
      indexMatch = false;
      i = 0;

      while (indexMatch == false) {
        if (i == lastIndex-1) {
          a.next = null;
          console.log('popped!');
          indexMatch = true;
        }
        i += 1;
        a = a.next;
      }
    },

    contains(value) { // returns true if passed in value is in the list
      a = aList.head;
      indexMatch = false;
      i = 0;

      while (indexMatch == false) {
        if (a == null) {
          indexMatch = true;
          console.log(false);
          return false
        }
        if (value == a.value) {
          indexMatch = true;
          console.log(true);
          return true
        }
        a = a.next;
        i += 1;
      }
    },

    find(value) {     // returns index of value
      a = aList.head;
      indexMatch = false;
      i = 0;

      while (indexMatch == false) {
        if (a == null) {
          indexMatch = true;
          console.log(value+' not found!');
          return false
        }
        if (value == a.value) {
          indexMatch = true;
          console.log(value+' found at idx '+i);
          return i
        }
        a = a.next;
        i += 1;
      }
    },

    toString() {      // converts linkedList to string
      a = aList.head;
      indexMatch = false;
      finalString = '';

      while (indexMatch == false) {
        if (a == null) {
          indexMatch = true;
          finalString = finalString + 'null';
          console.log(finalString);
          return finalString
        }
        else {
          indexMatch = false;
          finalString = finalString + '( '+a.value+' ) -> ';
        }
        a = a.next;
      }
    }

  }; // ( value ) -> ( value ) -> ( value ) -> null
}

//        Example list: ( 6 ) -> ( 10 ) -> ( 12 ) -> ( 13 ) -> null
const aList = {
  head: {
      value: 6,
      next: {
          value: 10,
          next: {
              value: 12,
              next: {
                  value: 3,
                  next: null,
              }
          }
      }
  }
}

// Testing
linkedList().append(7);       // Output: added!
linkedList().prepend(9);      // Output: 
linkedList().size();          // Output: return: total size
linkedList().head();          // Output: 
linkedList().tail();          // Output: 
linkedList().at(3);           // Output: node: 12
linkedList().pop();           // Output: popped!
linkedList().contains(3);     // Output: true
linkedList().find(5);         // Output: 5 not found!
linkedList().toString();      // Output: ( 9 ) -> ( 6 ) -> ( 10 ) -> ( 12 ) -> ( 3 ) -> null
