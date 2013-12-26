app.directive('swipeMeals', ['$timeout', '$firebase', 'helpers', function ($timeout, $firebase, helpers) {
  'use strict';

  // Note to self: Explicit bindings!!!s

  return {
    restrict: 'E',
    templateUrl: 'src/directives/swipe-meals/meal.html',
    replace: true,
    controller: function($scope){
    },
    link: function ($scope, $element, $attrs) {
      $scope.meals = $firebase(new Firebase("https://fave.firebaseio.com/meals"));

      // triggered on inital data load
      $scope.meals.$on('loaded', function(snapshot) {
        $timeout(function(){
          initializeSlider();
        }, 0);
      });

      var initializeSlider = function(){
        var swipeElement = Swipe($element[0], {
          disableScroll: true,
          callback: function(index, elem) {},
          transitionEnd: function(index, elem) {}
        });

        $scope.prev = swipeElement.prev;
        $scope.next = swipeElement.next;
      };
    }
  };
}]);