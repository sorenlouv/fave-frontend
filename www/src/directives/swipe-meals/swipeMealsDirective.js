app.directive('swipeMeals', ['$timeout', function ($timeout) {
  'use strict';

  return {
    restrict: 'E',
    templateUrl: 'src/directives/swipe-meals/meal.html',
    replace: true,
    controller: function($scope){
      $scope.meals = [
        {
          title: "Tom Ka Gai",
          description: "Thai Chicken Soup (Tom Ka Gai) has that distinctive Thai flavor - a balance of spicy, salty, sweet and sour. ",
          restaurant: "ASIO Thai",
          price: 11,
          faves: 21,
          images: ["img/chicken.jpg"]
        },
        {
          title: "Test",
          description: "Halløj!",
          restaurant: "ASIO Thai",
          price: 11,
          faves: 21,
          images: ["img/chicken.jpg"]
        }
      ];
    },
    link: function ($scope, $element, $attrs) {
      $timeout(function(){
        var swipeElement = Swipe($element[0], {
          disableScroll: true,
          callback: function(index, elem) {},
          transitionEnd: function(index, elem) {}
        });

        $scope.prev = swipeElement.prev;
        $scope.next = swipeElement.next;

      }, 0);
    }
  };
}]);