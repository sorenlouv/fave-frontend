app.directive('header', [function() {
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

      // $scope.login = function(){
      //   facebook.sdkReady.then(function(){
      //     FB.login(null, { scope: 'email' });
      //   });
      // };
    }
  };
}]);