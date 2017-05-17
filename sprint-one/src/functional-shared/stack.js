var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.size = stackMethods.size;
  
  someInstance.pop = stackMethods.pop;
  someInstance.push = stackMethods.push;
  
  return someInstance;
};



var stackMethods = {
  size: function() {
    let count = 0;
    for (let key in this.storage) {
      count++;
    }
    return count;
  },
  
  pop: function() {
    const removed = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return removed;
  },
  
  push: function(value) {
    this.storage[this.size()] = value;
  }
};




