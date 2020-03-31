import { isLessThan } from '../src/index';

test('all', () => {
  expect(isLessThan(1, 2)).toBe(true);

  expect(isLessThan(2, 2)).toBe(false);
  expect(isLessThan(2, 1)).toBe(false);
  expect(isLessThan('1', 2)).toBe(false);
  expect(isLessThan(1, '2')).toBe(false);
  expect(isLessThan('1', '2')).toBe(false);
  expect(isLessThan(['1'], ['2'])).toBe(false);
  expect(isLessThan(12)).toBe(false);
  expect(isLessThan(undefined, 2)).toBe(false);
  expect(isLessThan(1, undefined)).toBe(false);
  expect(isLessThan(null, 2)).toBe(false);
  expect(isLessThan(1, null)).toBe(false);
  expect(isLessThan(undefined, undefined)).toBe(false);
  expect(isLessThan(null, null)).toBe(false);

  // Generic
  expect(isLessThan()).toBe(false);
  expect(isLessThan(true)).toBe(false);
  expect(isLessThan(false)).toBe(false);
  expect(isLessThan(null)).toBe(false);
  expect(isLessThan(undefined)).toBe(false);
  expect(isLessThan({})).toBe(false);
  expect(isLessThan([])).toBe(false);
});
