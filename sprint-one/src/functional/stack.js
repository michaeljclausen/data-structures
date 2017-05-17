var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.pop = function() {
    if (size > 0) {
      const removed = storage[size];
      delete storage[size];
      size--;
      return removed;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
