import { isArrayOfDates } from '../src/index';

test('all', () => {
  expect(isArrayOfDates([new Date()])).toBe(true);
  expect(isArrayOfDates([new Date(), new Date()])).toBe(true);

  expect(isArrayOfDates([new Date(), 'foo', 1])).toBe(false);
  expect(isArrayOfDates([new Date(), {}])).toBe(false);
  expect(isArrayOfDates([new Date(), undefined])).toBe(false);
  expect(isArrayOfDates([new Date(), null])).toBe(false);
  expect(isArrayOfDates([undefined])).toBe(false);
  expect(isArrayOfDates([null])).toBe(false);
  expect(isArrayOfDates([{}])).toBe(false);
  expect(isArrayOfDates([[]])).toBe(false);
  expect(isArrayOfDates([[], []])).toBe(false);
  expect(isArrayOfDates([{}, {}])).toBe(false);
  expect(isArrayOfDates(['foo', new Date()])).toBe(false);
  expect(isArrayOfDates('foo')).toBe(false);
  expect(isArrayOfDates(1)).toBe(false);

  // Generic
  expect(isArrayOfDates()).toBe(false);
  expect(isArrayOfDates(true)).toBe(false);
  expect(isArrayOfDates(false)).toBe(false);
  expect(isArrayOfDates(null)).toBe(false);
  expect(isArrayOfDates(undefined)).toBe(false);
  expect(isArrayOfDates({})).toBe(false);
  expect(isArrayOfDates([])).toBe(false);
});
