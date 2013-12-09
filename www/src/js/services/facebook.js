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