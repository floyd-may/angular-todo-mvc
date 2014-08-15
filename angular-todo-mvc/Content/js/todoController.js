angular.module('todo-mvc').controller('todoController', function ($scope) {
    $scope.todos = [];

    $scope.createTodo = function () {
        if (!$scope.newTodo) {
            return;
        }

        $scope.todos.push({ title: $scope.newTodo });

        $scope.newTodo = '';
    }
});