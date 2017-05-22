var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};

  _.extend(someInstance, queueMethods);
  
  return someInstance;
};

var queueMethods = {
  size: function() {
    return Object.keys(this.storage).length;
  },

  enqueue: function(value) {
    this.storage[this.size()] = value.toString();
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