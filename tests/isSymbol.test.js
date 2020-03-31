import { isSymbol } from '../src/index';

test('all', () => {
  expect(isSymbol(Symbol(''))).toBe(true);

  expect(isSymbol('')).toBe(false);
  expect(isSymbol(1)).toBe(false);
  expect(isSymbol(['foo'])).toBe(false);
  expect(isSymbol({ key: 'foo' })).toBe(false);

  // Generic
  expect(isSymbol()).toBe(false);
  expect(isSymbol(true)).toBe(false);
  expect(isSymbol(false)).toBe(false);
  expect(isSymbol(null)).toBe(false);
  expect(isSymbol(undefined)).toBe(false);
  expect(isSymbol({})).toBe(false);
  expect(isSymbol([])).toBe(false);
});
