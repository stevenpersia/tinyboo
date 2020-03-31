import { isNull } from '../src/index';

test('all', () => {
  expect(isNull(null)).toBe(true);

  expect(isNull('null')).toBe(false);
  expect(isNull(1)).toBe(false);

  // Generic
  expect(isNull()).toBe(false);
  expect(isNull(true)).toBe(false);
  expect(isNull(false)).toBe(false);
  expect(isNull(undefined)).toBe(false);
  expect(isNull({})).toBe(false);
  expect(isNull([])).toBe(false);
});
