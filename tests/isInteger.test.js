import { isInteger } from '../src/index';

test('all', () => {
  expect(isInteger(1)).toBe(true);
  expect(isInteger(0)).toBe(true);
  expect(isInteger(-1)).toBe(true);

  expect(isInteger('')).toBe(false);
  expect(isInteger('1')).toBe(false);

  // Generic
  expect(isInteger()).toBe(false);
  expect(isInteger(true)).toBe(false);
  expect(isInteger(false)).toBe(false);
  expect(isInteger(null)).toBe(false);
  expect(isInteger(undefined)).toBe(false);
  expect(isInteger({})).toBe(false);
  expect(isInteger([])).toBe(false);
});
