import { isArrayOfPrimitives } from '../src/index';

test('all', () => {
  expect(isArrayOfPrimitives([true, 'foo', 1, null, undefined])).toBe(true);
  expect(isArrayOfPrimitives([Symbol(''), false, 1, 2, 3])).toBe(true);
  expect(isArrayOfPrimitives([null, undefined])).toBe(true);

  expect(isArrayOfPrimitives([true, 'foo', 1, {}])).toBe(false);
  expect(isArrayOfPrimitives([true, {}])).toBe(false);
  expect(isArrayOfPrimitives([undefined, []])).toBe(false);
  expect(isArrayOfPrimitives([null, []])).toBe(false);
  expect(isArrayOfPrimitives([{}])).toBe(false);
  expect(isArrayOfPrimitives([[]])).toBe(false);
  expect(isArrayOfPrimitives([[], []])).toBe(false);
  expect(isArrayOfPrimitives([{}, {}])).toBe(false);
  expect(isArrayOfPrimitives('foo')).toBe(false);
  expect(isArrayOfPrimitives(1)).toBe(false);

  // Generic
  expect(isArrayOfPrimitives()).toBe(false);
  expect(isArrayOfPrimitives(true)).toBe(false);
  expect(isArrayOfPrimitives(false)).toBe(false);
  expect(isArrayOfPrimitives(null)).toBe(false);
  expect(isArrayOfPrimitives(undefined)).toBe(false);
  expect(isArrayOfPrimitives({})).toBe(false);
  expect(isArrayOfPrimitives([])).toBe(false);
});
