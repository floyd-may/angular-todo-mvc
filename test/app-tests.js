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

      it('should clear the input box after adding', function(){
          $scope.newTodo = 'something';

          $scope.addNewTodo();

          expect($scope.newTodo).toEqual('');
      });
    });

  describe('items remaining count', function(){
      it('should show count of items remaining', function(){
          $scope.todos = [
            {completed: true},
            {completed: false},
            {completed: false},
            {completed: true},
            {completed: true}
          ];

          $scope.$digest();

          expect($scope.uncompletedCount)
            .toBe(2);


      });
  });
});
