app.factory('homeMethods', ['$http', 'safeApply', 'helpers', function ($http, safeApply, helpers) {
  'use strict';

  /*
  * HTTP request to backend, to get meals from nearby restaurants
  *****************/
  var getClosestMeals = function(currentLocation, offset){
    return $http({
      method: 'GET',
      url: helpers.getConfig('backend_url') + '/meal/closest',
      params: {
        radius: 1,
        longitude: currentLocation.longitude,
        latitude: currentLocation.latitude,
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
  var getDistanceToRestaurant = function(currentLocation, restaurantLocation){
    var distance = helpers.getDistanceBetweenPoints(currentLocation.latitude, currentLocation.longitude, restaurantLocation.latitude, restaurantLocation.longitude);
    return Math.ceil(distance * 10 * 1.3) * 100;
  };


  /*
  * Return values
  *****************/
  return {
    getClosestMeals: getClosestMeals,
    getRestaurantMeals: getRestaurantMeals,
    getDistanceToRestaurant: getDistanceToRestaurant
  };

}]);