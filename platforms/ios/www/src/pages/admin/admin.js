app.controller('adminController', ['$scope', 'angularFire', function ($scope, angularFire) {
  'use strict';

  var mealsRef = new Firebase("https://fave.firebaseio.com/meals");
  $scope.meals = null;
  angularFire(mealsRef, $scope, 'meals');

  // Add meal
  $scope.addMeal = function(){
    var newMeal = mealsRef.push({
      title: $scope.title,
      description: $scope.description,
      restaurant: $scope.restaurant,
      price: $scope.price,
      faves: $scope.faves,
      images: [$scope.image]
    });
  };

  // remove meal
  $scope.removeMeal = function() {

  };

}]);