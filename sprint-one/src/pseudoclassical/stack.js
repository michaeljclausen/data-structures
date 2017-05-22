var Stack = function() {
  this.storage = {};
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Stack.prototype.push = function(value) {
  this.storage[this.size()] = value.toString();
};

Stack.prototype.pop = function() {
  const removed = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return removed;
};
