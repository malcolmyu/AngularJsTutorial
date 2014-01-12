var app = angular.module('phoneApp', []);

app.controller('AppCtrl', function($scope){
    $scope.callHome = function(msg) {
        alert(msg);
    }
})

app.directive('phone', function(){
    return {
        restrict: 'E',
        scope: {
            dial: '&'
        },
        template: '<input type="text" ng-model="value">'
            + '<div class="button" ng-click="dial({message:value})">Call Home</div>'
    }
})