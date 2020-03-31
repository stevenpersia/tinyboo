import { isMap } from '../src/index';

test('all', () => {
  expect(isMap(new Map())).toBe(true);

  expect(isMap('foo')).toBe(false);
  expect(isMap(1)).toBe(false);

  // Generic
  expect(isMap()).toBe(false);
  expect(isMap(true)).toBe(false);
  expect(isMap(false)).toBe(false);
  expect(isMap(null)).toBe(false);
  expect(isMap(undefined)).toBe(false);
  expect(isMap({})).toBe(false);
  expect(isMap([])).toBe(false);
});
