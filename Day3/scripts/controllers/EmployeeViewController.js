hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location','commonResourcesFactoryBackup',
    function($scope, $http, $routeParams, $location, commonResourcesFactoryBackup) {

        $scope.employee = {};
        
        // TODO #HR6 get employee by id
        $http({method:"GET",url:commonResourcesFactoryBackup.findOneEmployeeUrl+$routeParams.employeeid})
            .success(function(data,status,headers,config){
                $scope.employee = data;
            })
            .error(function(data,status,headers,config){
                alert("error " + status);
            });

        
        $scope.back = function() {
            // TODO back to Employee List page
            $location.url('/employeeslist');
        }

    }]);