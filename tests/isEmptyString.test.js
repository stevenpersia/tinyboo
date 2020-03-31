import { isEmptyString } from '../src/index';

test('all', () => {
  expect(isEmptyString('')).toBe(true);
  expect(isEmptyString(' ')).toBe(true);
  expect(isEmptyString('        ')).toBe(true);

  expect(isEmptyString(' foo ')).toBe(false);
  expect(isEmptyString('    bar ')).toBe(false);
  expect(isEmptyString(1)).toBe(false);

  // Generic
  expect(isEmptyString()).toBe(false);
  expect(isEmptyString(true)).toBe(false);
  expect(isEmptyString(false)).toBe(false);
  expect(isEmptyString(null)).toBe(false);
  expect(isEmptyString(undefined)).toBe(false);
  expect(isEmptyString({})).toBe(false);
  expect(isEmptyString([])).toBe(false);
});
