
angular.module('blogApp.login').factory('loginService',
  ['$http', function($http) {
    return {
      saveUser: function (user) {
        var savedUser = $http.post('/users', user);
        console.log(savedUser);
      }
    }
  }
  ]);
