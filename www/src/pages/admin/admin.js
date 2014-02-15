app.controller('adminController', ['$scope', '$firebase', function ($scope, $firebase) {
  'use strict';

  $scope.meals = $firebase(new Firebase("https://fave.firebaseio.com/meals"));

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