angular.module('blogApp.login', ['ngRoute'])

  .config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider
      .when('/login', {
        templateUrl: 'login/login.template.html',
        controller: 'LoginController'
      })
  })

  .controller('LoginController', ['$scope', '$route', '$location', '$http', 'loginService', function LoginController($scope, $route, $location, $http, loginService) {
    $scope.save = loginService.saveUser;
  }]);
