app.controller('adminController', ['$scope', function ($scope) {
  'use strict';

  // Add meal
  $scope.addMeal = function(){
    $scope.meals.$add({
      title: $scope.title,
      description: $scope.description,
      restaurant: $scope.restaurant,
      price: $scope.price,
      faves: $scope.faves,
      images: {
        food: $scope.image
      }
    });
  };

  // remove meal
  $scope.removeMeal = function() {

  };

}]);