hrApp.service('EmployeeService', ['$http','$routeParams','CommonResourcesFactoryBackup', function ($http,$routeParams,CommonResourcesFactoryBackup) {
        return {
            findById: function (employeeId) {
                return $http.get(CommonResourcesFactoryBackup.findOneEmployeeUrl + employeeId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "id": 100,
                            "firstName": "Steven",
                            "lastName": "King",
                            "email": "SKING",
                            "phoneNumber": "515.123.4567",
                            "hireDate": "1987-06-17",
                            "jobId": 1,
                            "salary": 24000.00,
                            "commissionPct": null,
                            "managerId": null,
                            "departmentId": 90
                        };
                    });
            },
            findAll: function () {
             return  $http({method:"GET",url:CommonResourcesFactoryBackup.findAllEmployeesUrl})
                 .success(function(data,status,headers,config){
                     return data;
                 })
                 .error(function(data,status,headers,config){
                     return {error: "error GET managers: "};
                 });
            },
            findOne: function () {
                return  $http({method:"GET",url:CommonResourcesFactoryBackup.findOneEmployeeUrl + $routeParams.employeeId})
                    .success(function(data,status,headers,config){
                        return data;
                    })
                    .error(function(data,status,headers,config){
                        return {error: "error GET one employee: "};
                    });
            },
            deleteOne:function(employeeId){
                return  $http({method:"DELETE",url:CommonResourcesFactoryBackup.findOneEmployeeUrl + employeeId})
                    .success(function(data,status,headers,config){
                        return data;
                    })
                    .error(function(data,status,headers,config){
                        return {error: "error GET one employee: "};
                    });
            }
        }
    }]
);