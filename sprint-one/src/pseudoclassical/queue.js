var Queue = function() {
  this.storage = {};
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.size()] = value.toString();
};

Queue.prototype.dequeue = function() {
  let removed = this.storage[0];
  for (let key in this.storage) {
    this.storage[key] = this.storage[parseInt(key) + 1];
  }
  delete this.storage[this.size() - 1];
  return removed;
};