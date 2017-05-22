var Queue = function() {
  var someInstance = {};
  var storage = {};

  someInstance.enqueue = function(value) { 
    storage[someInstance.size()] = value.toString();
  };

  someInstance.dequeue = function() {
    const removed = storage[0];
    for (let key in storage) {
      storage[key] = storage[parseInt(key) + 1];
    }
    delete storage[someInstance.size() - 1];
    return removed;  
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };
  return someInstance;
};