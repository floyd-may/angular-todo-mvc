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

    $scope.$watch('todos', function(){
        $scope.uncompletedCount =
            $scope.todos.reduce(function(agg, val){
                if(!val.completed){
                    return agg + 1;
                }

                return agg;
            }, 0);
    }, true);

}]);
