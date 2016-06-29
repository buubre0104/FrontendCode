/**
 * Created by user on 6/29/2016.
 */


hrApp.service('JobsService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {

            findAll: function () {
                return  $http({method:"GET",url:CommonResourcesFactoryBackup.findAllJobsUrl})
                    .success(function(data,status,headers,config){
                        return data;
                    })
                    .error(function(data,status,headers,config){
                        return {error: "error GET jobs: "};
                    });
            }
        }
    }]
);