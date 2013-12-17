// make a fileinput listen for change events
app.directive('fileUploadOnChange', [function() {
  'use strict';

  return {
    restrict: "A",
    link: function ($scope, $element, $attrs) {
      var onChangeFunc = $element.scope()[$attrs.fileUploadOnChange];
      $element.bind('change', onChangeFunc);
    }
  };
}]);