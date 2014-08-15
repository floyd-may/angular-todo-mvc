describe('todoController', function () {
    var $scope;

    // declare that we're mocking the todo-mvc module
    beforeEach(module('todo-mvc'));

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();

        $controller('todoController', { $scope: $scope });
    }));

    describe('todo item capture', function () {
        it('should have a createTodo function', function () {
            expect($scope.createTodo).toEqual(jasmine.any(Function));
        });

        it('should create a todo item on the todos array when createTodo is called', function () {
            var todoText = 'Sample Todo Item';
            $scope.newTodo = todoText;

            $scope.createTodo();

            expect($scope.todos).toEqual([{ title: todoText }]);
        });

        it('should clear newTodo when createTodo is called', function () {
            $scope.newTodo = 'Sample Todo Item';
            
            $scope.createTodo();

            expect($scope.newTodo).toEqual('');
        });

        it('should not modify todos when createTodo is called with empty text present', function () {
            $scope.newTodo = 'asdf';
            
            $scope.createTodo();
            // assuming that newTodo is cleared, call again
            $scope.createTodo();

            expect($scope.todos).toEqual([{ title: 'asdf' }]);
        });

        it('should append to todos array when subsequent items are added', function () {
            $scope.newTodo = 'todo 1';

            $scope.createTodo();

            $scope.newTodo = 'todo 2';

            $scope.createTodo();

            var expectedTodos = [
                { title: 'todo 1' },
                { title: 'todo 2' }
            ];

            expect($scope.todos).toEqual(expectedTodos);
        });
    });
    
});