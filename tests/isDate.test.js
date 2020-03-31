import { isDate } from '../src/index';

test('all', () => {
  expect(isDate(new Date())).toBe(true);

  expect(isDate('foo')).toBe(false);
  expect(isDate(1)).toBe(false);

  // Generic
  expect(isDate()).toBe(false);
  expect(isDate(true)).toBe(false);
  expect(isDate(false)).toBe(false);
  expect(isDate(null)).toBe(false);
  expect(isDate(undefined)).toBe(false);
  expect(isDate({})).toBe(false);
  expect(isDate([])).toBe(false);
});
