angular.module('todo-mvc', []).controller('todos', [
'$scope',
function($scope){
    $scope.addNewTodo = function(){
        $scope.todos = [{
            text: $scope.newTodo
        }];
    };

}]);
