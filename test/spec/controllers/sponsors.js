'use strict';

describe('Controller: SponsorsCtrl', function () {

  // load the controller's module
  beforeEach(module('boardrApp'));

  var SponsorsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SponsorsCtrl = $controller('SponsorsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SponsorsCtrl.awesomeThings.length).toBe(3);
  });
});
