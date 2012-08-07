angular.module("Leanucci", []).
  filter('capitalize', function() {
    return function(input) {
      var out = input.slice(1);
      var first = input.charAt(0).toUpperCase();
      return first + out;
    }
  }).
  filter('default', function() {
    return function(input, defaultVal) {
      var out = (input.length < 1) ? defaultVal : input;
      return out;
    }
  });


function ReposCtrl($scope, $http) {
  $http.jsonp("https://api.github.com/users/leanucci/repos?callback=JSON_CALLBACK").
    success(function(data) {
      $scope.repos = data.data;
    });
}