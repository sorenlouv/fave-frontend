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
    .when('/add-meal', {
      templateUrl: 'src/pages/add-meal/add-meal.html',
      controller: 'addMealController'
    })
    .otherwise({redirectTo: '/home'});
}]);


// Main controller
// Consider variables defined in here "global"
app.controller('mainController', ['$scope', 'helpers', function ($scope, helpers) {
  'use strict';

  $scope.isTouch = helpers.isTouch();
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
app.controller("headerController", ['$scope', 'facebook', 'safeApply','$firebase', function ($scope, facebook, safeApply, $firebase) {
  'use strict';

    facebook.userLoggedIn.then(function(){
      FB.api('/me', function(activeUser) {
        safeApply($scope, function(){
          $scope.activeUser = activeUser;
        });
      });
    });

    /*
     * Click events
     ********************************************/



     $scope.meals = $firebase(new Firebase("https://fave.firebaseio.com/meals"));

    $scope.login = function(){
      facebook.sdkReady.then(function(){
        FB.login(null, { scope: "email" });
      });
    };





}]);
app.directive('swipeMeals', ['$timeout', '$firebase', 'helpers', '$rootScope', function ($timeout, $firebase, helpers, $rootScope) {
  'use strict';

  return {
    restrict: 'E',
    templateUrl: 'src/directives/swipe-meals/meal.html',
    replace: true,
    controller: function($scope){
    },
    link: function ($scope, $element, $attrs) {
      $rootScope.meals = $firebase(new Firebase("https://fave.firebaseio.com/meals"));

      // triggered on inital data load
      $scope.meals.$on('loaded', function(snapshot) {
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
app.controller('addMealController', ['$scope', '$firebase', 'helpers', '$http', 'safeApply', '$q', function ($scope, $firebase, helpers, $http, safeApply, $q) {
  'use strict';

  /*
   * Inital variables
   ****************************************/
  $scope.images = {};


  /*
   * Helper methods
   ****************************************/

  function saveImage(encodedImage){
    var timestamp = "1388134077";
    var signature = "7e68693d0780f8edfbd6c0380dbef6944dd044fc";

    return $http({
      url: "http://api.cloudinary.com/v1_1/konscript/image/upload",
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: helpers.getParams({
        file: "data:image/jpeg;base64," + encodedImage,
        api_key: "381981727586644",
        timestamp: timestamp,
        signature: signature
      })
    });
  }

  // Select existing image from computer
  // For desktop only
  var selectImage = function(file, imageCategory){
    var reader = new FileReader();
    reader.onload = function(readerEvt) {
        var binaryString = readerEvt.target.result;
        var encodedImage = btoa(binaryString);

        safeApply($scope, function(){
          $scope.images[imageCategory] = encodedImage;
        });
    };

    reader.readAsBinaryString(file);
  };

  // Capture image with device camera
  // For mobile only
  var captureImage = function(imageCategory){
    if(helpers.isTouch()){
      navigator.camera.getPicture( function(encodedImage){
        // success
        safeApply($scope, function(){
          $scope.images[imageCategory] = encodedImage;
        });
      }, function(error){
        // error
        alert(error);
      }, {
        quality: 75,
        sourceType : Camera.PictureSourceType.CAMERA,
        destinationType: Camera.DestinationType.DATA_URL,
        allowEdit: true
      });
    }
  };

  /*
   * Click events
   ****************************************/

  // Select image of food from computer
  // For desktop only
  $scope.selectFoodImage = function($event){
    var file = $event.target.files[0];
    selectImage(file, "food");
  };

  // Select image of receipt from computer
  // For desktop only
  $scope.selectReceiptImage = function($event){
    var file = $event.target.files[0];
    selectImage(file, "receipt");
  };

  // Capture image of food with device camera
  // For mobile only
  $scope.captureFoodImage = function(){
    captureImage("food");
  };

  // Capture image of receipt with device camera
  // For mobile only
  $scope.captureReceiptImage = function(){
    captureImage("receipt");
  };

  // Add meal
  $scope.addMeal = function(){
    $scope.meals = $firebase(new Firebase("https://fave.firebaseio.com/meals"));

    // save images
    var saveFoodImage = saveImage($scope.images.food);
    var saveReceiptImage = saveImage($scope.images.receipt);

    // When images has been uploaded
    $q.all([saveFoodImage, saveReceiptImage]).then(function(response){
      var foodImageUrl = response[0].data.url;
      var foodReceiptUrl = response[1].data.url;

      $scope.meals.$add({
        // title: $scope.title,
        // description: $scope.description,
        // restaurant: $scope.restaurant,
        // price: $scope.price,
        // faves: $scope.faves,
        images: {
          food: foodImageUrl,
          receipt: foodReceiptUrl,
          additional: []
        }
      });
    });
  };

}]);
app.controller('adminController', ['$scope', '$firebase', function ($scope, $firebase) {
  'use strict';

  $scope.meals = $firebase(new Firebase("https://fave.firebaseio.com/meals"));

  // Add meal
  $scope.addMeal = function(){
    $scope.meals.$add({
      title: $scope.title,
      description: $scope.description,
      restaurant: $scope.restaurant,
      price: $scope.price,
      faves: $scope.faves,
      images: {
        food: $scope.image
      }
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
  var userLoggedInDef = $q.defer();
  sdkReady.then(function(){
    FB.Event.subscribe('auth.authResponseChange', function(response) {
      if(response.status === "connected"){
        userLoggedInDef.resolve();
      }
    });
  });
  var userLoggedIn = userLoggedInDef.promise;

  //
  var devices = {
    // phone
    phone: {
      // Load SDK
      loadSDK: function(){
        loadJS('src/vendors/skip/facebook-sdk-phone.js');
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
        loadJS('src/vendors/skip/facebook-sdk-desktop.js');
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

  var device = helpers.isTouch() ? devices.phone : devices.desktop;
  device.loadSDK();
  device.init();

  return {
    userLoggedIn: userLoggedIn,
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

  // Determine whether current user is touch enabled device like phone, tablet etc
  var isTouch = function(){
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
  };

  // Create a serialized representation of an array or object
  function getParams(data){
    return Object.keys(data).map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
    }).join('&');
  }

  return {
    isTouch: isTouch,
    getParams: getParams
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