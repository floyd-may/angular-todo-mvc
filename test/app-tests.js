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

  describe('addNewTodo function', function(){
    describe('with no todos present', function(){
      beforeEach(function(){
        createController();
        $scope.newTodo = "new todo";
        $scope.addNewTodo();
      });

      it('should add todo', function(){
        expect($scope.todos).toEqual([{title:"new todo"}]);
      });

      it('should clear text from input', function(){
        expect($scope.newTodo).toEqual("");
      });
    });

    it('should save text entered on form submit', function(){
      createController();
      $scope.newTodo = "frank joe bob";
      $scope.addNewTodo();
      expect($scope.todos).toEqual([{title:"frank joe bob"}]);
    });

    it('should append text entered on form submit', function(){
      createController();
      $scope.todos = [{title:"herp derp"}];
      $scope.newTodo = "frank joe bob";
      $scope.addNewTodo();
      expect($scope.todos).toEqual(
        [{title:"herp derp"},
         {title:"frank joe bob"}]);
    });
    it('should not append empty todo on form submit', function(){
      createController();
      $scope.todos = [{title:"herp derp"}];
      $scope.newTodo = "";
      $scope.addNewTodo();
      expect($scope.todos).toEqual(
        [{title:"herp derp"}]);
    });




  });
  describe('counts',function(){
    it('should be 1 when a single todo exists',function(){
      createController();
      $scope.todos = [{title:"herp derp2"}];
      $scope.$digest();
      expect($scope.incompleteCount).toBe(1);
    });
    it('should increment by 1 after a second one is added',function(){
      createController();
      $scope.todos=[{title:"herp derp2"},{title:"herp derp3"}];
      $scope.$digest();
      expect($scope.incompleteCount).toBe(2);
    });
  });
});
