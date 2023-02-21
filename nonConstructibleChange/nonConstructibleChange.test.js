const nonConstructibleChange = require('./nonConstructibleChange');


test('Test 1', () => {
    expect(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])).toBe(20)
})
test('Test 2', () => {
    expect(nonConstructibleChange([1,1,1,1,1])).toBe(6)
})
test('Test 3', () => {
    expect(nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100])).toBe(55)
})
test('Test 4', () => {
    expect(nonConstructibleChange([6, 4, 5, 1, 1, 8, 9])).toBe(3)
})
test('Test 5', () => {
    expect(nonConstructibleChange([])).toBe(1)
})
test('Test 6', () => {
    expect(nonConstructibleChange([87])).toBe(1)
})
test('Test 7', () => {
    expect(nonConstructibleChange([1])).toBe(2)
})