'use strict';

/**
 * @ngdoc function
 * @name dashboardangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dashboardangularApp
 */
angular.module('dashboardangularApp', ['ui.bootstrap', 'ui.router'])
  .controller('MainCtrl',function ($scope) {

    var baseURL = 'http://lorempixel.com/960/450/';
    $scope.setInterval=5000;
    $scope.slides = [
      {
        title: '7 ways to stay fit',
        image: baseURL+'sports/',
        text:'Play a sport for 30 minutes a day!'
      },
      {
        title: 'Healthy food',
        image: baseURL+'food/',
        text: 'Food that you should always be eating!'
      },
      {
        title: 'Relaxing holidays',
        image: baseURL+'nature/',
        text:'10 Location for Nature Lovers!'
      }
    ];

    var baseURL2 = 'http://lorempixel.com/200/200/';
    $scope.content = [
      {
        img:baseURL2 + 'people',
        title:'About Us',
        summary: 'We are good here'

      },
      {
        img: baseURL2 + 'transport',
        title: 'Contact Us',
        summary: '#111, Good Health Blvd'

      },
      {
        img: baseURL2 + 'sports',
        title: 'Join Us',
        summary: 'Make a difference!'

      }
    ];


  });
