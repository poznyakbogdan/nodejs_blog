angular.module('blogApp.home', ['ngRoute'])

  .config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.template.html',
        controller: 'HomeController'
      });
  })

  .controller('HomeController', ['$scope', '$route', '$location', '$http', function HomeController($scope, $route, $location, $http) {

  }]);

