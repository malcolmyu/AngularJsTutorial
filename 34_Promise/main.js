var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($rp) {
    $rp
        .when('/', {
            template: '<h1>{{model.message}}</h1>',
            controller: 'AppCtrl'
        }).otherwise({
            redirectTo: '/'
        })
}]);

app.controller('AppCtrl', ['$scope', '$q',  function(scope, Q) {
    scope.model = {
        message: 'This is my app!!'
    };

    var defer = Q.defer();
    defer.promise
        .then(function(weapon) {
            console.log('This is my weapon: ' + weapon);
            return 'bow';
        }).then(function(weapon) {
            console.log('And my weapon: ' + weapon);
            return 'axe';
        }).then(function(weapon) {
            console.log('And my: ' + weapon);
        });

    defer.resolve('sword');
}]);