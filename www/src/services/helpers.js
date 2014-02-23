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