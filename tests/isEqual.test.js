import { isEqual } from '../src/index';

test('all', () => {
  expect(isEqual('foo   ', 'foo   ')).toBe(true);
  expect(isEqual('bar', 'bar')).toBe(true);
  expect(isEqual(true, true)).toBe(true);
  expect(isEqual(false, false)).toBe(true);
  expect(isEqual(1, 1)).toBe(true);
  expect(isEqual([], [])).toBe(true);
  expect(isEqual(null, null)).toBe(true);
  expect(isEqual([1, 'foo', true], [1, 'foo', true])).toBe(true);

  expect(isEqual(undefined, undefined)).toBe(false);
  expect(isEqual([1, 'foo', true], [1, true, 'foo'])).toBe(false);
  expect(isEqual(true, 'true')).toBe(false);
  expect(isEqual(1, '1')).toBe(false);

  // Generic
  expect(isEqual()).toBe(false);
  expect(isEqual(true)).toBe(false);
  expect(isEqual(false)).toBe(false);
  expect(isEqual(null)).toBe(false);
  expect(isEqual(undefined)).toBe(false);
  expect(isEqual({})).toBe(false);
  expect(isEqual([])).toBe(false);
});
