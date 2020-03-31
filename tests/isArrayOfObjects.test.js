import { isArrayOfObjects } from '../src/index';

test('all', () => {
  expect(isArrayOfObjects([{}])).toBe(true);
  expect(isArrayOfObjects([{}, {}])).toBe(true);

  expect(isArrayOfObjects([{}, 'foo', 1])).toBe(false);
  expect(isArrayOfObjects([true, {}])).toBe(false);
  expect(isArrayOfObjects([{}, undefined])).toBe(false);
  expect(isArrayOfObjects([{}, null])).toBe(false);
  expect(isArrayOfObjects([undefined])).toBe(false);
  expect(isArrayOfObjects([null])).toBe(false);
  expect(isArrayOfObjects([[]])).toBe(false);
  expect(isArrayOfObjects([[], []])).toBe(false);
  expect(isArrayOfObjects(['foo', {}])).toBe(false);
  expect(isArrayOfObjects('foo')).toBe(false);
  expect(isArrayOfObjects(1)).toBe(false);

  // Generic
  expect(isArrayOfObjects()).toBe(false);
  expect(isArrayOfObjects(true)).toBe(false);
  expect(isArrayOfObjects(false)).toBe(false);
  expect(isArrayOfObjects(null)).toBe(false);
  expect(isArrayOfObjects(undefined)).toBe(false);
  expect(isArrayOfObjects({})).toBe(false);
  expect(isArrayOfObjects([])).toBe(false);
});
