describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });
  
  it('should not add duplicate values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Susan Sarandon');
    expect(set.contains('Susan Sarandon')).to.equal(true);
    expect(set._storage.length).to.equal(1);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);

    set.add(3);
    set.remove(3);
    expect(set.contains(3)).to.equal(false);
  });
  
  it('should do nothing if .remove is called with a value not present in the set', function() {
    set.add('Mel Gibson');
    set.remove('Pam Gibson');
    expect(set.contains('Mel Gibson')).to.equal(true);
  });

  it('should add number values to a set', function() {
    set.add(4);
    set.add(8.94);
    expect(set.contains(4)).to.equal(true);
    expect(set.contains(8.94)).to.equal(true);
  });

  it('should add objects of any kind to a set', function() {
    let obj = { 1: 3, 2: 'paper' };
    set.add(obj);
    set.add(8.94);
    expect(set.contains(obj)).to.equal(true);
    expect(set.contains(8.94)).to.equal(true);
  });

});
