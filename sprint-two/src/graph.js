// Instantiate a new graph
var Graph = function() {
  this.nodeList = [];
  this.edgeList = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  let newNode = {};
  newNode.value = node;
  this.nodeList.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (let i = 0; i < this.nodeList.length; i++) {
    if (this.nodeList[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let i = 0; i < this.nodeList.length; i++) {
    if (this.nodeList[i].value === node) {
      this.nodeList.splice(i, 1);
    }
  }
  
  for (let i = 0; i < this.edgeList.length; i++) {
    if (this.edgeList[i][0] === node || this.edgeList[i][1] === node) {
      this.edgeList.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  let smaller = fromNode;
  let larger = toNode;
  if (fromNode > toNode) {
    smaller = toNode;
    larger = fromNode;
  }
  for (let i = 0; i < this.edgeList.length; i++) {
    if (this.edgeList[i][0] === smaller && this.edgeList[i][1] === larger) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.hasEdge(fromNode, toNode)) {
    let smaller = fromNode;
    let larger = toNode;
    if (fromNode > toNode) {
      smaller = toNode;
      larger = fromNode;
    }
    this.edgeList.push([smaller, larger]);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    let smaller = fromNode;
    let larger = toNode;
    if (fromNode > toNode) {
      smaller = toNode;
      larger = fromNode;
    }
    
    for (let i = 0; i < this.edgeList.length; i++) {
      if (this.edgeList[i][0] === smaller && this.edgeList[i][1] === larger) {
        this.edgeList.splice(i, 1);
      }
    }   
  
  }
     
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodeList.forEach(node => cb(node.value));
};

/*
 * Complexity: What is the time complexity of the above functions?
  .addNode is constant time 
  .contains is linear given n = number of nodes
  .removeNode is O(n^2) given n = number of nodes
  .hasEdge is linear given n = number of edges
  .addEdge is constant
  .removeEdge is linear given n = number of edges
  .forEachNode is linear given n = number of nodes
 */


