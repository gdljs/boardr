'use strict';

describe('Service: SERVICEURI', function () {

  // load the service's module
  beforeEach(module('boardrApp'));

  // instantiate service
  var SERVICEURI;
  beforeEach(inject(function (_SERVICEURI_) {
    SERVICEURI = _SERVICEURI_;
  }));

  it('should do something', function () {
    expect(!!SERVICEURI).toBe(true);
  });

});
