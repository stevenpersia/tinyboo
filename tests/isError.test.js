import { isError } from '../src/index';

test('all', () => {
  expect(isError(new TypeError(''))).toBe(true);

  expect(isError('foo')).toBe(false);
  expect(isError(1)).toBe(false);

  // Generic
  expect(isError()).toBe(false);
  expect(isError(true)).toBe(false);
  expect(isError(false)).toBe(false);
  expect(isError(null)).toBe(false);
  expect(isError(undefined)).toBe(false);
  expect(isError({})).toBe(false);
  expect(isError([])).toBe(false);
});
