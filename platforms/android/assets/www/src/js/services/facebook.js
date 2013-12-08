app.factory('facebook', ['$q',
  function($q) {
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
      // phone_native: {
      //   init: function(){

      //     this.loadJS('src/js/vendors/facebook-js-sdk.js', function() {
      //       alert("Facebook SKD Loaded");
      //     });

      //     this.loadJS('src/js/vendors/cdv-plugin-fb-connect.js', function() {
      //       alert("cdv-plugin-fb-connect.js loaded");
      //     });

      //     // Attach event listener
      //     document.addEventListener('deviceready', function() {
      //       FB.init({
      //         appId: this.appId,
      //         nativeInterface: CDV.FB,
      //         useCachedDialogs: false
      //       });
      //       deferred.resolve();
      //     }, false);
      //   },

      //   // Phonegap SDK + Facebook SDK ready
      //   sdkReady: function(){
      //     if ((typeof cordova == 'undefined') && (typeof Cordova == 'undefined')) alert('Cordova variable does not exist. Check that you have included cordova.js correctly');
      //     if (typeof CDV == 'undefined') alert('CDV variable does not exist. Check that you have included cdv-plugin-fb-connect.js correctly');
      //     if (typeof FB == 'undefined') alert('FB variable does not exist. Check that you have included the Facebook JS SDK file.');

      //     return deferred.promise;
      //   },
      // },

      // Web
      web: {
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

          loadJS('src/js/vendors/facebook-js-sdk.js');
        }
      }
    };

    // var device = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/) ? devices.phone : devices.web;
    var device = devices.web;
    device.init();

    return deferred.promise;
  }
]);