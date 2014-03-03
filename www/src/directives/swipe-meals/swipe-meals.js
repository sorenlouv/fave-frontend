app.directive('swipeMeals', ['helpers', 'safeApply', '$timeout', function (helpers, safeApply, $timeout) {
  'use strict';

  return {
    restrict: 'E',
    templateUrl: 'src/directives/swipe-meals/swipe-meals.html',
    replace: true,
    transclude: true,
    scope: {
      control: '='
    },
    link: function ($scope, $element, $attrs) {

      var swipeElement;
      var start = function(){
        swipeElement = Swipe($element[0], {
          // startSlide: 2,
          disableScroll: true,
          callback: function(index, elem) {

            // Load more elements when we approach the end
            if(index === ($scope.control.offset - 5)){
              $scope.control.getItems($scope.control.offset).then(onLoadSuccess);
            }
          }
        });

        $scope.control.getItems(0).then(onLoadSuccess);

        // Inbuilt swipe methods
        $scope.control.prev = swipeElement.prev;
        $scope.control.next = swipeElement.next;
        $scope.control.getPos = swipeElement.getPos;
        $scope.control.getNumSlides = swipeElement.getNumSlides;
        $scope.control.slide = swipeElement.slide;
        $scope.control.setup = swipeElement.setup;
      };

      // $scope.swipeMealsControl = {
      //   getItems: function(){},
      //   recalculate: function(){},
      //   next: function(){},
      //   prev: function(){},
      //   start: function(){},
      //   items: [],
      //   offset: 0
      // };


      // Own swipe methods
      $scope.control.start = start;

      // Own
      $scope.control.loading = true;



      var onLoadSuccess = function(response){
        $scope.control.loading = false;

        // Update view with new elements
        safeApply($scope, function(){
          $scope.control.items = $scope.control.items.concat(response.data);
        });

        $scope.control.offset = $scope.control.items.length;

        // Recalculate swipe
        $timeout(function(){
          swipeElement.setup();
        });
      };
    }
  };
}]);