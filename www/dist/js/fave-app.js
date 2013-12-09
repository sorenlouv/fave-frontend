var app = angular.module('faveapp', ['ngTouch', 'ngAnimate', 'safeApply', 'firebase']);
app.controller('mainController', ['$scope', 'facebook', 'safeApply', function ($scope, facebook, safeApply) {
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
app.factory('facebook', ['$q', function($q) {
  'use strict';

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

  /*
   * Attach a global listener on page load
   * Returns a promise which will be resolved when Facebook SDK is loaded
   ************************/
  var sdkReadyDef = $q.defer();
  window.fbAsyncInit = function() {
    sdkReadyDef.resolve();
  };
  var sdkReady = sdkReadyDef.promise;

  /*
   * Attach a global listener as soon as the SDK is loaded an the FB namespace is available
   * Returns a promise which will be resolved when the user is logged in
   ************************/
  var userReadyDef = $q.defer();
  sdkReady.then(function(){
    FB.Event.subscribe('auth.authResponseChange', function(response) {
      if(response.status === "connected"){
        userReadyDef.resolve();
      }
    });
  });
  var userReady = userReadyDef.promise;

  var devices = {
    // phone
    phone: {
      // Load SDK
      loadSDK: function(){
        loadJS('src/js/vendors/facebook-sdk-phone.js');
      },

      // Run FB.init when SDK is ready
      init: function() {
        sdkReady.then(function(){
          FB.init({
            appId: appId,
            nativeInterface: CDV.FB,
            useCachedDialogs: false
          });
        });
      }
    },

    // Web
    web: {
      // Load SDK
      loadSDK: function(){
        loadJS('src/js/vendors/facebook-sdk-web.js');
      },

      // Run FB.init when SDK is ready
      init: function() {
        sdkReady.then(function(){
          FB.init({
            appId: appId
          });
        });
      }
    }
  };

  var device = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/) ? devices.phone : devices.web;
  device.loadSDK();
  device.init();

  return {
    userReady: userReady,
    sdkReady: sdkReady
  };
}]);
app.factory('firebaseAuth', ['$q', 'safeApply', function($q, safeApply) {
  'use strict';

  // Init user ready deferred
  var userReadyDef = $q.defer();

  // Create firebase authentication object
  var usersRef = new Firebase("https://fave.firebaseio.com/users");
  var auth = new FirebaseSimpleLogin(usersRef, onAuthenticationChange.bind(this));

  /*
   * Attempt to login user
   * Return promise which will be resolved in "onAuthenticationChange" if login successful
   ****************************************/
  var login = function(accessToken){
    this.auth.login('facebook', {
      access_token: accessToken
    });

    return userReadyDef.promise;
  };

  // onChange: Authentication to Firebase
  var onAuthenticationChange = function(error, facebookUser) {
    if(facebookUser){
      this.createCurrentUser(facebookUser).then(function(){
        userReadyDef.resolve();
      });
    }
  };

  /*
   * Create user after successful login, if he doesn't exist
   ****************************************/
  var createCurrentUser = function(facebookUser){
    var createUserDef = $q.defer();
    var activeUserRef = usersRef.child(facebookUser.id);
    activeUserRef.once('value', function(activeUserSnapshot){

      // Create user if not exists
      if(activeUserSnapshot.val() === null){
        activeUserRef.set({
          id: facebookUser.id,
          name: facebookUser.name,
          first_name: facebookUser.first_name,
          last_name: facebookUser.last_name,
          email: facebookUser.email
        });
      }

      createUserDef.resolve();
    });

    return createUserDef.promise;
  };

  return login;
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