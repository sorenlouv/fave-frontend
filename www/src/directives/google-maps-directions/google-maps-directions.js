/* global google */

app.directive('googleMapsDirections', ['helpers', function (helpers) {
  'use strict';

  return {
    restrict: 'C',
    scope: {
      from: '=',
      to: '='
    },
    link: function ($scope, $element, $attrs) {

      var directionsDisplay = new google.maps.DirectionsRenderer();
      var directionsService = new google.maps.DirectionsService();
      var options = {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: true,
        navigationControl: false,
        draggable: true,
        disableDefaultUI: true,
        streetViewControl: false,
        keyboardShortcuts: false,
        disableDoubleClickZoom: false
      };
      var map = new google.maps.Map($element[0], options);
      directionsDisplay.setMap(map);

      $scope.$watch('from', function(value){
        if(value === undefined) return;
        var toConverted = helpers.convertMongoLocation($scope.to);
        var from = new google.maps.LatLng($scope.from.latitude, $scope.from.longitude);
        var to = new google.maps.LatLng(toConverted.latitude, toConverted.longitude);
        calcRoute(from, to);
      });

      $scope.$watch('to', function(value){
        if(value === undefined) return;
        var from = new google.maps.LatLng($scope.from.latitude, $scope.from.longitude);
        var to = new google.maps.LatLng($scope.to.latitude, $scope.to.longitude);
        calcRoute(from, to);
      });

      function calcRoute(start, end) {
        var request = {
            origin: start,
            destination:end,
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, function(response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
          }
        });
      }

    }
  };
}]);