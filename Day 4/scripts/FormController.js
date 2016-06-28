/**
 * Created by user on 6/28/2016.
 */

hrApp.controller('FormController', ['$scope', function ($scope) {
         $scope.ceva=function(){
             if($scope.myForm.input.$valid==true){
                 alert("Input valid!!!");
             }
         }
}]);