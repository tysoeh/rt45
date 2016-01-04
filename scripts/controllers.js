app.controller('MainController', ['$scope', function($scope) {}])
    .controller('NorthController', ['$scope', 'northSched', 'locations', 'detours', function($scope, northSched, locations, detours) {
        northSched.success(function(data) {
            $scope.arrivals = data["45"];
        });
        detours.success(function(data) {
            $scope.detours = data.route_info;
        });
        $scope.loadPaths = function loadPaths() {
            $http.get('../45path.json').success(function(data) {
                $scope.45 path = data;
            });
        };
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
        $scope.info = "The next buses to arrive at 10th and Passyunk are:";

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
        lat: 39.92485,
        lng: -75.164125,
        zoom: 14
    };
    $scope.markers = new Array();
    $scope.info = "The next buses heading to South Philly from 12th and Spruce are scheduled to arrive at:";
    $scope.date = new Date();

}]);