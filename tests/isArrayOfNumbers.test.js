import { isArrayOfNumbers } from '../src/index';

test('all', () => {
  expect(isArrayOfNumbers([1])).toBe(true);
  expect(isArrayOfNumbers([1, 2, 3])).toBe(true);

  expect(isArrayOfNumbers([1, 'foo', true])).toBe(false);
  expect(isArrayOfNumbers([1, {}])).toBe(false);
  expect(isArrayOfNumbers([1, undefined])).toBe(false);
  expect(isArrayOfNumbers([1, null])).toBe(false);
  expect(isArrayOfNumbers([undefined])).toBe(false);
  expect(isArrayOfNumbers([null])).toBe(false);
  expect(isArrayOfNumbers([{}])).toBe(false);
  expect(isArrayOfNumbers([[]])).toBe(false);
  expect(isArrayOfNumbers([[], []])).toBe(false);
  expect(isArrayOfNumbers([{}, {}])).toBe(false);
  expect(isArrayOfNumbers(['foo', 1])).toBe(false);
  expect(isArrayOfNumbers('foo')).toBe(false);
  expect(isArrayOfNumbers(1)).toBe(false);

  // Generic
  expect(isArrayOfNumbers()).toBe(false);
  expect(isArrayOfNumbers(true)).toBe(false);
  expect(isArrayOfNumbers(false)).toBe(false);
  expect(isArrayOfNumbers(null)).toBe(false);
  expect(isArrayOfNumbers(undefined)).toBe(false);
  expect(isArrayOfNumbers({})).toBe(false);
  expect(isArrayOfNumbers([])).toBe(false);
});
