/**
 * Created by user on 6/29/2016.
 */


hrApp.service('DepartmentsService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {

            findAll: function () {
                return  $http({method:"GET",url:CommonResourcesFactoryBackup.findAllDepartmentsUrl})
                    .success(function(data,status,headers,config){
                        return data;
                    })
                    .error(function(data,status,headers,config){
                        return {error: "error GET departments: "};
                    });
            }
        }
    }]
);