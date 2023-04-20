const { calculator } = require("../functions/calculator")

test('Sum test: 2,3', function() {
    expect(calculator.sum(2,3)).toBe(5);
})

test('Subtract 9,2', function() {
    expect(calculator.subtract(9,2)).toBe(7);
})

test('Multiply 2,4', function() {
    expect(calculator.multiply(2,4)).toBe(8);
})

test('Divide 20,4', function() {
    expect(calculator.divide(20,4)).toBe(5);
})