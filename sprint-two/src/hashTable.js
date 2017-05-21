var HashTable = function(size = 8) {
  this._limit = size;
  this._storage = LimitedArray(this._limit);
  this._numStored = 0;

};

HashTable.prototype.checkSize = function() {
  // if numStored > 3/4 * limit, double storage
  if (this._numStored >= 3 / 4 * this._limit) {
    this.doubleTable();
  }
  // if numStored < 1/4 * limit, halve storage
  if (this._numStored < 1 / 4 * this._limit) {
    this.halveTable();
  }
  
};

HashTable.prototype.doubleTable = function() {
  let largerHashTable = new HashTable();
  
  largerHashTable._limit = this._limit * 2;
  largerHashTable._storage = LimitedArray(largerHashTable._limit);

  this.traverse(largerHashTable.tempTableInsert.bind(largerHashTable));
  this._limit = largerHashTable._limit;  
  this._storage = largerHashTable._storage;
  this._numStored = largerHashTable._numStored;

};

HashTable.prototype.halveTable = function() {
  let smallerHashTable = new HashTable();

  smallerHashTable._limit = Math.ceil(this._limit / 2);
  smallerHashTable._storage = LimitedArray(Math.ceil(smallerHashTable._limit));

  
  this.traverse(smallerHashTable.tempTableInsert.bind(smallerHashTable));
  this._limit = smallerHashTable._limit;  
  this._storage = smallerHashTable._storage;
  this._numStored = smallerHashTable._numStored;

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

HashTable.prototype.tempTableInsert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  let bucketAtIndex = this._storage.get(index);
  
  if (!bucketAtIndex) {
    let bucket = [];
    bucket.push([k, v]);
    this._storage.set(index, bucket);
    this._numStored++; 
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
    this._numStored++;
  }
};

HashTable.prototype.insert = function(k, v) {
  this.checkSize();
  
  var index = getIndexBelowMaxForKey(k, this._limit);

  let bucketAtIndex = this._storage.get(index);
  
  if (!bucketAtIndex) {
    let bucket = [];
    bucket.push([k, v]);
    this._storage.set(index, bucket);
    this._numStored++; 
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
    this._numStored++;
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
  this.checkSize();
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  const bucket = this._storage.get(index);
  if (bucket) {  
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
        this._numStored--;
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


