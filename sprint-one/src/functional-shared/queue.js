var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  
  someInstance.size = queueMethods.size;
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  
  return someInstance;
};

var queueMethods = {
  size: function() {
    let count = 0;
    for (let key in this.storage) {
      count++;
    }
    return count;
  },
  enqueue: function(value) {
    this.storage[this.size()] = value;
  },
  dequeue: function() {
    const removed = this.storage[0];
    for (let key in this.storage) {
      this.storage[key] = this.storage[parseInt(key) + 1];
    }
    delete this.storage[this.size() - 1];
    return removed;
  }
};


