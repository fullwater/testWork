function HomeController($scope, $http, $rootScope) {
    $scope.welcome = "Hello World! We're using Angular!";
}

angular.module('app').controller('HomeController', HomeController);
