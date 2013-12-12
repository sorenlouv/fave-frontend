var app = angular.module('faveapp', ['ngTouch', 'ngAnimate', 'safeApply', 'firebase', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  'use strict';

  $routeProvider
    .when('/home', {
      templateUrl: 'src/pages/home/home.html',
      controller: 'homeController'
    })
    .when('/admin', {
      templateUrl: 'src/pages/admin/admin.html',
      controller: 'adminController'
    })
    .otherwise({redirectTo: '/home'});
}]);


// make a fileinput listen for change events
app.directive('fileUploadOnChange', [function() {
  'use strict';

  return {
    restrict: "A",
    link: function ($scope, $element, $attrs) {
      var onChangeFunc = $element.scope()[$attrs.fileUploadOnChange];
      $element.bind('change', onChangeFunc);
    }
  };
}]);
app.controller("headerController", ['$scope', 'facebook', 'safeApply', 'helpers', function ($scope, facebook, safeApply, helpers) {
  'use strict';

  $scope.isPhone = helpers.isPhone();

    // facebook.userReady.then(function(){
    //   FB.api('/me', function(activeUser) {
    //     safeApply($scope, function(){
    //       $scope.activeUser = activeUser;
    //     });
    //   });
    // });

    /*
     * Click events
     ********************************************/

    // $scope.login = function(){
    //   facebook.sdkReady.then(function(){
    //     FB.login(null, { scope: "email" });
    //   });
    // };

    $scope.settings = function() {
      console.log("test");
    };

    // For desktop only
    $scope.uploadImage = function($event){
      var file = $event.target.files[0];
      var reader = new FileReader();

      reader.onload = function(readerEvt) {
          var binaryString = readerEvt.target.result;
          var encodedFile = btoa(binaryString);
          console.log(encodedFile);
      };

      reader.readAsBinaryString(file);
    };

    // For mobile only
    $scope.captureImage = function(){
      navigator.camera.getPicture( function(image){
        // success
        $scope.$apply(function(){
          $scope.imageResponse = image;
        });
      }, function(error){
        // error
        alert("error");
        $scope.imageResponse = error;
      }, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        allowEdit: true
      });
    };

}]);
app.directive('swipeMeals', ['$timeout', 'angularFireCollection', function ($timeout, angularFireCollection) {
  'use strict';

  return {
    restrict: 'E',
    templateUrl: 'src/directives/swipe-meals/meal.html',
    replace: true,
    controller: function($scope){
    },
    link: function ($scope, $element, $attrs) {
      var mealsRef = new Firebase("https://fave.firebaseio.com/meals");
      mealsRef.on('value', function(snapshot) {
        $scope.$apply(function(){
          $scope.meals = snapshot.val();
        });
        $timeout(function(){
          initializeSlider();
        }, 0);
      });

      var initializeSlider = function(){
        var swipeElement = Swipe($element[0], {
          disableScroll: true,
          callback: function(index, elem) {},
          transitionEnd: function(index, elem) {}
        });

        $scope.prev = swipeElement.prev;
        $scope.next = swipeElement.next;
      };
    }
  };
}]);
app.controller('adminController', ['$scope', 'angularFire', function ($scope, angularFire) {
  'use strict';

  var mealsRef = new Firebase("https://fave.firebaseio.com/meals");
  $scope.meals = null;
  angularFire(mealsRef, $scope, 'meals');

  // Add meal
  $scope.addMeal = function(){
    var newMeal = mealsRef.push({
      title: $scope.title,
      description: $scope.description,
      restaurant: $scope.restaurant,
      price: $scope.price,
      faves: $scope.faves,
      images: [$scope.image]
    });
  };

  // remove meal
  $scope.removeMeal = function() {

  };

}]);
app.controller('homeController', ['$scope', 'facebook', 'safeApply', 'helpers', function ($scope, facebook, safeApply, helpers) {
  'use strict';

  
}]);
app.factory('facebook', ['$q', 'helpers', function($q, helpers) {
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

  //
  var devices = {
    // phone
    phone: {
      // Load SDK
      loadSDK: function(){
        loadJS('src/vendors/facebook-sdk-phone.js');
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

    // Desktop
    desktop: {
      // Load SDK
      loadSDK: function(){
        loadJS('src/vendors/facebook-sdk-desktop.js');
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

  var device = helpers.isPhone() ? devices.phone : devices.desktop;
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
app.factory('helpers', [function() {
  'use strict';

  // Determine whether current user is on a phone or desktop
  var isPhone = function(){
    return navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/);
  };

  return {
    isPhone: isPhone
  };
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