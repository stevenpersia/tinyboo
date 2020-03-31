import { isBlob } from '../src/index';

test('all', () => {
  expect(isBlob(new Blob())).toBe(true);

  expect(isBlob('foo')).toBe(false);
  expect(isBlob(1)).toBe(false);

  // Generic
  expect(isBlob()).toBe(false);
  expect(isBlob(true)).toBe(false);
  expect(isBlob(false)).toBe(false);
  expect(isBlob(null)).toBe(false);
  expect(isBlob(undefined)).toBe(false);
  expect(isBlob({})).toBe(false);
  expect(isBlob([])).toBe(false);
});
