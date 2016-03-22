'use strict';

/**
 * @ngdoc function
 * @name dashboardangularApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the dashboardangularApp
 */
angular.module('dashboardangularApp')
  .controller('GalleryCtrl', function ($scope) {
    var pictures = $scope.pictures=[];
    var baseURL="http://lorempixel.com/300/180/";
    var titles=["Healthy Food", "Healthy Work", "City Life", "Staying Fit", "Looking Good", "Nightlife"];

    var keywords=["food", "business", "city", "sports", "fashion", "nightlife"];

    var dummyText="Lorem ipsum dolor sit amet.";

    $scope.addPics = function(i) {
      pictures.push({
        url:baseURL + keywords[i],
        title:titles[i],
        summary:dummyText
      })
    };

    for (var i=0;i<5;i++) {
      $scope.addPics(i);
    }

    $scope.rate=0;
    $scope.max=5;
    $scope.isReadonly=false;
  });
