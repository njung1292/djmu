'use strict';

var ShellCtrl = function($scope, $location) {
  $scope.pageTitle = "DJ Mu";
  // $scope.user = "hi";
  // $scope.pages = pageService.getPages();
  // $scope.getClass = function(url) {
  //   return (pageService.isCurrentPage(url) ? 'active' : '');
  // };
  $scope.isActive = function(href) {
    return ($location.path() === href);
  };
};
ShellCtrl.$inject = ['$scope', '$location'];

module.exports = ShellCtrl;
