app.factory('northBound', ['$http', function($http) {
        return $http.get('http://cors.io/?u=http://www3.septa.org/hackathon/BusSchedules/?req1=16608&req2=45&req3=i&req6=4')
            .success(function(data) {
                return (data);
            })
            .error(function(err) {
                return (err);
            }).$http.get('http://cors.io/?u=http://www3.septa.org/hackathon/BusDetours/?req1=45')
            .success(function(data) {
                return (data);
            })
            .error(function(err) {
                return (err);
            });

    }]).factory('southBound', ['$http', function($http) {
                return $http.get('http://cors.io/?u=http://www3.septa.org/hackathon/BusSchedules/?req1=16608&req2=45&req3=i&req6=4')
                    .success(function(data) {
                        return (data);
                    })
                    .error(function(err) {
                        return (err);
                    }).$http.get('http://cors.io/?u=http://www3.septa.org/hackathon/BusDetours/?req1=45')
                    .success(function(data) {
                        return (data);
                    })
                    .error(function(err) {
                        return (err);
                    });
                }]);