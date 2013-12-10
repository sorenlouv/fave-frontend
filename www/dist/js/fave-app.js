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


app.directive('swipeMeals', ['$timeout', function ($timeout) {
  'use strict';

  return {
    restrict: 'E',
    templateUrl: 'src/directives/swipe-meals/meal.html',
    replace: true,
    controller: function($scope){
      $scope.meals = [
        {
          title: "Tom Ka Gai",
          description: "Thai Chicken Soup (Tom Ka Gai) has that distinctive Thai flavor - a balance of spicy, salty, sweet and sour. ",
          restaurant: "ASIO Thai",
          price: 11,
          faves: 21,
          images: ["img/chicken.jpg"]
        },
        {
          title: "Test",
          description: "Halløj!",
          restaurant: "ASIO Thai",
          price: 11,
          faves: 21,
          images: ["img/chicken.jpg"]
        }
      ];
    },
    link: function ($scope, $element, $attrs) {
      $timeout(function(){
        var swipeElement = Swipe($element[0], {
          disableScroll: true,
          callback: function(index, elem) {},
          transitionEnd: function(index, elem) {}
        });

        $scope.prev = swipeElement.prev;
        $scope.next = swipeElement.next;

      }, 0);
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
        loadJS('dist/js/vendors/facebook-sdk-phone.js');
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
        loadJS('dist/js/vendors/facebook-sdk-web.js');
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