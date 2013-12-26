app.factory('helpers', [function() {
  'use strict';

  // Determine whether current user is touch enabled device like phone, tablet etc
  var isTouch = function(){
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
  };

  return {
    isTouch: isTouch
  };
}]);