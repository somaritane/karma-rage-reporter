'use strict';

var MAX_TESTS = 1000,
    fakeAssert = function() {
        expect(Math.floor(Math.random() * 100)).toBeGreaterThan(0);
    };

describe('Rage reporter', function() {
    for (var i = MAX_TESTS - 1; i >= 0; i--) {
        it('should rage', fakeAssert);
    }
});
