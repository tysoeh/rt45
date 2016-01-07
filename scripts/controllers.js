app.controller('MainController', ['$scope', function($scope) {}])
    .controller('NorthController', ['$scope', 'routeTrace', 'northSched', 'locations', 'detours', function($scope, routeTrace, northSched, locations, detours) {
        northSched.success(function(data) {
            $scope.arrivals = data["45"];
        });
        detours.success(function(data) {
            $scope.detours = data.route_info;
        });
        routeTrace.success(function(data) {

            //var lines = array of LineString objects, each containing a 'coordinates:' array containing coord pair arrays
            var lines = data.features[0].geometry.geometries;
            console.log(data.features[0].geometry.geometries[2].coordinates);

            //for each LineString object, tunnel into the array of coordinate pair arrays
            for (i = 0; i < lines.length; i++) {
                var linePoints = lines[i].coordinates;

                //for each coordinate pair, extract lat and lon, save to object, push to paths object array
                for (j = 0; j < linePoints.length; j++) {
                    var lat = parseFloat(linePoints[j][1]);
                    var lng = parseFloat(linePoints[j][0]);
                    var coords = {
                        lat: lat,
                        lng: lng
                    };
                    //console.log(coords);
                    $scope.paths.polyline.latlngs.push(coords);
                }
            }
        });
        locations.success(function(data) {
            var buses = data.bus;


            //for each bus take the lat and lng and push to marker object array
            for (i = 0; i < buses.length; i++) {
                if (buses[i].Direction == "NorthBound") {
                    var lat = parseFloat(buses[i].lat);
                    var lng = parseFloat(buses[i].lng);
                    var coords = {
                        lat: lat,
                        lng: lng,
                        icon: {
                            iconUrl: 'apple-touch-icon.png',
                            iconSize: [40, 40]
                        }
                    };
                    console.log(coords);
                    $scope.markers.push(coords);
                    console.log($scope.markers);
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
        $scope.markers.push({
            lat: 39.931609,
            lng: -75.16122,
        });

        $scope.paths = {
            polyline: {
                type: "polyline",
                latlngs: []
            }
        };
        $scope.direction = "North";
        $scope.date = new Date();
    }])

.controller('SouthController', ['$scope', 'routeTrace', 'southSched', 'locations', 'detours', function($scope, routeTrace, southSched, locations, detours) {
    southSched.success(function(data) {
        $scope.arrivals = data["45"];
    });
    detours.success(function(data) {
        $scope.detours = data.route_info;
    });
    routeTrace.success(function(data) {

        //var lines = array of LineString objects, each containing a 'coordinates:' array containing coord pair arrays
        var lines = data.features[0].geometry.geometries;
        console.log(data.features[0].geometry.geometries[2].coordinates);

        //for each LineString object, tunnel into the array of coordinate pair arrays
        for (i = 0; i < lines.length; i++) {
            var linePoints = lines[i].coordinates;

            //for each coordinate pair, extract lat and lon, save to object, push to paths object array
            for (j = 0; j < linePoints.length; j++) {
                var lat = parseFloat(linePoints[j][1]);
                var lng = parseFloat(linePoints[j][0]);
                var coords = {
                    lat: lat,
                    lng: lng
                };
                //console.log(coords);
                $scope.paths.polyline.latlngs.push(coords);
            }
        }
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
                    lng: lng,
                    icon: {
                        iconUrl: 'apple-touch-icon.png',
                        iconSize: [40, 40]
                    }
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
    $scope.markers.push({
        lat: 39.946629,
        lng: -75.161116
    });
    $scope.paths = {
        polyline: {
            type: "polyline",
            latlngs: []
        }
    };
    $scope.direction = "South";
    $scope.date = new Date();

}]);