var app = angular.module('faveapp', ['ngTouch', 'ngAnimate', 'safeApply', 'firebase', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  'use strict';

  $routeProvider
    .when('/home', {
      templateUrl: 'src/shared/templates/home.html',
      controller: 'adminController'
    })
    .when('/admin', {
      templateUrl: 'src/admin/admin.html',
      controller: 'adminController'
    })
    .otherwise({redirectTo: '/home'});
}]);

