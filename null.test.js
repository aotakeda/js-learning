const { expect } = require('@jest/globals');
const isNull = require('./null');
const nullTest = require('./null');

test('should be null', () => {
    expect(isNull()).toBeNull();
})
