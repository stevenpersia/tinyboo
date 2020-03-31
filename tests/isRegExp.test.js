import { isRegExp } from '../src/index';

test('all', () => {
  expect(isRegExp(/^foo(bar)?$/)).toBe(true);

  expect(isRegExp([/^foo(bar)?$/])).toBe(false);
  expect(isRegExp('(/^foo(bar)?$/')).toBe(false);
  expect(isRegExp('')).toBe(false);
  expect(isRegExp(1)).toBe(false);

  // Generic
  expect(isRegExp()).toBe(false);
  expect(isRegExp(true)).toBe(false);
  expect(isRegExp(false)).toBe(false);
  expect(isRegExp(null)).toBe(false);
  expect(isRegExp(undefined)).toBe(false);
  expect(isRegExp({})).toBe(false);
  expect(isRegExp([])).toBe(false);
});
