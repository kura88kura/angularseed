'use strict';

/**
 * @ngdoc overview
 * @name dashboardangularApp
 * @description
 * # dashboardangularApp
 *
 * Main module of the application.
 */
angular
  .module('dashboardangularApp', ['ui.bootstrap', 'ui.router'])

  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
      .state('articles', {
        url: '/articles',
        templateUrl: '/views/articles.html',
        controller: 'ArticlesCtrl'
      })
      .state('gallery', {
        url: '/gallery',
        templateUrl: '/views/gallery.html',
        controller: 'GalleryCtrl'
      });
  });
