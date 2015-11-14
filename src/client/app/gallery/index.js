'use strict';

var GalleryCtrl = require('./gallery');
var galleryModule = angular
    .module('app.gallery', [])
    .controller('GalleryCtrl', GalleryCtrl);
  
module.exports = galleryModule;
