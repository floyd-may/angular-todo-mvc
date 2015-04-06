describe('tests for todo-mvc app', function(){
  var $scope, createController;

  beforeEach(module('todo-mvc'));

  beforeEach(inject(function($injector){
    $scope = $injector.get('$rootScope').$new();

    var $controller = $injector.get('$controller');

    createController = function(){
      $controller('todos', { $scope: $scope });
    };

  }));

  it('should exist', function(){
    createController();
    expect(1).toBe(1);
  });
});
