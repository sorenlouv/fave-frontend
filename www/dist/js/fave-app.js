var app = angular.module('faveapp', ['ngTouch', 'ngAnimate', 'safeApply', 'firebase']);
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
app.factory('facebook', ['$q', function($q) {
    'use strict';

    var deferred = $q.defer();
    var appId = "627802337276971";

    var loadJS = function(src, callback) {
      var s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.onreadystatechange = s.onload = function() {
        var state = s.readyState;
        if (callback && !callback.done && (!state || /loaded|complete/.test(state))) {
          callback.done = true;
          callback();
        }
      };
      document.getElementsByTagName('head')[0].appendChild(s);
    };

    var devices = {
      // phone
      phone: {
        init: function() {
          // attach event listener
          window.fbAsyncInit = function() {
            FB.init({
              appId: appId,
              nativeInterface: CDV.FB,
              useCachedDialogs: false
            });

            deferred.resolve();
          };

          loadJS('src/js/vendors/facebook-sdk-phone.js');
        }
      },

      // Web
      web: {
        init: function() {
          // attach event listener
          window.fbAsyncInit = function() {
            FB.init({
              appId: appId
            });

            deferred.resolve();
          };

          loadJS('src/js/vendors/facebook-sdk-web.js');
        }
      }
    };

    var device = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/) ? devices.phone : devices.web;
    device.init();

    return deferred.promise;
  }
]);
app.factory('firebaseAuth', ['$q', 'safeApply', function($q, safeApply) {
  'use strict';

  // Init user ready deferred
  var userReadyDef = $q.defer();

  // Create firebase authentication object
  var firebaseAuth = {
    userReady: userReadyDef.promise,

    login: function(accessToken){
      this.usersRef = new Firebase("https://fave.firebaseio.com/users");
      this.auth = new FirebaseSimpleLogin(this.usersRef, this.onAuthenticationChange.bind(this));

      this.auth.login('facebook', {
        access_token: accessToken
      });
    },

    getOrCreateCurrentUser: function(facebookUser){
      var deferred = $q.defer();
      var activeUserRef = firebaseAuth.usersRef.child(facebookUser.id);
      activeUserRef.once('value', function(activeUserSnapshot){

        // Create user if not exists, or fetch from DB
        var activeUser;
        if(activeUserSnapshot.val() === null){
          // user does not exist
          activeUser = {
            id: facebookUser.id,
            name: facebookUser.name,
            first_name: facebookUser.first_name,
            last_name: facebookUser.last_name,
            email: facebookUser.email
          };
          activeUserRef.set(activeUser);
        }else{
          // user already exists
          activeUser = activeUserSnapshot.val();
        }

        deferred.resolve(activeUser);
      });

      return deferred.promise;
    },

    onAuthenticationChange: function(error, facebookUser) {
      if(error){
        // auth error
        console.log("Authentication error", error);
        this.userReadyDef.reject(error);

      }else if(facebookUser){
        // user signed in with Facebook
        console.log("User signed in!");
        this.getOrCreateCurrentUser(facebookUser).then(function(activeUser){
          userReadyDef.resolve(activeUser);
        });

      }else{
        // user signed out
        // userReadyDef.reject("User signed out");
      }
    }
  };

  return firebaseAuth;
}]);
angular.module('safeApply',[]).factory('safeApply', [function($rootScope) {
    'use strict';
    return function($scope, fn) {
        var phase = $scope.$root.$$phase;
        if(phase == '$apply' || phase == '$digest') {
            if (fn) {
                $scope.$eval(fn);
            }
        } else {
            if (fn) {
                $scope.$apply(fn);
            } else {
                $scope.$apply();
            }
        }
    };
}]);