var app = angular.module('faveapp', ['ngTouch', 'ngAnimate', 'angular-carousel', 'safeApply', 'ngRoute']);

app.config(['$routeProvider', '$compileProvider', function($routeProvider, $compileProvider) {
  'use strict';

  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|geo):/);


  $routeProvider
    .when('/home', {
      templateUrl: 'src/pages/home/home.html',
      controller: 'homeController'
    })
    .when('/admin', {
      templateUrl: 'src/pages/admin/admin.html',
      controller: 'adminController'
    })
    .when('/add-meal', {
      templateUrl: 'src/pages/add-meal/add-meal.html',
      controller: 'addMealController'
    })
    .when('/restaurants', {
      templateUrl: 'src/pages/restaurants/restaurants.html',
      controller: 'restaurantsController'
    })
    .otherwise({redirectTo: '/home'});
}]);

/*
* Main controller
* Consider variables defined in here 'global'
*****************/
app.controller('mainController', ['$scope', 'helpers', function ($scope, helpers) {
  'use strict';

  $scope.isTouch = helpers.isTouch();
}]);
