(function() {
  'use strict';

  angular
    .module('app.core')
    .service('pageService', pageService);

  function pageService($location, userService) {
    var pages,
        currentPage;
    
    pages = [
      {
        title: 'Home',
        url: '/',
        enable: true
      },
      {
        title: 'Dashboard',
        url: '/dashboard',
        enable: userService.user
      },
      {
        title: 'Logout',
        url: '/logout',
        enable: userService.user
      },
      {
        title: 'Sign up/Login',
        url: '/signup',
        enable: !userService.user
      }
    ];

    var service = {
      getPages: getPages,
      setCurrentPage: setCurrentPage,
      isCurrentPage: isCurrentPage
    };

    return service;

    function getPages() {
      return pages;
    }

    function setCurrentPage(page) {
      currentPage = page;
    }

    function isCurrentPage(url) {
      return url === currentPage.url;
    }
  }
})();