import { isGreaterThan } from '../src/index';

test('all', () => {
  expect(isGreaterThan(2, 1)).toBe(true);

  expect(isGreaterThan(2, 2)).toBe(false);
  expect(isGreaterThan(1, 2)).toBe(false);
  expect(isGreaterThan('2', 1)).toBe(false);
  expect(isGreaterThan(2, '1')).toBe(false);
  expect(isGreaterThan('2', '1')).toBe(false);
  expect(isGreaterThan(['2'], ['1'])).toBe(false);
  expect(isGreaterThan(21)).toBe(false);
  expect(isGreaterThan(undefined, 1)).toBe(false);
  expect(isGreaterThan(2, undefined)).toBe(false);
  expect(isGreaterThan(null, 1)).toBe(false);
  expect(isGreaterThan(2, null)).toBe(false);
  expect(isGreaterThan(undefined, undefined)).toBe(false);
  expect(isGreaterThan(null, null)).toBe(false);

  // Generic
  expect(isGreaterThan()).toBe(false);
  expect(isGreaterThan(true)).toBe(false);
  expect(isGreaterThan(false)).toBe(false);
  expect(isGreaterThan(null)).toBe(false);
  expect(isGreaterThan(undefined)).toBe(false);
  expect(isGreaterThan({})).toBe(false);
  expect(isGreaterThan([])).toBe(false);
});
