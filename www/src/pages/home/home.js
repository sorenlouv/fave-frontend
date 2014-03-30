app.controller('homeController', ['$scope', '$document',  'safeApply', 'helpers', 'homeMethods', function ($scope, $document, safeApply, helpers, homeMethods) {
  'use strict';

  /*
  * On page load
  *****************/

  // Initial values
  $scope.settings = {
    currentLocation: {},
    loadingGeoLocation: true,
    restaurantOverlay: false,
    clickedRestaurant: {},
  };
  var busy = false;

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
    // $scope.carousel.index = 0;

  });

  /*
  * Event listeners
  *****************/

  // Keyboard event: Listen for left/right arrow key
  $document.bind('keydown', function(event) {
    if(event.which === 37 || event.which === 39){
      $scope.$apply(function(){
        $scope.carousel.index = event.which === 37 ? $scope.carousel.index-1 : $scope.carousel.index+1;
      });
    }
  });

  // Click event: show restaurant info (map)
  $scope.addRestaurantOverlay = function(restaurant){
    $scope.settings.restaurantOverlay = true;
    $scope.settings.clickedRestaurant = restaurant;
  };

  $scope.removeRestaurantOverlay = function(){
    $scope.settings.restaurantOverlay = false;
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
    if(index > ($scope.carousel.items.length - 5) && busy === false){
      busy = true;
      var offset = Math.round(index / 10) * 10;
      homeMethods.getClosestMeals($scope.settings.currentLocation, offset).then(function(response){
        busy = false;
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