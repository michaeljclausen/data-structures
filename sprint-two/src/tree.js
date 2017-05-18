var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

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
