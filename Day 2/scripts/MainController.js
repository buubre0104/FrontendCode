/**
 * Created by user on 6/24/2016.
 */
angular.module('hrApp').controller('MainController',['$scope','$rootScope', function($scope,$rootScope){
    $scope.someName="name";
    console.log($scope.someName);
}]);
