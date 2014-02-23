app.directive('swipeMeals', ['helpers', 'safeApply', function (helpers, safeApply) {
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
      var numberOfElements;
      var sliderElm = $element[0];
      var swipeElement = Swipe(sliderElm, {
        disableScroll: true,
          callback: function(index, elem) {
            // Load more elements when we approach the end
            if(index === (numberOfElements - 5)){
              $scope.control.loadMore(numberOfElements);
            }
        }
      });

      $scope.control.recalculate = function(){
        numberOfElements = $element[0].querySelector('.swipe-wrap').children.length;
        swipeElement.setup();
      };

      $scope.control.prev = swipeElement.prev;
      $scope.control.next = swipeElement.next;

    }
  };
}]);