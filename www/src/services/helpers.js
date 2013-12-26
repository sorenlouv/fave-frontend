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