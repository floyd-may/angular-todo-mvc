angular.module('todo-mvc').controller('todoController', function ($scope) {
    $scope.createTodo = function () {
        if (!$scope.newTodo) {
            return;
        }

        $scope.todos = [{ title: $scope.newTodo }];

        $scope.newTodo = '';
    }
});