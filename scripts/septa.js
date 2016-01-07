app.factory('routeTrace', ['$http', function($http) {
    return $http.get('45.json')
        .success(function(data) {
            return (data);
        })
        .error(function(err) {
            return (err);
        });
}]).factory('northSched', ['$http', function($http) {
    return $http.get('http://cors.io/?u=http://www3.septa.org/hackathon/BusSchedules/?req1=16608&req2=45&req3=i&req6=4')
        .success(function(data) {
            return (data);
        })
        .error(function(err) {
            return (err);
        });
}]).factory('southSched', ['$http', function($http) {
    return $http.get('http://cors.io/?u=http://www3.septa.org/hackathon/BusSchedules/?req1=16498&req2=45&req3=i&req6=4')
        .success(function(data) {
            return (data);
        })
        .error(function(err) {
            return (err);
        });
}]).factory('locations', ['$http', function($http) {
    return $http.get('http://cors.io/?u=http://www3.septa.org/hackathon/TransitView/?route=45')
        .success(function(data) {
            return (data);
        })
        .error(function(err) {
            return (err);
        });

}]).factory('detours', ['$http', function($http) {
    return $http.get('http://cors.io/?u=http://www3.septa.org/hackathon/BusDetours/?req1=45')
        .success(function(data) {
            return (data);
        })
        .error(function(err) {
            return (err);
        });

}]);