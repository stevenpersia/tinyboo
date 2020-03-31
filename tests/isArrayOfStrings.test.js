import { isArrayOfStrings } from '../src/index';

test('all', () => {
  expect(isArrayOfStrings(['foo'])).toBe(true);
  expect(isArrayOfStrings(['foo', 'bar'])).toBe(true);

  expect(isArrayOfStrings([true, 'foo', 1])).toBe(false);
  expect(isArrayOfStrings(['foo', {}])).toBe(false);
  expect(isArrayOfStrings(['foo', undefined])).toBe(false);
  expect(isArrayOfStrings(['foo', null])).toBe(false);
  expect(isArrayOfStrings([undefined])).toBe(false);
  expect(isArrayOfStrings([null])).toBe(false);
  expect(isArrayOfStrings([{}])).toBe(false);
  expect(isArrayOfStrings([[]])).toBe(false);
  expect(isArrayOfStrings([[], []])).toBe(false);
  expect(isArrayOfStrings([{}, {}])).toBe(false);
  expect(isArrayOfStrings(['foo', false])).toBe(false);
  expect(isArrayOfStrings('foo')).toBe(false);
  expect(isArrayOfStrings(1)).toBe(false);

  // Generic
  expect(isArrayOfStrings()).toBe(false);
  expect(isArrayOfStrings(true)).toBe(false);
  expect(isArrayOfStrings(false)).toBe(false);
  expect(isArrayOfStrings(null)).toBe(false);
  expect(isArrayOfStrings(undefined)).toBe(false);
  expect(isArrayOfStrings({})).toBe(false);
  expect(isArrayOfStrings([])).toBe(false);
});
