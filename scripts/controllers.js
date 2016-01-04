app.controller('MainController', ['$scope', function($scope) {}])
    .controller('NorthController', ['$scope', 'routeTrace', 'northSched', 'locations', 'detours', function($scope, routeTrace, northSched, locations, detours) {
        northSched.success(function(data) {
            $scope.arrivals = data["45"];
        });
        detours.success(function(data) {
            $scope.detours = data.route_info;
        });
        /*routeTrace.success(function(data) {
            $scope.paths.push(data.features[0].geometry.coordinates[0][0]);
            console.log(data.features[0].geometry.coordinates[0][0]);
        });*/
        locations.success(function(data) {
            var buses = data.bus;


            //for each bus take the lat and lng and push to marker object array
            for (i = 0; i < buses.length; i++) {
                if (buses[i].Direction == "NorthBound") {
                    var lat = parseFloat(buses[i].lat);
                    var lng = parseFloat(buses[i].lng);
                    var coords = {
                        lat: lat,
                        lng: lng
                    };
                    console.log(coords);
                    $scope.markers.push(coords);
                }
            }
        });
        //center map on the beginning of northbound route
        $scope.center = {
            lat: 39.92485,
            lng: -75.164125,
            zoom: 14
        };
        $scope.markers = new Array();
        $scope.paths = new Array();

        $scope.direction = "North";

        $scope.date = new Date();


    }])

.controller('SouthController', ['$scope', 'southSched', 'locations', 'detours', function($scope, southSched, locations, detours) {
    southSched.success(function(data) {
        $scope.arrivals = data["45"];
    });
    detours.success(function(data) {
        $scope.detours = data.route_info;
    });
    locations.success(function(data) {
        var buses = data.bus;

        //for each bus take the lat and lng and push to marker object array
        for (i = 0; i < buses.length; i++) {
            if (buses[i].Direction == "SouthBound") {
                //var lat = parseFloat(buses[i].lat);
                var lng = parseFloat(buses[i].lng);
                var coords = {
                    lat: parseFloat(buses[i].lat),
                    lng: lng
                };
                console.log(coords);
                $scope.markers.push(coords);
            }
        }
    });
    //center map on the beginning of southbound route
    $scope.center = {
        lat: 39.952187,
        lng: -75.15995,
        zoom: 14
    };
    $scope.markers = new Array();
    $scope.direction = "South";
    $scope.date = new Date();

}]);