var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};

  _.extend(someInstance, stackMethods);
  
  return someInstance;
};

var stackMethods = {
  size: function() {
    return Object.keys(this.storage).length;
  },
  
  pop: function() {
    const removed = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return removed;
  },
  
  push: function(value) {
    this.storage[this.size()] = value.toString();
  }
};


