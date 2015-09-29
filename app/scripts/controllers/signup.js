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

    $scope.signup = {};

    $scope.submitForm = function() {
        auth.signup($scope.signup.username, $scope.signup.password, $scope.signup.email);
    };
  });
