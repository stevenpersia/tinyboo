import { isEmptyObject } from '../src/index';

test('all', () => {
  expect(isEmptyObject({})).toBe(true);

  expect(isEmptyObject({ foo: 'bar' })).toBe(false);
  expect(isEmptyObject({ foo: null })).toBe(false);
  expect(isEmptyObject({ foo: { bar: null } })).toBe(false);

  // Generic
  expect(isEmptyObject()).toBe(false);
  expect(isEmptyObject(true)).toBe(false);
  expect(isEmptyObject(false)).toBe(false);
  expect(isEmptyObject(null)).toBe(false);
  expect(isEmptyObject(undefined)).toBe(false);
  expect(isEmptyObject(1)).toBe(false);
  expect(isEmptyObject('foo')).toBe(false);
  expect(isEmptyObject([])).toBe(false);
});
