var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($rp) {
    $rp
        .when('/', {
            template: '<h1>{{model.message}}</h1>',
            controller: 'ViewCtrl',
            resolve: {
                load: viewCtrl.loadData
            }
        }).otherwise({
            redirectTo: '/'
        })
}]);

app.controller('AppCtrl', ['$rootScope', function(rootScope) {
    rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
        console.log(rejection)
    });
}]);

var viewCtrl = app.controller('ViewCtrl', ['$scope', function(scope) {
    scope.model = {
        message: 'This is my app!!'
    };
}]);

viewCtrl.loadData = function($q, $timeout) {
    var defer = $q.defer();
    $timeout(function() {
        defer.reject('Your network is down!')
    }, 500);
    return defer.promise;
};
