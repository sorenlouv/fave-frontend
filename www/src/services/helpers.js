app.factory('helpers', [function() {
  'use strict';

  // Determine whether current user is on a phone or desktop
  var isPhone = function(){
    return navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/) === null ? false : true;
  };

  return {
    isPhone: isPhone
  };
}]);