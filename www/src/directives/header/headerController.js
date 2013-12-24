app.controller("headerController", ['$scope', 'facebook', 'safeApply', function ($scope, facebook, safeApply) {
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

    $scope.login = function(){
      facebook.sdkReady.then(function(){
        FB.login(null, { scope: "email" });
      });
    };
}]);