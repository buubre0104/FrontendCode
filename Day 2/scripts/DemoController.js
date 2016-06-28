/**
 * Created by bre on 6/28/2016.
 */

angular.module('hrApp').controller('DemoController',['$scope',function($scope){

    $scope.calculate = function() {
        $scope.op1 = $scope.a + $scope.b;
        $scope.op2 = $scope.a - $scope.b;
        $scope.op3 = $scope.a * $scope.b;
        $scope.op4 = $scope.a / $scope.b;
    }
}]);
