var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = []; 

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.removeFromParent = function(target) {
  if (this.contains(target)) {
    this.removeChild(target);
  }
};

treeMethods.traverse = function(callback) {
  callback(this);
  for (let i = 0; i < this.children.length; i++) {
    this.children[i].traverse(callback);
  }
};

treeMethods.removeChild = function(child) {
  for (let i = 0; i < this.children.length; i++) {
    if (this.children[i].value === child) {
      this.children[i].parent = null;
      this.children.splice(i, 1);
      return true;
    }
  }
}

treeMethods.contains = function(target) {
  let result = false;
  if (this.value === target) {
    return true;
  } else {      
    this.children.forEach(child => {
      if (child.contains(target) === true) {
        result = true;
      }
    });
  } 
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 .contains is linear.
 .addChild is constant.
 */
