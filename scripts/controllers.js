app.controller('MainController', ['$scope', function($scope) {}])

.controller('NorthController', ['$scope', 'northBound', function($scope, northBound) {
    northBound.success(function(data) {
        $scope.arrivals = data["45"];
        $scope.detours = data;
    });
    $scope.info = "The next buses heading to Center City from 10th and Passyunk are scheduled to arrive at:";

    $scope.date = new Date();

}])

.controller('SouthController', ['$scope', 'southBound', function($scope, southBound) {
    southBound.success(function(data) {
        $scope.arrivals = data["45"];
        $scope.detours = data;
    });
        $scope.info = "The next buses heading to South Philly from 12th and Spruce are scheduled to arrive at:";
    $scope.date = new Date();

}]);