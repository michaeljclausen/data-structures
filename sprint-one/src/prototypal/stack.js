var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {
  size: function() {
    return Object.keys(this.storage).length;
  },
  push: function(value) {
    this.storage[this.size()] = value;
  },
  pop: function() {
    const removed = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return removed;  
  }
};

