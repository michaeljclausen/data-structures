var BinarySearchTree = function(value) {
  var newBSTree = Object.create(BSTreeMethods);
  newBSTree.value = value;
  newBSTree.left = null;
  newBSTree.right = null;
  newBSTree.depth = 1;
  newBSTree.balancing = false;
  return newBSTree;
};

var BSTreeMethods = {
  insert: function(value) {
    console.log('inserting ' + value);
    let newChild = BinarySearchTree(value);
    newChild.depth = this.depth;
    if (value < this.value) {
      // let it become left child of something
      newChild.depth++;
      this.left ? this.left.insert(value) : this.left = newChild;
    } else {
      // let it become right child of something
      newChild.depth++;
      this.right ? this.right.insert(value) : this.right = newChild;
    }
    if (this.needToRebalance() && this.balancing === false) {
      debugger
      let balanced = this.rebalance();
      this.value = balanced.value;
      this.left = balanced.left;
      this.right = balanced.right;
      this.balancing = false;
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
    callback.bind(this)();
    if (this.left) {
      this.left.depthFirstLog(callback);
    }
    if (this.right) {
      this.right.depthFirstLog(callback);
    }
  },

  depthFirstInOrderLog: function(callback) {
    if (this.left) {
      this.left.depthFirstInOrderLog(callback);
    }
    callback.bind(this)();
    if (this.right) {
      this.right.depthFirstInOrderLog(callback);
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
  },

  checkDepth: function() {
    let max_depth = 0;
    let min_depth;
    let getMax = function() {
      if (!this.left && !this.right) {
        if (this.depth > max_depth) {
          max_depth = this.depth;
        }
        if (!min_depth) {
          min_depth = this.depth;
        } else if (this.depth < min_depth) {
          min_depth = this.depth;
        }
      }
    }
    this.depthFirstLog(getMax);
    return [max_depth, min_depth];
  },

  needToRebalance: function() {
    const result = this.checkDepth();
    const MAX = result[0];
    const MIN = result[1];

    return (MAX/MIN >= 2); 
  },

  rebalance: function() {
    this.balancing = true;
    let trees = [];
    buildSortedList = function() {
      trees.push(this.value);
    }
    this.depthFirstInOrderLog(buildSortedList);

    let middleValue = 0;
    let rebalancedTree;
    let insertValuesFromList = function(arr) {
      middleValueIndex = Math.floor((arr.length - 1) / 2);
      middleValue = arr.splice(middleValueIndex, 1)[0];

      let leftArray = arr.slice(0, middleValueIndex);
      let rightArray = arr.slice(middleValueIndex);

      if (!rebalancedTree) {
        rebalancedTree = BinarySearchTree(middleValue);
        rebalancedTree.balancing = true;
      }else {
        rebalancedTree.insert(middleValue);
      }
      if (leftArray.length > 0) {
        insertValuesFromList(leftArray);
      }
      if (rightArray.length > 0) {
        insertValuesFromList(rightArray);
      }
    }

    insertValuesFromList(trees);
    rebalancedTree.breadthFirstLog(value => console.log(value));
    return rebalancedTree;
  },
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 .contains n
 .depthFirstLog n
 .insert n
 */
