var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function(){

    it('should have all the necessary methods', function(){
    });
  });
});

describe('the todo.util methods', function() {

  it('should have methods named "trimTodoName", "isValidTodoName", and "getUniqueId"', function() {
    expect(todo.util.trimTodoName).to.be.a('function');
    expect(todo.util.isValidTodoName).to.be.a('function');
    expect(todo.util.getUniqueId).to.be.a('function');
  });

  describe('the todo.util.trimTodoName method', function() {

    var test, result;

    beforeEach(function() {
      test = ' walk the dog ';
      result = todo.util.trimTodoName(test);
    });

    it('should trim whitespace before and after each todo', function() {
      assert.equal(result, 'walk the dog');
    });

    it('should not trim whitespace in between the todo', function(){
      result.should.have.length(12);
    });
  });

  describe('the todo.util.isValidTodoName method', function() {

    var todoName, result;

    beforeEach(function() {
      todoName = 'r';
      result = todo.util.isValidTodoName(todoName);
    });

    it('should check if a todo name contains at least 2 non-whitespace characters', function() {
      var test1 = 'r';
      var test2 = 'sleep';
      expect(todo.util.isValidTodoName(test1)).to.be.false;
      expect(todo.util.isValidTodoName(test2)).to.be.true;
    });
  });

  describe('the todo.util.getUniqueId method', function() {

    var lastId;

    beforeEach(function() {
      lastId = 1;
    });

    it('should increment a counter variable when invoked', function() {
      lastId = lastId + todo.util.getUniqueId();
      lastId.should.equal(2);
      lastId = lastId + todo.util.getUniqueId();
      expect(lastId).to.not.equal(2);
    });
  });
});
