'use strict';

angular.module('myApp.version.version-directive', [])

.directive('appVersion', ['versionValue', function(versionValue) {
  return function(scope, elm, attrs) {
    elm.text(versionValue);
  };
}]);
