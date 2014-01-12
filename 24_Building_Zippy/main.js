var app = angular.module('app', []);

app.directive('zippy', function() {
    return {
        restrict: 'E',
        scope: {
            title: '@'
        },
        transclude: true,
        templateUrl: 'zippy.html',
        link: function(scope) {
            scope.isContentVisible = false;
            scope.toggleContent = function() {
                scope.isContentVisible = !scope.isContentVisible;
            }
        }
    }
});