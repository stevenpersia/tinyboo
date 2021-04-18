import { isJSON } from '../src/index';

test('all', () => {
  expect(isJSON('{}')).toBe(true);
  expect(isJSON('null')).toBe(true);
  expect(isJSON('{ "foo": "bar" }')).toBe(true);
  expect(isJSON(null)).toBe(true);

  expect(isJSON({})).toBe(false);
  expect(isJSON({ foo: 'bar' })).toBe(false);
  expect(isJSON('')).toBe(false);

  // Generic
  expect(isJSON()).toBe(false);
  expect(isJSON(true)).toBe(false);
  expect(isJSON(false)).toBe(false);
  expect(isJSON(undefined)).toBe(false);
  expect(isJSON([])).toBe(false);
});
