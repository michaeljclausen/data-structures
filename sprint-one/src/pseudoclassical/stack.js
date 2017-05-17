var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.size = function() {
  var count = 0;
  for (let key in this.storage) {
    count++;
  }
  return count;
};

Stack.prototype.push = function(value) {
  this.storage[this.size()] = value;
};

Stack.prototype.pop = function() {
  const removed = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return removed;
};


