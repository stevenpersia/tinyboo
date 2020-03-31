import { isObject } from '../src/index';

test('all', () => {
  expect(isObject({})).toBe(true);

  expect(isObject('foo')).toBe(false);
  expect(isObject('')).toBe(false);
  expect(isObject(1)).toBe(false);

  // Generic
  expect(isObject()).toBe(false);
  expect(isObject(true)).toBe(false);
  expect(isObject(false)).toBe(false);
  expect(isObject(null)).toBe(false);
  expect(isObject(undefined)).toBe(false);
  expect(isObject([])).toBe(false);
});
