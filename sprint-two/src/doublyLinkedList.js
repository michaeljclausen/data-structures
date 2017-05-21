var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;

};

DoublyLinkedList.prototype.addToHead = function(value) {
  let newHead = Node(value);
  if (!this.head) {
    this.head = newHead;
    this.tail = newHead;
  } else {
    this.head.prev = newHead;
    this.head = newHead;
  }
}

DoublyLinkedList.prototype.addToTail = function(value) {
  if (!this.head && !this.tail) {
    this.addToHead(value);
    return;
  }
  let newTail = Node(value);
  this.tail.next = newTail;
  newTail.prev = this.tail;
  this.tail = newTail;

};


DoublyLinkedList.prototype.removeHead = function() {
  if (this.head) {
    let newHead = this.head.next;
    let removedHead = this.head.value;
    this.head = newHead;
    return removedHead;
  }
};

DoublyLinkedList.prototype.removeTail = function() {
  if (this.tail) {
    let newTail = this.tail.prev;
    let removedTail = this.tail.value;
    this.tail = newTail;
    return removedTail;
  }
};

DoublyLinkedList.prototype.contains = function(target) {
  let currentNode = this.head;
  while (currentNode !== null) {
    if (currentNode.value === target) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
};

var Node = function(value) {
  let node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};