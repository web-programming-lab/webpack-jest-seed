const Ladder = require('./ladder');

test('should go one step up', () =>  {
    let ladder = new Ladder();
    ladder.up();
    expect(ladder.currentStep()).toBe(1);
});

test('should go one step down', () =>  {
    let ladder = new Ladder();

    ladder.up();
    console.log('current step: %s', ladder.step);
    ladder.down();
    expect(ladder.currentStep()).toBe(0);
});

test('should go three steps up and one step down (in a chain)', () =>  {
    expect(new Ladder().up().up().up().down().currentStep()).toBe(2);
});

