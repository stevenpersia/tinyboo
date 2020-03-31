import { isIP } from '../src/index';

test('all', () => {
  expect(isIP('127.0.0.0')).toBe(true);
  expect(isIP('0.0.0.0')).toBe(true);
  expect(isIP('192.168.0.1')).toBe(true);
  expect(isIP('255.255.255.255')).toBe(true);

  expect(isIP('')).toBe(false);
  expect(isIP('IP')).toBe(false);
  expect(isIP('192')).toBe(false);
  expect(isIP('192.')).toBe(false);
  expect(isIP('192.168')).toBe(false);
  expect(isIP('192.168.')).toBe(false);
  expect(isIP('192.168.0')).toBe(false);
  expect(isIP('192.168.0.')).toBe(false);
  expect(isIP('192.168.0.1.')).toBe(false);
  expect(isIP('192.168.0.1.2')).toBe(false);
  expect(isIP('256.255.255.255')).toBe(false);
  expect(isIP('255.256.255.255')).toBe(false);
  expect(isIP('255.255.256.255')).toBe(false);
  expect(isIP('255.255.255.256')).toBe(false);
  expect(isIP('256.256.255.255')).toBe(false);
  expect(isIP('256.256.256.255')).toBe(false);
  expect(isIP('256.256.256.256')).toBe(false);
  expect(isIP('192.168.0.1:3000')).toBe(false);
  expect(isIP('127.000.000.000')).toBe(false);
  expect(isIP('.168.0.1')).toBe(false);
  expect(isIP(19216801)).toBe(false);
  expect(isIP(192.16801)).toBe(false);
  expect(isIP(['127.0.0.0'])).toBe(false);

  // Generic
  expect(isIP()).toBe(false);
  expect(isIP(true)).toBe(false);
  expect(isIP(false)).toBe(false);
  expect(isIP(null)).toBe(false);
  expect(isIP(undefined)).toBe(false);
  expect(isIP({})).toBe(false);
  expect(isIP([])).toBe(false);
});
