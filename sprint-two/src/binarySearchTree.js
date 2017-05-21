var BinarySearchTree = function(value) {
  var newBSTree = Object.create(BSTreeMethods);
  newBSTree.value = value;
  newBSTree.left = null;
  newBSTree.right = null;
  return newBSTree;
};

var BSTreeMethods = {
  insert: function(value) {
    let newChild = BinarySearchTree(value);
    
    if (value < this.value) {
      // let it become left child of something
      this.left ? this.left.insert(value) : this.left = newChild;
    } else {
      // let it become right child of something
      this.right ? this.right.insert(value) : this.right = newChild;
    }
    
  },

  contains: function(value) {
    let foundValue = false;
    let foundInRightChild = false;
    let foundInLeftChild = false;
    // first look at node we're on
    if (this.value === value) {
      return true;
    } else {
      // if value is smaller than this.value, go down left branch
      if (value < this.value) {
        // go down left branch if there is a left branch to go down
        if (this.left) {
          foundInLeftChild = this.left.contains(value);
        } 
        // otherwise, does not contain
        
      // if value is not smaller than this.value, go down right branch
      } else {
        // go down right branch if there is a right branch to go down
        if (this.right) {
          foundInRightChild = this.right.contains(value);
        }
        // otherwise, does not contain
      }
      foundValue = foundInLeftChild || foundInRightChild;
    }
    return foundValue;
  },

  depthFirstLog: function(callback) {
    callback(this.value);
    if (this.left) {
      this.left.depthFirstLog(callback);
    }
    if (this.right) {
      this.right.depthFirstLog(callback);
    }
  },

  breadthFirstLog: function(callback) {
    let queue = [this];
    let n;

    while (queue.length > 0) {
      n = queue.pop();
      callback(n.value);

      if (n.left) {
        queue.unshift(n.left);
      }
      if (n.right) {
        queue.unshift(n.right);
      }
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 .contains n
 .depthFirstLog n
 .insert n
 */
