var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($rp) {
    $rp
        .when('/', {
            template: '<h1>{{model.message}}</h1>',
            controller: 'AppCtrl',
            resolve: {
                app: function($q, $timeout) {
                    var defer = $q.defer();
                    $timeout(function() {
                        defer.resolve()
                    }, 2000);
                    return defer.promise;
                }
            }
        }).otherwise({
            redirectTo: '/'
        })
}]);

app.controller('AppCtrl', ['$scope', function(scope) {
    scope.model = {
        message: 'This is my app!!'
    };
}]);