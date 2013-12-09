app.directive('swipe', ['$timeout', function ($timeout) {
  'use strict';

  return {
    restrict: 'C',
    templateUrl: 'src/templates/meal.html',
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
        var swipeElement = Swipe($element[0]);
      }, 0);
    }
  };
}]);