describe('entryController', function () {
    var $scope;

    // declare that we're mocking the todo-mvc module
    beforeEach(module('todo-mvc'));

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();

        $controller('entryController', { $scope: $scope });
    }));

    it('should not explode', function () {
        expect(1).toBe(1);
    });
});