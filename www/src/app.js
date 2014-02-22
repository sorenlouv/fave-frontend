var app = angular.module('faveapp', ['ngTouch', 'ngAnimate', 'safeApply', 'ngRoute']);

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

/*
* Constants
*****************/
var isProduction = function(){
  return location.host === "app.joinfave.com";
};
var getRestBaseUrl = function(){
  var restBaseUrl;
  if(isProduction){
    restBaseUrl = "http://api.joinfave.com";
  }else{
    restBaseUrl = "http://api.joinfave.local";
  }

  return restBaseUrl;
  // return window.location.origin.replace("http://", "http://api.");
};
app.constant('REST_BASE_URL', getRestBaseUrl());

/*
* Main controller
* Consider variables defined in here "global"
*****************/
app.controller('mainController', ['$scope', 'helpers', function ($scope, helpers) {
  'use strict';

  $scope.isTouch = helpers.isTouch();
}]);