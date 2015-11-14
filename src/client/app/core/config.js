(function() {
  'use strict';

  angular
    .module('app.core')
    .config(configure)
    .run(appRun);

    function configure($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/views/pages/gallery.html',
          conroller: 'GalleryCtrl',
          title: 'Gallery'
        })
        .when('/dashboard', {
          templateUrl: '/views/pages/dashboard.html',
          controller: 'DashboardCtrl',
          title: 'Dashboard'
        })
        .when('/signup', {
          templateUrl: '/views/pages/signup.html',
          title: 'Sign Up'
        })
        .when('/login', {
          templateUrl: '/views/pages/login.html',
          title: 'Login'
        });

      $locationProvider.html5Mode(true);
    }

    function appRun($rootScope, $route, $location, pageService) {
      $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        var currentPage = {
          title: current.$$route.title,
          url: current.$$route.originalPath
        };

        pageService.setCurrentPage(currentPage);

      });
    }
})();