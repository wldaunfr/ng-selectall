'use strict';

PlaygroundController.$inject = ['$scope'];
function PlaygroundController($scope) {
    $scope.list = [{desc: 'Item 1'}, {desc: 'Item 2'}, {desc: 'Item 3'}];
};

angular.module('myApp', ['wldaunfr']);