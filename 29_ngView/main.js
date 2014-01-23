var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($rp) {
    $rp.when('/',{
        templateUrl: 'app.html',
        controller: 'AppCtrl'
    }).otherwise();
}]);

app.controller('AppCtrl', ['$scope', function(scope){
    scope.model = {
        message: 'This is my app!!!'
    }
}]);