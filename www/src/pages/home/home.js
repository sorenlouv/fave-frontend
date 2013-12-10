app.controller('homeController', ['$scope', 'facebook', 'safeApply', function ($scope, facebook, safeApply) {
  'use strict';

  facebook.userReady.then(function(){
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

  $scope.me = function(path){
    facebook.sdkReady.then(function(){
      FB.api('/me', function(response) {
        alert("Hej " + response.name);
      });
    });
  };
}]);