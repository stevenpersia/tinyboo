import { isArrayOfBooleans } from '../src/index';

test('all', () => {
  expect(isArrayOfBooleans([true])).toBe(true);
  expect(isArrayOfBooleans([false])).toBe(true);
  expect(isArrayOfBooleans([true, false])).toBe(true);

  expect(isArrayOfBooleans([true, 'foo', 1])).toBe(false);
  expect(isArrayOfBooleans([true, {}])).toBe(false);
  expect(isArrayOfBooleans([true, undefined])).toBe(false);
  expect(isArrayOfBooleans([true, null])).toBe(false);
  expect(isArrayOfBooleans([undefined])).toBe(false);
  expect(isArrayOfBooleans([null])).toBe(false);
  expect(isArrayOfBooleans([{}])).toBe(false);
  expect(isArrayOfBooleans([[]])).toBe(false);
  expect(isArrayOfBooleans([[], []])).toBe(false);
  expect(isArrayOfBooleans([{}, {}])).toBe(false);
  expect(isArrayOfBooleans(['foo', false])).toBe(false);
  expect(isArrayOfBooleans('foo')).toBe(false);
  expect(isArrayOfBooleans(1)).toBe(false);

  // Generic
  expect(isArrayOfBooleans()).toBe(false);
  expect(isArrayOfBooleans(true)).toBe(false);
  expect(isArrayOfBooleans(false)).toBe(false);
  expect(isArrayOfBooleans(null)).toBe(false);
  expect(isArrayOfBooleans(undefined)).toBe(false);
  expect(isArrayOfBooleans({})).toBe(false);
  expect(isArrayOfBooleans([])).toBe(false);
});
