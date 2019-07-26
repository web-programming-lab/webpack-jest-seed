const min = require('./index');

test('returns the minimal value', () =>  {
    expect(min(1, 2)).toBe(1);
    expect(min(3, -1)).toBe(-1);
    expect(min(1, 1)).toBe(1);
});