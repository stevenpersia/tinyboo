import { isNumber } from '../src/index';

test('all', () => {
  expect(isNumber(1)).toBe(true);
  expect(isNumber(-1)).toBe(true);

  expect(isNumber('1')).toBe(false);
  expect(isNumber('')).toBe(false);
  expect(isNumber([1])).toBe(false);

  // Generic
  expect(isNumber()).toBe(false);
  expect(isNumber(true)).toBe(false);
  expect(isNumber(false)).toBe(false);
  expect(isNumber(null)).toBe(false);
  expect(isNumber(undefined)).toBe(false);
  expect(isNumber({})).toBe(false);
  expect(isNumber([])).toBe(false);
});
