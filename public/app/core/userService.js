(function() {
  'use strict';

  angular
    .module('app.core')
    .service('userService', userService);

  function userService() {
    var user;
    return {
      user: user,
      setUser: setUser
    };

    function setUser(user) {
      user = user;
    }
  }
})();