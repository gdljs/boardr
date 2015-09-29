'use strict';

/**
 * @ngdoc function
 * @name boardrApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the boardrApp
 */
angular.module('boardrApp')
  .controller('SignupCtrl', function ($scope, $rootScope, $location, auth) {
    if ($rootScope.userSignedIn) {
        $location.path('/');
    }

    $scope.submitForm = function(username, password, email) {
        auth.signup(username, password, email);
    };
  });
