var app = angular.module('phoneApp', []);

var phoneAppStaff = {};

phoneAppStaff.controllers = {
    AppCtrl: function($scope) {
        this.sayHi = function() {
            alert('Hi!');
        }

        return $scope.AppCtrl = this;
    }
};

phoneAppStaff.directives = {
    panel: function() {
        return {
            restrict: 'E'
        }
    }
};

app.controller(phoneAppStaff.controllers);
app.directive(phoneAppStaff.directives);

