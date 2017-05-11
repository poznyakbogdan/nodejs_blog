
angular.module('blogApp.users', ['ngRoute'])

  .config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider
      .when('/users/:id', {
        templateUrl: 'users/show.template.html',
        controller: 'UsersController'
      });
  })

  .controller('UsersController', ['$scope', '$route', '$location', '$http', 'userService', '$routeParams', function UsersController($scope, $route, $location, $http, userService, $routeParams) {
    var userId = $routeParams.id;
    $scope.a = "12312312";
    $scope.user = {};

    userService.getUser(userId).success(function (user) {
      $scope.user = user;
      console.log(user);
    });
  }]);