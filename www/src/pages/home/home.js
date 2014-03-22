app.controller('homeController', ['$scope', '$timeout', '$http', '$q',  'safeApply', 'helpers', 'homeMethods', function ($scope, $timeout, $http, $q, safeApply, helpers, homeMethods) {
  'use strict';

  /*
  * On page load
  *****************/

  // Initial values
  $scope.settings = {
    currentLocation: {},
    loadingGeoLocation: true,
    restaurantMode: false,
    clickedRestaurant: {},
  };

  //
  $scope.carousel = {
    items: [],
    index: 0,
    loading: true
  };

  // Get location and start carousel
  helpers.getLocation().then(function(loc){
    safeApply($scope, function(){
      $scope.settings.currentLocation = loc;
      $scope.settings.loadingGeoLocation = false;
    });

    // Start carousel
    $scope.$watch('carousel.index', onSlideChange);
    $scope.carousel.index = 0;

  });

  /*
  * Event listeners
  *****************/

  // Click event: show restaurant info (map)
  $scope.toggleRestaurantMode = function(restaurant){
    $scope.settings.restaurantMode = !$scope.settings.restaurantMode;
    $scope.settings.clickedRestaurant = restaurant;
  };

  // Click event: Previous slide
  $scope.prev = function(){
    $scope.carousel.index--;
  };

  // Click event: Next slide
  $scope.next = function(){
    $scope.carousel.index++;
  };

  // Slide event: when a slide is swiped
  var onSlideChange = function(index){
    if(index === undefined) return;

    // Load more elements when we approach the end
    if(index > ($scope.carousel.items.length - 5)){
      homeMethods.getClosestMeals($scope.settings.currentLocation, index).then(function(response){
        safeApply($scope, function(){
          $scope.carousel.items = $scope.carousel.items.concat(response.data);
          $scope.carousel.loading = false;
        });
      });
    }
  };

  /*
  * UI Data
  *****************/
  $scope.getDistanceToRestaurant = function(restaurantLocation){
    return homeMethods.getDistanceToRestaurant($scope.settings.currentLocation, restaurantLocation);
  };

}]);