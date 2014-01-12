var app = angular.module('phoneApp', []);

app.controller('AppCtrl', function($scope) {
    this.sayHi = function() {
        alert('Hi!');
    }
    return $scope.AppCtrl = this;
});