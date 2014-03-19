app.factory('homeMethods', ['$http', 'safeApply', 'helpers', function ($http, safeApply, helpers) {
  'use strict';

  /*
  * Default values
  *****************/
  var settings = {
    currentLocation: {},
    loadingGeoLocation: true,
    loadingMeals: true,
    restaurantMode: false,
    clickedRestaurant: {},
  };

  /*
  * HTTP request to backend, to get meals from nearby restaurants
  *****************/
  var getClosestMeals = function(offset){
    return $http({
      method: 'GET',
      url: helpers.getConfig('backend_url') + '/meal/closest',
      params: {
        radius: 1,
        longitude: settings.currentLocation.longitude,
        latitude: settings.currentLocation.latitude,
        offset: offset,
        sort: 'review_count',
        sort_order: -1
      }
    });
  };

  /*
  * HTTP request to backend, to get meals from specific restaurant
  *****************/
  var getRestaurantMeals = function(restaurantId){

    return function(offset){
      return $http({
        method: 'GET',
        url: helpers.getConfig('backend_url') + '/meal',
        params: {
          'restaurant._id': restaurantId,
          offset: offset
        }
      });
    };
  };

  /*
  * Return calculated distance in kilometres to restaurant
  *****************/
  var getDistanceToRestaurant = function(restaurantLocation){
    var distance = helpers.getDistanceBetweenPoints(settings.currentLocation.latitude, settings.currentLocation.longitude, restaurantLocation.latitude, restaurantLocation.longitude);
    return Math.ceil(distance * 10 * 1.3) * 100;
  };


  /*
  * Return values
  *****************/
  return {
    settings: settings,
    getClosestMeals: getClosestMeals,
    getRestaurantMeals: getRestaurantMeals,
    getDistanceToRestaurant: getDistanceToRestaurant
  };

}]);