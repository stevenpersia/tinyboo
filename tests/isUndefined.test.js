import { isUndefined } from '../src/index';

test('all', () => {
  expect(isUndefined(undefined)).toBe(true);
  expect(isUndefined()).toBe(true);

  expect(isUndefined('')).toBe(false);
  expect(isUndefined('foo')).toBe(false);
  expect(isUndefined(1)).toBe(false);
  expect(isUndefined(['foo'])).toBe(false);
  expect(isUndefined({ key: 'foo' })).toBe(false);

  // Generic
  expect(isUndefined(true)).toBe(false);
  expect(isUndefined(false)).toBe(false);
  expect(isUndefined(null)).toBe(false);
  expect(isUndefined({})).toBe(false);
  expect(isUndefined([])).toBe(false);
});
