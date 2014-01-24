var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($rp) {
    $rp.when('/pizza/:crust/:topping', {
        redirectTo: function(routeParams, path, search) {
            console.log(routeParams);
            console.log(path);
            console.log(search);
            return '/' + routeParams.crust;
        }
    }).when('/deep', {
        template: '<h1>Deep Dish</h1>>'
    }).otherwise({
        redirectTo: '/'
    });
}]);

app.controller('AppCtrl', ['$scope', '$routeParams', function(scope, params){
    scope.model = {
        message: 'Address: ' + params.country
            + ', ' + params.state
            + ', ' + params.city
    }
}]);