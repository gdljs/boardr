'use strict';

/**
 * @ngdoc function
 * @name boardrApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the boardrApp
 */
angular.module('boardrApp')
  .controller('NavbarCtrl', function ($rootScope, $scope, $window, auth) {
    $scope.user = {};

    $rootScope.userSignedIn = $window.sessionStorage["authenticated"];

    $scope.currentUserUserame = $window.sessionStorage["username"];

    $scope.userIsAdmin = ($window.sessionStorage["a_level"] == "admin") ? true : false;

    $scope.login = function (user, pass) {
      auth.login(user, pass);
      $scope.user.username = undefined;
      $scope.user.password = undefined;
    };

    $scope.logout = function(){
        auth.logout();
    };

  });
