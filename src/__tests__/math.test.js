const { add, subtract, multiply, divide } = require('../math');

describe('Math utilities', () => {
  test('adds two numbers correctly', () => { expect(add(2, 3)).toBe(5); });
  test('subtracts correctly', () => { expect(subtract(5, 2)).toBe(3); });
  test('multiply fails deliberately', () => { expect(multiply(2, 3)).toBe(99); }); // deliberate fail
  test.skip('skipped test', () => { expect(true).toBe(true); });
});

describe('Division', () => {
  test('divides correctly', () => { expect(divide(10, 2)).toBe(5); });
  test('throws on divide by zero', () => { expect(() => divide(1, 0)).toThrow('Division by zero'); });
});
