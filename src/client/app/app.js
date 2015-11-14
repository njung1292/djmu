(function() {
  'use strict';

  require('angular');
  require('angular-route');

  var core = require('./core');
  var dashboard = require('./dashboard');
  var gallery = require('./gallery');
  var layout = require('./layout');

  angular.module('app', [
    core.name,
    dashboard.name,
    gallery.name,
    layout.name
  ]);
})();
