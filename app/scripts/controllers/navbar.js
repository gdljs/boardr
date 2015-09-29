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
    $scope.login = {};

    $rootScope.userSignedIn = $window.sessionStorage["authenticated"];

    $scope.currentUserUserame = $window.sessionStorage["username"];

    $scope.userIsAdmin = ($window.sessionStorage["a_level"] == "admin") ? true : false;

    $scope.login = function (user, pass) {
      auth.login(user, pass);
      $scope.login.username = undefined;
      $scope.login.password = undefined;
    };

    $scope.logout = function(){
        auth.logout();
    };

  });
