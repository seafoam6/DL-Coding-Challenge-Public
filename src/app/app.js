
/*
  3rd party imports
*/

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

/*
  1st party imports
*/
import services from '../services';
import cards from '../cards';



// app
import appComponent from './app.component.js';
import routes from './app.routes';


const MODULE_NAME = 'dl';

angular.module('dl', [
  angularMaterial,
  cards,
  localStorageService,
  ngAnimate,
  services,
  uirouter
  ])

  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
  })
  .constant('_', _)
  .constant('moment', moment)
  .constant('weatherUndergroundKey', '6198dbbda6a7e9a0')
  .component('app', appComponent)
  .config(routes)

// gets user agent for easier debugging weird quirks
var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);


export default MODULE_NAME;
