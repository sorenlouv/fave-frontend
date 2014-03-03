app.config(['$httpProvider', '$provide', function($httpProvider, $provide) {
    'use strict';

    $provide.factory('myHttpInterceptor', ['$q', function($q) {
        return {
          'response': function(response) {

            /*
            * Intercept calls to "/meal/*" and convert coordinate property from mongo format (indexed array) to object format (named properties)
            ********************/
            if(response.config.url.indexOf('/meal/') > -1 && typeof response.data === 'object'){
              response.data = response.data.map(function(meal){
                meal.restaurant.coordinate = {
                  latitude: meal.restaurant.coordinate[1],
                  longitude: meal.restaurant.coordinate[0]
                };
                return meal;
              });
            }
            return response || $q.when(response);
          }
        };
      }
    ]);

    // Add interceptor
    $httpProvider.interceptors.push('myHttpInterceptor');
  }
]);