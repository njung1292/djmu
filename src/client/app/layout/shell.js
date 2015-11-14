(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('Shell', Shell);

    function Shell($scope, pageService) {
      $scope.pages = pageService.getPages();
      $scope.getClass = function(url) {
        return (pageService.isCurrentPage(url) ? 'active' : '');
      };
    }
})();