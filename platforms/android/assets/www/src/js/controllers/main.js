app.controller('mainController', ['$scope', 'facebook', 'angularFireCollection', 'firebaseAuth', function ($scope, facebook, angularFireCollection, firebaseAuth) {
  'use strict';

  /*
   * Click events
   ********************************************/

  $scope.login = function(){
    facebook.then(function(){
      FB.login(function(response) {
        if(response.status === "connected"){
          console.log("Logged in");
          firebaseAuth.login(response.authResponse.accessToken);
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

  /*
   * Helper methods
   ********************************************/

  firebaseAuth.userReady.then(function(activeUser){
    $scope.activeUser = activeUser;
  });


}]);