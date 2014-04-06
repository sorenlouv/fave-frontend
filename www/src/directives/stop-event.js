// stop event propagation on a single element
app.directive('stopEvent', function () {
  'use strict';

  return {
      restrict: 'A',
      link: function (scope, element, attr) {
          element.bind(attr.stopEvent, function (e) {
              e.stopPropagation();
          });
      }
  };
});
