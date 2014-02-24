app.controller('homeController', ['$scope', '$timeout', '$http',  'safeApply', 'helpers', function ($scope, $timeout, $http, safeApply, helpers) {
  'use strict';

  var mealListTotal = [];
  $scope.currentLocation = {};
  $scope.loadingGeoLocation = true;
  $scope.loadingMeals = true;

  // API interface for swipe meals directive
  $scope.swipeMealsControl = {
    loadMore: function(){},
    recalculate: function(){},
    next: function(){},
    prev: function(){}
  };

  var fetchMeals = function(offset){
    $http({method: 'GET', url: helpers.getConfig('backend_url') + '/meal/closest', params: {radius: 1, longitude: $scope.currentLocation.longitude, latitude: $scope.currentLocation.latitude, offset: offset}}).success(function(newMeals){
      // Add new meals to the existing ones
      mealListTotal = mealListTotal.concat(newMeals);

      // Update view with new elements
      safeApply($scope, function(){
        $scope.meals = mealListTotal;
        $scope.loadingMeals = false;
      });

      // Recalculate swipe
      $timeout(function(){
        $scope.swipeMealsControl.recalculate();
      });
    });
  };

  // Add fetchMeals to swipeMeals API
  $scope.swipeMealsControl.loadMore = fetchMeals;

  $scope.getDistanceToRestaurant = function(restaurantLocation){
    restaurantLocation = helpers.convertMongoLocation(restaurantLocation);
    var distanceInKilometres = helpers.getDistanceBetweenPoints($scope.currentLocation.latitude, $scope.currentLocation.longitude, restaurantLocation.latitude, restaurantLocation.longitude);
    return Math.round(distanceInKilometres * 1000);
  };

  helpers.getLocation().then(function(loc){
    $scope.currentLocation = loc;
    fetchMeals(0);

    safeApply($scope, function(){
      $scope.loadingGeoLocation = false;
    });
  });

}]);