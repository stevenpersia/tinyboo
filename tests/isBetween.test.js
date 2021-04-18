import { isBetween } from '../src/index';

test('all', () => {
  expect(isBetween(2, 1, 3)).toBe(true);
  expect(isBetween(1, 1, 3)).toBe(true);
  expect(isBetween(3, 1, 3)).toBe(true);

  expect(isBetween(1, 2, 3)).toBe(false);
  expect(isBetween(3, 1, 2)).toBe(false);
  expect(isBetween('2', 1, 3)).toBe(false);
  expect(isBetween(2, '1', 3)).toBe(false);
  expect(isBetween(2, 1, '3')).toBe(false);
  expect(isBetween('2', '1', '3')).toBe(false);
  expect(isBetween(['2'], ['1'], ['3'])).toBe(false);
  expect(isBetween(21)).toBe(false);
  expect(isBetween(undefined, 1, 3)).toBe(false);
  expect(isBetween(2, undefined, 3)).toBe(false);
  expect(isBetween(2, 1, undefined)).toBe(false);
  expect(isBetween(null, 1, 3)).toBe(false);
  expect(isBetween(2, null, 3)).toBe(false);
  expect(isBetween(2, 1, null)).toBe(false);
  expect(isBetween(undefined, undefined, undefined)).toBe(false);
  expect(isBetween(null, null, null)).toBe(false);

  // Generic
  expect(isBetween()).toBe(false);
  expect(isBetween(true)).toBe(false);
  expect(isBetween(false)).toBe(false);
  expect(isBetween(null)).toBe(false);
  expect(isBetween(undefined)).toBe(false);
  expect(isBetween({})).toBe(false);
  expect(isBetween([])).toBe(false);
});
