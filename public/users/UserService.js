
angular.module('blogApp.users').factory('userService',
  ['$http', function($http) {
    return {
      getUser: function (userId) {
        return $http.get('/users/' + userId);
      }
    }
  }
  ]);

