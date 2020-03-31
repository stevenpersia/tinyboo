import { isEmptyArray } from '../src/index';

test('all', () => {
  expect(isEmptyArray([])).toBe(true);

  expect(isEmptyArray([1])).toBe(false);
  expect(isEmptyArray(['foo'])).toBe(false);
  expect(isEmptyArray([undefined])).toBe(false);
  expect(isEmptyArray([null])).toBe(false);
  expect(isEmptyArray([[]])).toBe(false);
  expect(isEmptyArray([{}])).toBe(false);

  // Generic
  expect(isEmptyArray()).toBe(false);
  expect(isEmptyArray(true)).toBe(false);
  expect(isEmptyArray(false)).toBe(false);
  expect(isEmptyArray(null)).toBe(false);
  expect(isEmptyArray(undefined)).toBe(false);
  expect(isEmptyArray({})).toBe(false);
});
