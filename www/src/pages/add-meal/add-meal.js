app.controller('addMealController', ['$scope', '$firebase', 'helpers', '$http', 'safeApply', function ($scope, $firebase, helpers, $http, safeApply) {
  'use strict';

  $scope.isTouch = helpers.isTouch();
  $scope.foodImage = null;


  function saveImage(encodedImage){
    var timestamp = "1388031549";
    var signature = "8ba67ad9cec7a0ebd7caf4574e5bcbc44b5f1607";

    $http({
      url: "http://api.cloudinary.com/v1_1/konscript/image/upload",
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: helpers.getParams({
        file: "data:image/jpeg;base64," + encodedImage,
        api_key: "381981727586644",
        timestamp: timestamp,
        signature: signature
      })
    }).success(function(response){

    });
  }

  // For desktop only
  $scope.uploadImage = function($event){
    var file = $event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(readerEvt) {
        var binaryString = readerEvt.target.result;
        var encodedImage = btoa(binaryString);
        // saveImage(encodedImage);
        safeApply($scope, function(){
          $scope.foodImage = encodedImage;
        });
    };

    reader.readAsBinaryString(file);
  };

  // For mobile only
  $scope.captureImage = function(){
    if(helpers.isTouch()){
      navigator.camera.getPicture( function(encodedImage){
        // success
        // saveImage(encodedImage);
        safeApply($scope, function(){
          $scope.foodImage = encodedImage;
        });
      }, function(error){
        // error
        alert(error);
      }, {
        quality: 75,
        sourceType : Camera.PictureSourceType.CAMERA,
        destinationType: Camera.DestinationType.DATA_URL,
        allowEdit: true
      });
    }
  };

  // Add meal
  $scope.addMeal = function(){
    $scope.meals = $firebase(new Firebase("https://fave.firebaseio.com/meals"));

    $scope.meals.$add({
      title: $scope.title,
      description: $scope.description,
      restaurant: $scope.restaurant,
      price: $scope.price,
      faves: $scope.faves,
      images: [$scope.image]
    });
  };

}]);