app.controller('addMealController', ['$scope', 'angularFire', 'helpers', function ($scope, angularFire, helpers) {
  'use strict';

  $scope.isTouch = helpers.isTouch();

  // For desktop only
  $scope.uploadImage = function($event){
    var file = $event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(readerEvt) {
        var binaryString = readerEvt.target.result;
        var encodedFile = btoa(binaryString);
        console.log(encodedFile);
    };

    reader.readAsBinaryString(file);
  };

  // For mobile only
  $scope.captureImage = function(){
    navigator.camera.getPicture( function(image){
      // success
      $scope.$apply(function(){
        $scope.imageResponse = image;
      });
    }, function(error){
      // error
      alert("error");
      $scope.imageResponse = error;
    }, {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      allowEdit: true
    });
  };

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