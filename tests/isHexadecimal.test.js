import { isHexadecimal } from '../src/index';

test('all', () => {
  expect(isHexadecimal('F4F4F4')).toBe(true);

  expect(isHexadecimal('')).toBe(false);
  expect(isHexadecimal('F')).toBe(false);
  expect(isHexadecimal('F4')).toBe(false);
  expect(isHexadecimal('F4F4')).toBe(false);
  expect(isHexadecimal('F4F4F')).toBe(false);
  expect(isHexadecimal('F4F4F4F')).toBe(false);
  expect(isHexadecimal(['F4F4F4'])).toBe(false);
  expect(isHexadecimal(1)).toBe(false);

  // Generic
  expect(isHexadecimal()).toBe(false);
  expect(isHexadecimal(true)).toBe(false);
  expect(isHexadecimal(false)).toBe(false);
  expect(isHexadecimal(null)).toBe(false);
  expect(isHexadecimal(undefined)).toBe(false);
  expect(isHexadecimal({})).toBe(false);
  expect(isHexadecimal([])).toBe(false);
});
