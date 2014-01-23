var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($rp) {
    $rp.when('/map/:country/:state/:city', {
        templateUrl: 'app.html',
        controller: 'AppCtrl'
    }).otherwise({
        template: '<h1>This doesn\'t exist!</h1>'
    });
}]);

app.controller('AppCtrl', ['$scope', '$routeParams', function(scope, params){
    scope.model = {
        message: 'Address: ' + params.country
            + ', ' + params.state
            + ', ' + params.city
    }
}]);