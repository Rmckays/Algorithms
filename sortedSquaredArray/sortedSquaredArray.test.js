const sortedSquaredArray = require('./sortedSquaredArray');

test('Test 1', () => {
    expect(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])).toEqual([1, 4, 9, 25, 36, 64, 81])
})

test('Test 2', () => {
    expect(sortedSquaredArray([1])).toEqual([1])
})

test('Test 3', () => {
    expect(sortedSquaredArray([0])).toEqual([0])
})

test('Test 4', () => {
    expect(sortedSquaredArray([-2, -1])).toEqual([1, 4])
})

test('Test 5', () => {
    expect(sortedSquaredArray([-7, -3, 1, 9, 22, 30])).toEqual([1, 9, 49, 81, 484, 900])
})