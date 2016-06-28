/**
 * Created by user on 6/24/2016.
 */
//hrApp.controller('MenuController',['$scope', function($scope)
angular.module('hrApp').controller('MenuController',['$scope',function($scope) {
    $scope.demoActionList = [
        {
            label: "OtherScope",
            url: "views/childscope.html"
        },
        {
            label: "Demo actions",
            url: "views/demomath.html"
        }

    ]
}]);
