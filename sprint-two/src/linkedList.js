var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newTail = Node(value);
    if (list.tail) {
      list.tail.next = newTail;
    } else {
      list.head = newTail;
    }
    list.tail = newTail;
  };

  list.removeHead = function() {
    if (list.head) {
      let newHead = list.head.next;
      let removed = list.head.value;
      list.head.next = null;
      list.head = newHead;
      return removed;
    }
  };

  list.contains = function(target) {
    let currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
