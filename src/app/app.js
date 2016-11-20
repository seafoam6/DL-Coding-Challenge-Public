
import angular from 'angular';
import uirouter from  'angular-ui-router';
import localStorageService from 'angular-local-storage';
import ngAnimate from 'angular-animate';
import angularMaterial from 'angular-material';


// Styles + fonts
require('../../node_modules/angular-material/angular-material.css');

// utilities
import moment from 'moment';
import _ from 'lodash';

// app
let app = () => {
  return {
    template: require('./app.html')
  }
};


const MODULE_NAME = 'dl';

angular.module('dl', [localStorageService, uirouter, ngAnimate, angularMaterial
  ])
.directive('app', app)
.constant('moment', moment)
.constant('_', _)
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

})

// gets user agent for easier debugging on devices
var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);


export default MODULE_NAME;
