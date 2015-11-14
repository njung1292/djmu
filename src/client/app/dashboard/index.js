'use strict';

var DashboardCtrl = require('./dashboard');
var dashboardModule = angular
    .module('app.dashboard', [])
    .controller('DashboardCtrl', DashboardCtrl);
  
module.exports = dashboardModule;
