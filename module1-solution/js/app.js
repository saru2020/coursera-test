(function () {
'use strict';

angular.module('myLunchApp', [])

.controller('LunchCheckerController', function ($scope) {
  $scope.name = "";
  $scope.itemsCount = 0;

  $scope.verifyItems = function () {
    // console.log("name is:" + $scope.name);
    // var arrayOfStrings = name.split(",");
    var arrayOfStrings = splitString($scope.name, ',')
    $scope.itemsCount = arrayOfStrings.length;
    // console.log("itemsCount:" + $scope.itemsCount);
    // console.log("Array of strings:" + arrayOfStrings.join(' / '));
  };

  function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);

    // console.log('The original string is: "' + stringToSplit + '"');
    // console.log('The separator is: "' + separator + '"');
    // console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));

    return arrayOfStrings;
  }

  $scope.checkLunch = function () {
    if ($scope.itemsCount < 4) {
      return "Enjoy!";
    }
    else{
      return "Too much!";
    }
  };
});

})();
