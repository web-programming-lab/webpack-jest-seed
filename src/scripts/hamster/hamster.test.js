const speedy = require('./hamster').speedy;
const lazy = require('./hamster').lazy;

test('only speedy should have a banana in the stomach', () => {
    speedy.eat('banana');
    expect(speedy.stomach).toEqual(["banana"]);
    expect(lazy.stomach).toBeUndefined();
});

