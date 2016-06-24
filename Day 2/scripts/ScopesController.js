/**
 * Created by user on 6/24/2016.
 */
angular.module('hrApp').controller('ScopesController',['$scope','$rootScope', function($scope,$rootScope) {
    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable = function () {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function (val) {
        $scope.firstVariable = val;
    };
}]);


