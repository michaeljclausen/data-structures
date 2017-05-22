describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });
  
  it('should have correct initial value', function() {
    expect(binarySearchTree.value).to.equal(5);   
  });
    
  it('should insert a child', function() {
    binarySearchTree.insert(1);
    expect(binarySearchTree.left.value).to.equal(1);   
  });

  it('should have methods named "insert", "contains", and "depthFirstLog"', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have working contains when there is only one node', function() {
    expect(binarySearchTree.contains(5)).to.equal(true);
    expect(binarySearchTree.contains(7)).to.equal(false);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });
  
  it('should have a working "contains" method for single branched tree', function() {
    binarySearchTree.insert(1);
    binarySearchTree.insert(3);
    binarySearchTree.insert(2);
    expect(binarySearchTree.contains(2)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(this.value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3]);
  });

  it('should execute a callback on every value in a tree using "depthFirstInOrderLog"', function() {
    var array = [];
    var func = function(value) { array.push(this.value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstInOrderLog(func);
    expect(array).to.eql([2, 3, 5]);
  });

  it('should execute a callback on every value in a tree using "breadthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(3);
    binarySearchTree.insert(9);
    binarySearchTree.insert(1);
    binarySearchTree.insert(4);
    binarySearchTree.insert(20);
    binarySearchTree.insert(16);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5, 3, 9, 1, 4, 20, 16]);
  });

  it('should return the max and min depth of the tree', function() {
    binarySearchTree.insert(3);
    binarySearchTree.insert(9);
    binarySearchTree.insert(1);
    binarySearchTree.insert(4);
    binarySearchTree.insert(20);
    binarySearchTree.insert(16);
    binarySearchTree.insert(18);

    const result = binarySearchTree.checkDepth();
    const MAX = result[0];
    const MIN = result[1];

    expect(MAX).to.equal(5);
    expect(MIN).to.equal(3);
  });

  it('should rebalance an unbalanced tree', function() {
    binarySearchTree.insert(3);
    binarySearchTree.insert(6);
    binarySearchTree.insert(2);
    binarySearchTree.insert(4);
    binarySearchTree.insert(10);
    binarySearchTree.insert(7);
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);

    const result = binarySearchTree.checkDepth();
    const MAX = result[0];
    const MIN = result[1];

    expect(MAX).to.equal(4);
    expect(MIN).to.equal(3);

    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([6, 3, 8, 2, 4, 7, 9, 5, 10]);

  });
});
