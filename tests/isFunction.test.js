import { isFunction } from '../src/index';

test('all', () => {
  expect(isFunction(() => {})).toBe(true);

  expect(isFunction(1)).toBe(false);
  expect(isFunction('foo')).toBe(false);

  // Generic
  expect(isFunction()).toBe(false);
  expect(isFunction(true)).toBe(false);
  expect(isFunction(false)).toBe(false);
  expect(isFunction(null)).toBe(false);
  expect(isFunction(undefined)).toBe(false);
  expect(isFunction({})).toBe(false);
  expect(isFunction([])).toBe(false);
});
