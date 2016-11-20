/*
  3rd party imports
*/
import angular from 'angular';
import uirouter from  'angular-ui-router';
import localStorageService from 'angular-local-storage';
import ngAnimate from 'angular-animate';
import angularMaterial from 'angular-material';
import moment from 'moment';
import _ from 'lodash';

// Styles + fonts
require('../../node_modules/angular-material/angular-material.css');

/*
  1st party imports
*/
// services
import services from '../services';

// app
let app = () => {
  return {
    template: require('./app.html')
  }
};


const MODULE_NAME = 'dl';

angular.module('dl', [
  localStorageService,
  uirouter,
  ngAnimate,
  angularMaterial,
  services
  ])
  .constant('moment', moment)
  .constant('_', _)
  .directive('app', app)

.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

})

// gets user agent for easier debugging on devices
var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);


export default MODULE_NAME;
