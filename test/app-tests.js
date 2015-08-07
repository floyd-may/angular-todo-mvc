describe('tests for todo-mvc app', function(){
  var $scope, createController;

  beforeEach(module('todo-mvc'));

  beforeEach(inject(function($injector){
    $scope = $injector.get('$rootScope').$new();

    var $controller = $injector.get('$controller');

    $controller('todos', { $scope: $scope });

  }));

  describe('adding a new todo (via addNewTodo())', function(){

      it('should display todo when user hits enter', function(){

          $scope.newTodo = 'todo text';

          $scope.addNewTodo();

          expect($scope.todos).toEqual([{text: 'todo text'}]);
      });

      it('should add a new element to an existing list of todos', function(){
          $scope.todos = [{text: 'something'}];

          $scope.newTodo = 'todo text';

          $scope.addNewTodo();

          expect($scope.todos).toEqual([
              {text: 'something'},
              {text: 'todo text'}
          ]);
      });
    });
});
