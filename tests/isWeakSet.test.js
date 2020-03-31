import { isWeakSet } from '../src/index';

test('all', () => {
  expect(isWeakSet(new WeakSet())).toBe(true);

  expect(isWeakSet('')).toBe(false);
  expect(isWeakSet('foo')).toBe(false);
  expect(isWeakSet(1)).toBe(false);
  expect(isWeakSet(['foo'])).toBe(false);
  expect(isWeakSet({ key: 'foo' })).toBe(false);

  // Generic
  expect(isWeakSet()).toBe(false);
  expect(isWeakSet(true)).toBe(false);
  expect(isWeakSet(false)).toBe(false);
  expect(isWeakSet(null)).toBe(false);
  expect(isWeakSet(undefined)).toBe(false);
  expect(isWeakSet({})).toBe(false);
  expect(isWeakSet([])).toBe(false);
});
