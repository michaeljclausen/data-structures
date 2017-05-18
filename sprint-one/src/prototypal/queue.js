var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {
  size: function() {
    return Object.keys(this.storage).length;
  },
  enqueue: function(value) {
    this.storage[this.size()] = value;
  },
  dequeue: function() {
    const removed = this.storage[0];
    for (var key in this.storage) {
      this.storage[key] = this.storage[parseInt(key) + 1];
    }
    delete this.storage[this.size() - 1];
    return removed;
  }
};


