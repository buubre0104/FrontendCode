/**
 * Created by user on 6/24/2016.
 */
angular.module('hrApp').controller('OtherController',['$scope',function($scope) {
    $scope.title='Ceva';
   $scope.setTitle = function(){
       $scope.title='Altceva...';
   }
}]);
