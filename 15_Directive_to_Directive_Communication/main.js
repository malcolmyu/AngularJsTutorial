var app = angular.module('superApp', [])

app.directive('superhero', function(){
    return {
        restrict: 'E',

        scope: {},

        controller: function($scope) {
            $scope.abilities = []

            this.addStrength = function() {
                $scope.abilities.push('strength')
            }
            this.addSpeed = function() {
                $scope.abilities.push('speed')
            }
            this.addFlight = function() {
                $scope.abilities.push('flight')
            }
        },

        link: function(scope, element) {
            element.bind('click', function() {
                alert(scope.abilities.join(','))
            })
        }
    }
})

app.directive('strength', function(){
    return {
        require: 'superhero',

        link: function(scope, element, attrs, ctrler) {
            ctrler.addStrength()
        }
    }
})

app.directive('speed', function(){
    return {
        require: 'superhero',

        link: function(scope, element, attrs, ctrler) {
            ctrler.addSpeed()
        }
    }
})

app.directive('flight', function(){
    return {
        require: 'superhero',

        link: function(scope, element, attrs, ctrler) {
            ctrler.addFlight()
        }
    }
})
