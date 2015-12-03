'use strict';

/**
 * @ngdoc overview
 * @name angularCrimeStatsApp
 * @description
 * # angularCrimeStatsApp
 *
 * Main module of the application.
 */
angular
.module('angularCrimeStatsApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'uiGmapgoogle-maps',
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});