import { isArray } from '../src/index';

test('all', () => {
  expect(isArray([])).toBe(true);
  expect(isArray(['foo'])).toBe(true);
  expect(isArray(['foo', 'bar'])).toBe(true);

  expect(isArray('')).toBe(false);
  expect(isArray('foo')).toBe(false);
  expect(isArray(1)).toBe(false);
  expect(isArray({ key: 'foo' })).toBe(false);

  // Generic
  expect(isArray()).toBe(false);
  expect(isArray(true)).toBe(false);
  expect(isArray(false)).toBe(false);
  expect(isArray(null)).toBe(false);
  expect(isArray(undefined)).toBe(false);
  expect(isArray({})).toBe(false);
});
