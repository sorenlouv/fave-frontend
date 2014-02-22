app.directive('swipeMeals', ['$timeout', '$http', 'helpers', 'safeApply', 'REST_BASE_URL', function ($timeout, $http, helpers, safeApply, REST_BASE_URL) {
  'use strict';

  return {
    restrict: 'E',
    templateUrl: 'src/directives/swipe-meals/meal.html',
    replace: true,
    controller: function($scope){
    },
    link: function ($scope, $element, $attrs) {
      var numberOfElements;
      var mealsTotal = [];
      // Get location
      navigator.geolocation.getCurrentPosition(function(position) {
        safeApply($scope, function(){
          $scope.userCoordinates = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          };
        });
      }, function(){
        safeApply($scope, function(){
          $scope.userCoordinates = {
            longitude: -122.408211,
            latitude: 37.762017
          };
        });
      });

      var swipeElement = Swipe($element[0], {
        disableScroll: true,
          callback: function(index, elem) {
            // Load more meals when we approach the end
            if(index === (numberOfElements - 5)){
              console.log("Loading new", index);
              fetchMeals(numberOfElements);
            }
        }
      });

      $scope.prev = swipeElement.prev;
      $scope.next = swipeElement.next;

      var fetchMeals = function(offset){
        $http({method: 'GET', url: REST_BASE_URL + '/meal/closest', params: {radius: 1, longitude: $scope.userCoordinates.longitude, latitude: $scope.userCoordinates.latitude, offset: offset}}).success(function(newMeals){

          // Add new meals to the existing ones
          mealsTotal = mealsTotal.concat(newMeals);

          // Update view with new elements
          safeApply($scope, function(){
            $scope.meals = mealsTotal;
          });

          // Recalculate swipe
          $timeout(function(){
            numberOfElements = $element[0].querySelectorAll('.single-meal').length;
            swipeElement.setup();
          });
        });
      };

      $scope.$watch('userCoordinates.longitude', function(value){
        if(value === undefined) return;
        fetchMeals(0);
      });
    }
  };
}]);