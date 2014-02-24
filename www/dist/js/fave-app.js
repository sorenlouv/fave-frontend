var app = angular.module('faveapp', ['ngTouch', 'ngAnimate', 'safeApply', 'ngRoute']);

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

/*
* Main controller
* Consider variables defined in here 'global'
*****************/
app.controller('mainController', ['$scope', 'helpers', function ($scope, helpers) {
  'use strict';

  $scope.isTouch = helpers.isTouch();
}]);
// make a fileinput listen for change events
app.directive('fileUploadOnChange', [function() {
  'use strict';

  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
      var onChangeFunc = $element.scope()[$attrs.fileUploadOnChange];
      $element.bind('change', onChangeFunc);
    }
  };
}]);
/* global google */

app.directive('googleMapsDirections', ['helpers', function (helpers) {
  'use strict';

  return {
    restrict: 'C',
    scope: {
      from: '=',
      to: '='
    },
    link: function ($scope, $element, $attrs) {

      var directionsDisplay = new google.maps.DirectionsRenderer();
      var directionsService = new google.maps.DirectionsService();
      var options = {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: true,
        navigationControl: false,
        draggable: true,
        disableDefaultUI: true,
        streetViewControl: false,
        keyboardShortcuts: false,
        disableDoubleClickZoom: false
      };
      var map = new google.maps.Map($element[0], options);
      directionsDisplay.setMap(map);

      $scope.$watch('from', function(value){
        if(value === undefined) return;
        var toConverted = helpers.convertMongoLocation($scope.to);
        var from = new google.maps.LatLng($scope.from.latitude, $scope.from.longitude);
        var to = new google.maps.LatLng(toConverted.latitude, toConverted.longitude);
        calcRoute(from, to);
      });

      $scope.$watch('to', function(value){
        if(value === undefined) return;
        var from = new google.maps.LatLng($scope.from.latitude, $scope.from.longitude);
        var to = new google.maps.LatLng($scope.to.latitude, $scope.to.longitude);
        calcRoute(from, to);
      });

      function calcRoute(start, end) {
        var request = {
            origin: start,
            destination:end,
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, function(response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
          }
        });
      }

    }
  };
}]);
app.directive('header', ['facebook', function(facebook) {
  'use strict';

  return {
    restrict: 'E',
    replace: false,
    templateUrl: 'src/directives/header/header.html',
    link: function ($scope, $element, $attrs) {
      // facebook.userLoggedIn.then(function(){
      //   FB.api('/me', function(activeUser) {
      //     safeApply($scope, function(){
      //       $scope.activeUser = activeUser;
      //     });
      //   });
      // });

      /*
       * Click events
       ********************************************/

      $scope.login = function(){
        facebook.sdkReady.then(function(){
          FB.login(null, { scope: 'email' });
        });
      };
    }
  };
}]);
/* global Spinner */

app.directive('loadingSpinner', [function() {
  'use strict';
  return {
    restrict: 'A',
    scope: {
      'loadingSpinner': '@'
    },
    transclude: true,
    replace: true,
    templateUrl: 'src/directives/loading-spinner/loading-spinner.html',
    link: function($scope, $element, $attrs) {

      var opts = {
        lines: 7, // The number of lines to draw
        length: 5, // The length of each line
        width: 2, // The line thickness
        radius: 3, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: '#000', // #rgb or #rrggbb or array of colors
        speed: 1.3, // Rounds per second
        trail: 60, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: false, // Whether to use hardware acceleration
        className: 'spinner', // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        top: 'auto', // Top position relative to parent in px
        left: 'auto' // Left position relative to parent in px
      };
      var spinner = new Spinner(opts);

      var loadingSpinnerAnimationElm = $element[0].querySelector('.loading-spinner-animation');
      var loadingSpinnerTextElm = $element[0].querySelector('.loading-spinner-text');
      loadingSpinnerTextElm.style.textIndent = opts.lines * 4 + 'px';

      $attrs.$observe('loadingSpinner', function(newValue, oldValue){
        if(newValue === undefined) return;

        if(newValue === 'true'){
          // console.log('Start spinner');
          spinner.spin(loadingSpinnerAnimationElm);
        }else{
          // console.log('Stop spinner');
          spinner.stop();
        }
      });
    }
  };
}]);
app.directive('swipeMeals', ['helpers', 'safeApply', function (helpers, safeApply) {
  'use strict';

  return {
    restrict: 'E',
    templateUrl: 'src/directives/swipe-meals/swipe-meals.html',
    replace: true,
    transclude: true,
    scope: {
      control: '='
    },
    link: function ($scope, $element, $attrs) {
      var numberOfElements;
      var sliderElm = $element[0];
      var swipeElement = Swipe(sliderElm, {
        disableScroll: true,
        callback: function(index, elem) {
          // Load more elements when we approach the end
          if(index === (numberOfElements - 5)){
            $scope.control.loadMore(numberOfElements);
          }
        }
      });

      $scope.control.recalculate = function(){
        numberOfElements = $element[0].querySelector('.swipe-wrap').children.length;
        swipeElement.setup();
      };

      $scope.control.prev = swipeElement.prev;
      $scope.control.next = swipeElement.next;

    }
  };
}]);
/* global Camera */

