const pow = require('./pow');

test('should calculate pow', () =>  {
    expect(pow(3, 2)).toBe(9);
    expect(pow(3, 3)).toBe(27);
    expect(pow(1, 100)).toBe(1);
});