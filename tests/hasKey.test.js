import { hasKey } from '../src/index';

test('all', () => {
  expect(hasKey({ foo: 'bar' }, 'foo')).toBe(true);

  expect(hasKey('foo', 'foo')).toBe(false);
  expect(hasKey({ foo: 'bar' }, '')).toBe(false);
  expect(hasKey({}, null)).toBe(false);

  // Generic
  expect(hasKey()).toBe(false);
  expect(hasKey({ foo: 'bar' }, true)).toBe(false);
  expect(hasKey({ foo: 'bar' }, false)).toBe(false);
  expect(hasKey({ foo: 'bar' }, null)).toBe(false);
  expect(hasKey({ foo: 'bar' }, undefined)).toBe(false);
  expect(hasKey({ foo: 'bar' }, [])).toBe(false);
});
