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

  it('should display todo when user hits enter', function(){
      $scope.newTodo = 'todo text';

      $scope.addNewTodo();

      expect($scope.todos).toEqual([{text: 'todo text'}]);

  });
});
