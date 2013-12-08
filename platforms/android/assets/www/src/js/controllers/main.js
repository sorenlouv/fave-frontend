app.controller('mainController', ['$scope', 'facebook', function ($scope, facebook) {
  'use strict';

  $scope.login = function(){
    facebook.then(function(){
      FB.login(function(response) {
        if(response.status === "connected"){
          console.log("Logged in");
        }
      }, { scope: "email" });
    });
  };

  $scope.me = function(path){
    facebook.then(function(){
      FB.api('/me', function(response) {
        alert("Hej " + response.name);
      });
    });
  };
}]);