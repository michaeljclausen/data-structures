var Stack = function() {
  var someInstance = {};
  var storage = {};

  someInstance.push = function(value) { 
    storage[someInstance.size()] = value.toString();
  };

  someInstance.pop = function() {
    const removed = storage[someInstance.size() - 1];
    delete storage[someInstance.size() - 1];
    return removed;  
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };
  return someInstance;
};