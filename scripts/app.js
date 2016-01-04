var app = angular.module('rt45', ['ngRoute', 'leaflet-directive']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'MainController',
            templateUrl: '../views/home.html'
        })
        .when('/north', {
            controller: 'NorthController',
            templateUrl: '../views/data.html'
        })
        .when('/south', {
            controller: 'SouthController',
            templateUrl: '../views/data.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});