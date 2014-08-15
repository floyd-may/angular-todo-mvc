angular.module('todo-mvc').controller('todoController', function ($scope) {
    $scope.createTodo = function () {
        $scope.todos = [{ title: $scope.newTodo }];
    }
});