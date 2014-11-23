'use strict';

/**
 * @ngdoc overview
 * @name uiRouterAnimationApp
 * @description
 * # uiRouterAnimationApp
 *
 * Main module of the application.
 */
angular
  .module('uiRouterAnimationApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('main.business', {
      url: '/business',
      templateUrl: 'views/business.html',
      controller: 'MainCtrl'
    })
    .state('main.personal', {
      url: '/personal',
      templateUrl: 'views/personal.html',
      controller: 'MainCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'MainCtrl'
    });

  }]);
