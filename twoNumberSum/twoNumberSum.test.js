const twoNumberSumTest = require('./twoNumberSum');

test('Test 1', () => {
    expect(twoNumberSumTest([3, 5, -4, 8, 11, 1, -1, 6], 10)).toEqual([11, -1])
});

test('Test 2', () => {
    expect(twoNumberSumTest([4, 6], 10)).toEqual([4, 6])
});

test('Test 3', () => {
    expect(twoNumberSumTest([4, 6, 1], 5)).toEqual([4, 1])
});

test('Test 4', () => {
    expect(twoNumberSumTest([4, 6, 1, -3], 3)).toEqual([6, -3])
});

test('Test 5', () => {
    expect(twoNumberSumTest([1, 2, 3, 4, 5, 6, 7, 8, 9], 17)).toEqual([8, 9])
});

test('Test 6', () => {
    expect(twoNumberSumTest([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18)).toEqual([3, 15])
});

test('Test 7', () => {
    expect(twoNumberSumTest([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5)).toEqual([-5, 0])
});

test('Test ', () => {
    expect(twoNumberSumTest([14], 15)).toEqual([])
});

test('Test ', () => {
    expect(twoNumberSumTest([12, 1, 3], 15)).not.toEqual([])
});