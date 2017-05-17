var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.size = function() {
  var count = 0;
  for (let key in this.storage) {
    count++;
  }
  return count;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.size()] = value;
};

Queue.prototype.dequeue = function() {
  let removed = this.storage[0];
  for (let key in this.storage) {
    this.storage[key] = this.storage[parseInt(key) + 1];
  }
  delete this.storage[this.size() - 1];
  return removed;
};