var app = angular.module('faveapp', ['ngTouch', 'ngAnimate', 'safeApply', 'firebase', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  'use strict';

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
    .otherwise({redirectTo: '/home'});
}]);

