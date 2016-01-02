app.controller('MainController', ['$scope', 'northBound', 'southBound', function($scope, northBound, southBound) {
    northBound.success(function(data) {
        $scope.arrivals = data["45"];
        $scope.detours = data;
    });
}, function($s)]);