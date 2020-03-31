import { isString } from '../src/index';

test('all', () => {
  expect(isString('')).toBe(true);
  expect(isString('foo')).toBe(true);

  expect(isString(1)).toBe(false);
  expect(isString(['foo'])).toBe(false);
  expect(isString({ key: 'foo' })).toBe(false);

  // Generic
  expect(isString()).toBe(false);
  expect(isString(true)).toBe(false);
  expect(isString(false)).toBe(false);
  expect(isString(null)).toBe(false);
  expect(isString(undefined)).toBe(false);
  expect(isString({})).toBe(false);
  expect(isString([])).toBe(false);
});
