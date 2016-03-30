app.factory('routeTrace', ['$http', function($http) {
    return $http({
          method: 'GET',
          url: '45.json',
          withCredentials: true
        })
        .success(function(data) {
            return (data);
        })
        .error(function(err) {
            return (err);
        });
}]).factory('northSched', ['$http', function($http) {
    return $http({
          method: 'JSONP',
          // http://blog.novanet.no/angularjs-with-jsonp-and-how-i-get-to-work-on-time/
          url: 'http://www3.septa.org/hackathon/BusSchedules/?req1=16608&req2=45&req3=i&req6=4&callback=JSON_CALLBACK',
        })
        .success(function(data) {
            return (data);
        })
        .error(function(err) {
            return (err);
        });
}]).factory('southSched', ['$http', function($http) {
    return $http({
          method: 'JSONP',
          url: 'http://www3.septa.org/hackathon/BusSchedules/?req1=16498&req2=45&req3=i&req6=4&callback=JSON_CALLBACK',
        })
        .success(function(data) {
            return (data);
        })
        .error(function(err) {
            return (err);
        });
}]).factory('locations', ['$http', function($http) {
    return $http({
          method: 'JSONP',
          url: 'http://www3.septa.org/hackathon/TransitView/?route=45&callback=JSON_CALLBACK',
        })
        .success(function(data) {
            return (data);
        })
        .error(function(err) {
            return (err);
        });

}]).factory('detours', ['$http', function($http) {
    return $http({
          method: 'JSONP',
          url: 'http://www3.septa.org/hackathon/BusDetours/?req1=45&callback=JSON_CALLBACK',
        })
        .success(function(data) {
            return (data);
        })
        .error(function(err) {
            return (err);
        });

}]);