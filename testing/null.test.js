const { expect } = require('@jest/globals');
const isNull = require('./null');

test('should be null', () => {
    expect(isNull()).toBeNull();
})
test('should not be null', () => {
    expect(isNull()).not.toBeNull();
})
