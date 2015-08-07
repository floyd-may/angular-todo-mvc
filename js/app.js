angular.module('todo-mvc', []).controller('todos', [
'$scope',
function($scope){
    $scope.addNewTodo = function(){
        $scope.todos = $scope.todos || [];

        $scope.todos.push({
            text: $scope.newTodo
        });

        $scope.newTodo = '';
    };

}]);
