'use strict';

var ShellCtrl = require('./shell');
var layoutModule = angular
    .module('app.layout', [])
    .controller('ShellCtrl', ShellCtrl);
  
module.exports = layoutModule;
