var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($rp) {
    $rp
        .when('/', {
            template: '<h1>{{model.message}}</h1>',
            controller: 'AppCtrl',
            resolve: {
                load: appCtrl.loadData,
                prep: appCtrl.prepData
            }
        }).otherwise({
            redirectTo: '/'
        })
}]);

var appCtrl = app.controller('AppCtrl', ['$scope', '$route', function(scope, route) {
    console.log(route);
    scope.model = {
        message: 'This is my app!!'
    };
}]);

appCtrl.loadData = function($q, $timeout) {
    var defer = $q.defer();
    $timeout(function() {
        defer.resolve('load-data')
    }, 2000);
    return defer.promise;
};

appCtrl.prepData = function($q, $timeout) {
    var defer = $q.defer();
    $timeout(function() {
        defer.resolve('prep-data')
    }, 2000);
    return defer.promise;
};
