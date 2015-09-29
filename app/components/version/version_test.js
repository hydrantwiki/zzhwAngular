'use strict';

describe('HydrantWiki.version module', function() {
  beforeEach(module('HydrantWiki.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
