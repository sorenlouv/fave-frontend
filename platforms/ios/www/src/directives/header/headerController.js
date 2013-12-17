app.controller("headerController", ['$scope', 'facebook', 'safeApply', 'helpers', function ($scope, facebook, safeApply, helpers) {
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

    $scope.settings = function() {
      console.log("test");
    };

}]);