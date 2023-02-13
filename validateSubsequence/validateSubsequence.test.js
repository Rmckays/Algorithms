const validateSubsequence = require('./validateSubsequence');

test('Test 1', () => {
   expect(validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])).toBe(true);
});

test('Test 2', () => {
   expect(validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10])).toBe(true);
});

test('Test 3', () => {
   expect(validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [25])).toBe(true);
});

test('Test 4', () => {
   expect(validateSubsequence([1, 1, 1, 1], [1, 1, 1])).toBe(true);
});

test('Test 5', () => {
   expect(validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10, 12])).toBe(false);
});

test('Test 6', () => {
   expect(validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [3])).toBe(false);
});