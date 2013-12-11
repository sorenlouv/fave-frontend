app.directive('swipeMeals', ['$timeout', 'angularFireCollection', function ($timeout, angularFireCollection) {
  'use strict';

  return {
    restrict: 'E',
    templateUrl: 'src/directives/swipe-meals/meal.html',
    replace: true,
    controller: function($scope){
    },
    link: function ($scope, $element, $attrs) {
      var mealsRef = new Firebase("https://fave.firebaseio.com/meals");
      mealsRef.on('value', function(snapshot) {
        $scope.$apply(function(){
          $scope.meals = snapshot.val();
        });
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