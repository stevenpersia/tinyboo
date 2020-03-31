import { isFile } from '../src/index';

test('all', () => {
  expect(isFile(new File([''], ''))).toBe(true);

  expect(isFile('foo')).toBe(false);
  expect(isFile(1)).toBe(false);

  // Generic
  expect(isFile()).toBe(false);
  expect(isFile(true)).toBe(false);
  expect(isFile(false)).toBe(false);
  expect(isFile(null)).toBe(false);
  expect(isFile(undefined)).toBe(false);
  expect(isFile({})).toBe(false);
  expect(isFile([])).toBe(false);
});
