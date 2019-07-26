const min = require('./min');

test('should return the minimum number', () => {
    expect(min(2, 5)).toBe(2);
    expect(min(3, -1)).toBe(-1);
    expect(min(1, 1)).toBe(1);
});