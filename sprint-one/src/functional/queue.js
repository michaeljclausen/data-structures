var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) { 
    storage[someInstance.size()] = value;
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
    let count = 0;
    for (let key in storage) {
      count++;
    }
    return count;
  };

  return someInstance;
};
