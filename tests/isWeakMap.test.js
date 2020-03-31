import { isWeakMap } from '../src/index';

test('all', () => {
  expect(isWeakMap(new WeakMap())).toBe(true);

  expect(isWeakMap('')).toBe(false);
  expect(isWeakMap('foo')).toBe(false);
  expect(isWeakMap(1)).toBe(false);
  expect(isWeakMap(['foo'])).toBe(false);
  expect(isWeakMap({ key: 'foo' })).toBe(false);

  // Generic
  expect(isWeakMap()).toBe(false);
  expect(isWeakMap(true)).toBe(false);
  expect(isWeakMap(false)).toBe(false);
  expect(isWeakMap(null)).toBe(false);
  expect(isWeakMap(undefined)).toBe(false);
  expect(isWeakMap({})).toBe(false);
  expect(isWeakMap([])).toBe(false);
});
