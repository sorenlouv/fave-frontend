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