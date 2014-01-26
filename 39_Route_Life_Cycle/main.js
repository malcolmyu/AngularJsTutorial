var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($rp) {
    $rp
        .when('/', {
            template: '<h1 ng-click="changeRoute()">Change Route</h1>',
            controller: 'ViewCtrl'
        }).when('/new', {
            templateUrl: 'new.html',
            controller: 'NewCtrl',
            resolve: {
                load: viewCtrl.loadData
            }
        }).otherwise({
            redirectTo: '/'
        })
}]);

app.controller('AppCtrl', ['$scope', '$rootScope', '$route', '$location',
    function(scope, rootScope, route, location) {
        rootScope.$on('$routeChangeStart', function(event, current, previous, rejection) {
            console.log(scope, rootScope, route, location)
        });
        rootScope.$on('$routeChangeSuccess', function(event, current, previous, rejection) {
            console.log(scope, rootScope, route, location)
        });
    }]);

var viewCtrl = app.controller('ViewCtrl', ['$scope', '$location', function(scope, location) {
    scope.changeRoute = function() {
        console.log(scope);
        location.path('/new');
    }
}]);

viewCtrl.loadData = function($q, $timeout) {
    var defer = $q.defer();
    $timeout(function() {
        defer.resolve({message: 'success'})
    }, 500);
    return defer.promise;
};

app.controller('NewCtrl', ['$scope', 'load', '$template', function(scope, load, temp) {
    console.log(scope, load, temp);
}]);
