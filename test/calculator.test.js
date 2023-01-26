const calculator = require("./calculator")

test('Addition', () => {
  expect(calculator.add(2, 2)).toEqual(4);
});
test('Subtraction', () => {
    expect(calculator.subtract(6, 2)).toEqual(4);
});
test('Division', () => {
    expect(calculator.divide( 8, 2 )).toEqual(4);
});
test('Multiply', () => {
    expect(calculator.multiply(2, 2)).toEqual(4);
})

