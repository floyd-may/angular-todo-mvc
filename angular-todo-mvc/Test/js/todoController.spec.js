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
    });
    
});