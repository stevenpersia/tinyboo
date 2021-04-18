import { hasValue } from '../src/index';

test('all', () => {
  expect(hasValue({ foo: 'bar' }, 'bar')).toBe(true);

  expect(hasValue('foo', 'foo')).toBe(false);
  expect(hasValue({ foo: 'bar' }, '')).toBe(false);
  expect(hasValue({}, null)).toBe(false);

  // Generic
  expect(hasValue()).toBe(false);
  expect(hasValue({ foo: 'bar' }, true)).toBe(false);
  expect(hasValue({ foo: 'bar' }, false)).toBe(false);
  expect(hasValue({ foo: 'bar' }, null)).toBe(false);
  expect(hasValue({ foo: 'bar' }, undefined)).toBe(false);
  expect(hasValue({ foo: 'bar' }, [])).toBe(false);
});
