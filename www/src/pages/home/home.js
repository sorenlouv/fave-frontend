app.controller('homeController', ['$scope', 'facebook', 'safeApply', 'helpers', function ($scope, facebook, safeApply, helpers) {
  'use strict';

  $scope.isPhone = helpers.isPhone();

  // facebook.userReady.then(function(){
  //   FB.api('/me', function(activeUser) {
  //     safeApply($scope, function(){
  //       $scope.activeUser = activeUser;
  //     });
  //   });
  // });

  /*
   * Click events
   ********************************************/

  // $scope.login = function(){
  //   facebook.sdkReady.then(function(){
  //     FB.login(null, { scope: "email" });
  //   });
  // };

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

}]);