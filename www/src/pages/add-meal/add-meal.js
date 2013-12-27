app.controller('addMealController', ['$scope', '$firebase', 'helpers', '$http', 'safeApply', '$q', function ($scope, $firebase, helpers, $http, safeApply, $q) {
  'use strict';

  /*
   * Inital variables
   ****************************************/
  $scope.isTouch = helpers.isTouch();
  $scope.images = {};


  /*
   * Helper methods
   ****************************************/

  function saveImage(encodedImage){
    var timestamp = "1388134077";
    var signature = "7e68693d0780f8edfbd6c0380dbef6944dd044fc";

    return $http({
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
    });
  }

  // Select existing image from computer
  // For desktop only
  var selectImage = function(file, imageCategory){
    var reader = new FileReader();
    reader.onload = function(readerEvt) {
        var binaryString = readerEvt.target.result;
        var encodedImage = btoa(binaryString);

        safeApply($scope, function(){
          $scope.images[imageCategory] = encodedImage;
        });
    };

    reader.readAsBinaryString(file);
  };

  // Capture image with device camera
  // For mobile only
  var captureImage = function(imageCategory){
    if(helpers.isTouch()){
      navigator.camera.getPicture( function(encodedImage){
        // success
        safeApply($scope, function(){
          $scope.images[imageCategory] = encodedImage;
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

  /*
   * Click events
   ****************************************/

  // Select image of food from computer
  // For desktop only
  $scope.selectFoodImage = function($event){
    var file = $event.target.files[0];
    selectImage(file, "food");
  };

  // Select image of receipt from computer
  // For desktop only
  $scope.selectReceiptImage = function($event){
    var file = $event.target.files[0];
    selectImage(file, "receipt");
  };

  // Capture image of food with device camera
  // For mobile only
  $scope.captureFoodImage = function(){
    captureImage("food");
  };

  // Capture image of receipt with device camera
  // For mobile only
  $scope.captureReceiptImage = function(){
    captureImage("receipt");
  };

  // Add meal
  $scope.addMeal = function(){
    $scope.meals = $firebase(new Firebase("https://fave.firebaseio.com/meals"));

    // save images
    var saveFoodImage = saveImage($scope.images.food);
    var saveReceiptImage = saveImage($scope.images.receipt);

    // When images has been uploaded
    $q.all([saveFoodImage, saveReceiptImage]).then(function(response){
      var foodImageUrl = response[0].data.url;
      var foodReceiptUrl = response[1].data.url;

      $scope.meals.$add({
        // title: $scope.title,
        // description: $scope.description,
        // restaurant: $scope.restaurant,
        // price: $scope.price,
        // faves: $scope.faves,
        images: [foodImageUrl, foodReceiptUrl]
      });
    });
  };

}]);