app.controller('addMealController', ['$scope', 'helpers', '$http', 'safeApply', '$q', function ($scope, helpers, $http, safeApply, $q) {
  'use strict';

  /*
   * Inital variables
   ****************************************/
  $scope.images = {};


  /*
   * Helper methods
   ****************************************/

  function saveImage(encodedImage){
    var timestamp = '1388134077';
    var signature = '7e68693d0780f8edfbd6c0380dbef6944dd044fc';

    return $http({
      url: 'http://api.cloudinary.com/v1_1/konscript/image/upload',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: helpers.getParams({
        file: 'data:image/jpeg;base64,' + encodedImage,
        api_key: '381981727586644',
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
    selectImage(file, 'food');
  };

  // Select image of receipt from computer
  // For desktop only
  $scope.selectReceiptImage = function($event){
    var file = $event.target.files[0];
    selectImage(file, 'receipt');
  };

  // Capture image of food with device camera
  // For mobile only
  $scope.captureFoodImage = function(){
    captureImage('food');
  };

  // Capture image of receipt with device camera
  // For mobile only
  $scope.captureReceiptImage = function(){
    captureImage('receipt');
  };

  // Add meal
  $scope.addMeal = function(){

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
app.controller('adminController', ['$scope', function ($scope) {
  'use strict';

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
app.controller('homeController', ['$scope', '$timeout', '$http',  'safeApply', 'helpers', function ($scope, $timeout, $http, safeApply, helpers) {
  'use strict';

  var mealListTotal = [];
  $scope.currentLocation = {};
  $scope.loadingGeoLocation = true;
  $scope.loadingMeals = true;

  // API interface for swipe meals directive
  $scope.swipeMealsControl = {
    loadMore: function(){},
    recalculate: function(){},
    next: function(){},
    prev: function(){}
  };

  var fetchMeals = function(offset){
    $http({method: 'GET', url: helpers.getConfig('backend_url') + '/meal/closest', params: {radius: 1, longitude: $scope.currentLocation.longitude, latitude: $scope.currentLocation.latitude, offset: offset}}).success(function(newMeals){
      // Add new meals to the existing ones
      mealListTotal = mealListTotal.concat(newMeals);

      // Update view with new elements
      safeApply($scope, function(){
        $scope.meals = mealListTotal;
        $scope.loadingMeals = false;
      });

      // Recalculate swipe
      $timeout(function(){
        $scope.swipeMealsControl.recalculate();
      });
    });
  };

  // Add fetchMeals to swipeMeals API
  $scope.swipeMealsControl.loadMore = fetchMeals;

  $scope.getDistanceToRestaurant = function(restaurantLocation){
    restaurantLocation = helpers.convertMongoLocation(restaurantLocation);
    var distanceInKilometres = helpers.getDistanceBetweenPoints($scope.currentLocation.latitude, $scope.currentLocation.longitude, restaurantLocation.latitude, restaurantLocation.longitude);
    return Math.round(distanceInKilometres * 1000);
  };

  helpers.getLocation().then(function(loc){
    $scope.currentLocation = loc;
    fetchMeals(0);

    safeApply($scope, function(){
      $scope.loadingGeoLocation = false;
    });
  });

}]);
app.factory('facebook', ['$q', 'helpers', function($q, helpers) {
  'use strict';

  var appId = '627802337276971';

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
      if(response.status === 'connected'){
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
app.factory('helpers', ['$http', '$q', 'productionConfig', 'localConfig', function($http, $q, productionConfig, localConfig) {
  'use strict';

  // Determine whether current user is touch enabled device like phone, tablet etc
  var isTouch = function(){
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
  };

  // Create a serialized representation of an array or object
  var getParams = function(data){
    return Object.keys(data).map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
    }).join('&');
  };

  var getConfig = function(parameter, environment){
    var config = environment === 'production' || isProduction() ? productionConfig : localConfig;
    return config[parameter];
  };

  var isProduction = function(){
    return location.host === getConfig('frontend_url', 'production');
  };

  var convertMongoLocation = function(location){
    return {
      latitude: location[1],
      longitude: location[0]
    };
  };

  var getLocation = function(){
    var deferred = $q.defer();

    // User allowed browser based geolocation
    navigator.geolocation.getCurrentPosition(function(position) {

      deferred.resolve({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });

    // User did not allow access to location, try with IP address
    }, function(){
      $http.jsonp('http://ipinfo.io/geo?callback=JSON_CALLBACK').success(function(data) {
        deferred.resolve({
          latitude: data.loc.split(',')[0],
          longitude: data.loc.split(',')[1]
        });
      });
    });

    return deferred.promise;
  };

  var toRad = function(degrees) {
    return degrees * (Math.PI / 180);
  };

  var getDistanceBetweenPoints = function(lat1, lon1, lat2, lon2){
    var earthRadius = 6371; // km

    // Calculate difference and convert to radian
    var diffLatRad = toRad(lat2-lat1);
    var diffLonRad = toRad(lon2-lon1);
    var lat1Rad = toRad(lat1);
    var lat2Rad = toRad(lat2);

    var a = Math.sin(diffLatRad/2) * Math.sin(diffLatRad/2) +
            Math.sin(diffLonRad/2) * Math.sin(diffLonRad/2) * Math.cos(lat1Rad) * Math.cos(lat2Rad);

    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var distance = earthRadius * c;
    return distance;
  };

  return {
    isTouch: isTouch,
    getParams: getParams,
    getConfig: getConfig,
    getLocation: getLocation,
    getDistanceBetweenPoints: getDistanceBetweenPoints,
    convertMongoLocation: convertMongoLocation
  };
}]);
app.constant('localConfig', {
  'frontend_url': 'http://app.joinfave.local',
  'backend_url': 'http://localhost:8888'
});

app.constant('productionConfig', {
  'frontend_url': 'http://app.joinfave.com',
  'backend_url': 'http://api.joinfave.com'
});
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