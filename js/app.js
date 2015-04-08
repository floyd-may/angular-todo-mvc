angular.module('todo-mvc', []).controller('todos', [
'$scope',
function($scope){
  $scope.addNewTodo = function(){
    $scope.todos = $scope.todos || [];
    if ($scope.newTodo) {
      $scope.todos.push({ title: $scope.newTodo });
      $scope.newTodo = "";
    }
  };

  $scope.$watch('todos', function(){
    $scope.incompleteCount=$scope.todos.length;
  }, true);
}]);
