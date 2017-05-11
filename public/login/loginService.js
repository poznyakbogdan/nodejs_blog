
angular.module('blogApp.login').factory('loginService',
  ['$http', function($http) {
    return {
      saveUser: function (user) {
        return $http.post('/users', user);
      }
    }
  }
  ]);
