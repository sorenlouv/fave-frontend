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