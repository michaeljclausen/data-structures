var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._numStored = 0;
};

HashTable.prototype.checkSize = function() {
  // if numStored > 3/4 * limit, double storage
  if (this._numStored > 3 / 4 * this._limit) {
    this.doubleTable();
  }
  // if numStored < 1/4 * limit, halve storage
  if (this._numStored < 1 / 4 * this._limit) {
    this.halveTable();
  }
};

HashTable.prototype.doubleTable = function() {
  debugger;
  let largerHashTable = new HashTable();
  largerHashTable._limit = this._limit * 2;
  this.traverse(largerHashTable.insert);
  //this = largerHashTable;
};

HashTable.prototype.halveTable = function() {
  this._limit = Math.floor(this._limit / 2);
};

HashTable.prototype.traverse = function(cb) {
  this._storage.each(function(bucket) {
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        cb(bucket[i][0], bucket[i][1]);
      }
    }
  });
};

HashTable.prototype.insert = function(k, v) {
  this.checkSize();
  
  var index = getIndexBelowMaxForKey(k, this._limit);

  let bucketAtIndex = this._storage.get(index);
  
  if (!bucketAtIndex) {
    let bucket = [];
    bucket.push([k, v]);
    this._storage.set(index, bucket);
    this.numStored++;
  
  } else {
    // if we're overwriting  
    for (let i = 0; i < bucketAtIndex.length; i++) {
      if (bucketAtIndex[i][0] === k) {
        bucketAtIndex[i][1] = v;
        return;
      }
    }
    
    // if we're not overwriting
    bucketAtIndex.push([k, v]);
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  const bucket = this._storage.get(index);
  
  if (bucket) {  
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1]; // v
      }
    }    
  }
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  const bucket = this._storage.get(index);
  
  if (bucket) {  
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
        this.numStored--;
      }
    }    
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 .insert
 .retrieve
 .remove
 are all constant
 */


