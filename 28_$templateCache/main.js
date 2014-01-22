var app = angular.module('app', []);

app.run(function($templateCache){
    $templateCache.put('zippy.html', '<div><h3 ng-click="toggleContent()">{{title}}</h3>' +
        '<div ng-show="isContentVisible" ng-transclude></div></div>');
});

app.directive('zippy', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@'
        },
        templateUrl: 'zippy.html',
        link: function(scope) {
            scope.isContentVisible = false;

            scope.toggleContent = function() {
                scope.isContentVisible = !scope.isContentVisible;
            }
        }
    }
});