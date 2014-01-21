var app = angular.module('app', []);

app.directive('dumbPassword', function() {
    var validElement = angular.element('<div>{{model.input}}</div>'),
        link = function(scope) {
        scope.$watch('model.input', function(value){
            if (value === 'password') {
                validElement.toggleClass("alert-box alert")
            }
        })
    };
    return {
        restrict: 'E',
        template: '<div><input type="text" ng-model="model.input"></div>',
        compile: function(tElem) {
            tElem.append(validElement);
            return link;
        }
    }
});