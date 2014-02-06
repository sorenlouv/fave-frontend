app.controller("headerController", ['$scope', 'facebook', 'safeApply','$firebase', function ($scope, facebook, safeApply, $firebase) {
  'use strict';

    facebook.userLoggedIn.then(function(){
      FB.api('/me', function(activeUser) {
        safeApply($scope, function(){
          $scope.activeUser = activeUser;
        });
      });
    });

    /*
     * Click events
     ********************************************/



     $scope.meals = $firebase(new Firebase("https://fave.firebaseio.com/meals"));

    $scope.login = function(){
      facebook.sdkReady.then(function(){
        FB.login(null, { scope: "email" });
      });
    };





}]);