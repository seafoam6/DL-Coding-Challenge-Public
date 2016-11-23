// 3rd party
import angular from 'angular';
import uirouter from  'angular-ui-router';
import localStorageService from 'angular-local-storage';
import ngAnimate from 'angular-animate';
import angularMaterial from 'angular-material';
// utilities
import moment from 'moment';
import _ from 'lodash';


// Styles + fonts
require('../../node_modules/angular-material/angular-material.css');
require('!style!css!sass!../styles/index.scss');

// services
import weatherService from '../services/weather.service.js';


// app
let app = () => {
  return {
    template: require('./app.html'),
    controller: function(weatherService){
      console.log('ugg')
      weatherService.getWeather();
    }
  }
};


const MODULE_NAME = 'dl';

angular.module('dl', [localStorageService, uirouter, ngAnimate, angularMaterial
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
  })
  .constant('_', _)
  .constant('moment', moment)
  .constant('weatherUndergroundKey', '6198dbbda6a7e9a0')
  .directive('app', app)
  .service('weatherService', weatherService)

// gets user agent for easier debugging weird quirks
var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);


export default MODULE_NAME;
