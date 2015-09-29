'use strict';

/**
 * @ngdoc function
 * @name boardrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the boardrApp
 */
angular.module('boardrApp')
  .controller('MainCtrl', function ($rootScope, $scope, $http, $window, SERVICEURI) {
    $scope.server = {};
    $scope.server.response = 'No se puede acceder al recurso';

    $scope.check = function () {
      $http.defaults.headers.common['Authorization'] = 'Bearer ' + $window.sessionStorage["auth_token"];
      $http.get(SERVICEURI + 'api/posts').
          then(function(result){
              $scope.server.response = result.data;
          }, function(error) {
              $scope.server.response = 'No se pudo acceder al recurso';
          });
    }
  });
