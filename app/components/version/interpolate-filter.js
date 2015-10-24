'use strict';

angular.module('myApp.version.interpolate-filter', [])

.filter('interpolate', ['versionValue', function(versionValue) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, versionValue);
  };
}]);
