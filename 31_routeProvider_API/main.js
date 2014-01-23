var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($rp) {
    $rp.when('/', {
        templateUrl: 'app.html',
        controller: 'AppCtrl'
    }).when('/pizza', {
        template: '<h1>Yum!!</h1>'
    }).otherwise({
        template: '<h1>This doesn\'t exist!</h1>'
    });
}]);

app.controller('AppCtrl', ['$scope', function(scope){
    scope.model = {
        message: 'This is my app!!!'
    }
}]);