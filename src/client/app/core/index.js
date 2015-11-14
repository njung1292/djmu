'use strict';

var config = require('./config');
var coreModule = angular
    .module('app.core', ['ngRoute'])
    .config(config);
  
module.exports = coreModule;
