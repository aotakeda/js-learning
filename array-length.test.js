const { expect } = require('@jest/globals');
const arrayLength = require('./array-length');
const arrayTest = [1,2,3,4,5]

test('the array\'s length should be 5', () => {
    expect(arrayLength(arrayTest)).toBe(5);
});

test('the array\'s length should not be 4', () => {
    expect(arrayLength(arrayTest)).not.toBe(4);
});
