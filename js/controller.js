'use strict';

// Controllers

function ReposCtrl($scope, $http) {
  $http.get("http://api.github.com/users/leanucci/repos").success(function(data) {
    $scope.repos = data;
  });
}