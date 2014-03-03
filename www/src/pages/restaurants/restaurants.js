/* global google */

app.controller('restaurantsController', ['$scope', '$http',  'safeApply', 'helpers', function ($scope, $http, safeApply, helpers) {
  'use strict';

  var center = new google.maps.LatLng(37.77,-122.415462);
  var mapOptions = {
    zoom: 13,
    center: center
  };
  var map = new google.maps.Map(document.querySelector('.restaurants-map'), mapOptions);

  $http({method: 'GET', url: helpers.getConfig('backend_url') + '/restaurant?limit=999'}).success(function(restaurants){

    angular.forEach(restaurants, function(restaurant, key){
      if(restaurant.location.coordinate !== undefined){
        var pos = new google.maps.LatLng(restaurant.location.coordinate[1],restaurant.location.coordinate[0]);
        var marker = new google.maps.Marker({
            position: pos,
            map: map,
            title: 'Hello World!'
        });
      }
    });
  });

}]);
