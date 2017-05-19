var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  let bucketAtIndex = this._storage.get(index);
  
  if (!bucketAtIndex) {
    let bucket = [];
    bucket.push([k, v]);
    this._storage.set(index, bucket);
  
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


