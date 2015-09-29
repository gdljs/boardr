'use strict';

/**
 * @ngdoc service
 * @name boardrApp.auth
 * @description
 * # auth
 * Service in the boardrApp.
 */
angular.module('boardrApp')
  .service('auth', function ($http, $rootScope, $window, $location, SERVICEURI) {
    var self = this;

    this.login = function(username, password) {
        $http.post(SERVICEURI + 'api/auth/login', {'username': username, 'password': password}).
            then(function(result) {
                toastr.success('Welcome!');
                console.log(result);
                $window.sessionStorage["auth_token"] = result.data.auth_token;
                $window.sessionStorage["email"] = result.data.email;
                $window.sessionStorage["username"] = result.data.username;
                $window.sessionStorage["authenticated"] = true;
                $window.sessionStorage["a_level"] = result.data.role;
                $window.sessionStorage["uid"] = result.data.userid.$oid;
                $rootScope.userSignedIn = true;
                //reload SPA
                $location.path('/');
            }, function(error) {
                toastr.error('Maybe you mistyped something, please try again', 'Can\'t login');
                $rootScope.userSignedIn = false;
                $window.sessionStorage.clear();
                console.log(error.data);
            });
    };

    this.signup = function(username, password, email){
        $http.post(SERVICEURI + 'api/auth/signup', { 'username' : username, 'password' : password, 'email': email }).
            then(function(result){
                self.login(username, password);
                $location.path('/');
                window.location.reload();
            }, function(error){
                toastr.error('Something went wrong with that signup');
                console.log(error.data);
            });
    };

    this.logout = function() {
        $window.sessionStorage.clear();
        $rootScope.userSignedIn = false;
    };

  });
