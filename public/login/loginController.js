
angular.module('blogApp.login', ['ngRoute'])

  .config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider
      .when('/login', {
        templateUrl: 'login/login.template.html',
        controller: 'LoginController'
      });
  })

  .controller('LoginController', ['$scope', '$route', '$location', '$http', 'loginService', function LoginController($scope, $route, $location, $http, loginService) {
    $scope.authenticate = function () {
        var user = {
          name: $scope.user.name,
          password: $scope.user.password,
          email: $scope.user.email
        };
        loginService.saveUser(user).success(function (response) {
          $location.url("/users/" + response._id);
        })
    };
  }]);
