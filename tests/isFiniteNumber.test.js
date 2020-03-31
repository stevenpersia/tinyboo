import { isFiniteNumber } from '../src/index';

test('all', () => {
  expect(isFiniteNumber(1)).toBe(true);
  expect(isFiniteNumber(-1)).toBe(true);
  expect(isFiniteNumber(0)).toBe(true);

  expect(isFiniteNumber('1')).toBe(false);
  expect(isFiniteNumber(Infinity)).toBe(false);

  // Generic
  expect(isFiniteNumber()).toBe(false);
  expect(isFiniteNumber(true)).toBe(false);
  expect(isFiniteNumber(false)).toBe(false);
  expect(isFiniteNumber(null)).toBe(false);
  expect(isFiniteNumber(undefined)).toBe(false);
  expect(isFiniteNumber({})).toBe(false);
  expect(isFiniteNumber([])).toBe(false);
});
