import { isBoolean } from '../src/index';

test('all', () => {
  expect(isBoolean(true)).toBe(true);
  expect(isBoolean(false)).toBe(true);

  expect(isBoolean('foo')).toBe(false);
  expect(isBoolean(1)).toBe(false);

  // Generic
  expect(isBoolean()).toBe(false);
  expect(isBoolean(null)).toBe(false);
  expect(isBoolean(undefined)).toBe(false);
  expect(isBoolean({})).toBe(false);
  expect(isBoolean([])).toBe(false);
});
