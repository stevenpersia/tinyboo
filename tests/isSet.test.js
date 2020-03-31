import { isSet } from '../src/index';

test('all', () => {
  expect(isSet(new Set())).toBe(true);

  expect(isSet('foo')).toBe(false);
  expect(isSet('')).toBe(false);
  expect(isSet(1)).toBe(false);

  // Generic
  expect(isSet()).toBe(false);
  expect(isSet(true)).toBe(false);
  expect(isSet(false)).toBe(false);
  expect(isSet(null)).toBe(false);
  expect(isSet(undefined)).toBe(false);
  expect(isSet({})).toBe(false);
  expect(isSet([])).toBe(false);
});
