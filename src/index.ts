/**
 * Returns the object type of the given value.
 *
 * @param value
 * @returns string
 */
const getType = (value: any): string => {
  return Object.prototype.toString.call(value).slice(8, -1);
};

/**
 * Returns true if `value` is an array.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isArray = (value: any): value is any[] => {
  return getType(value) === 'Array';
};

/**
 * Returns true if `value` is a Blob.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isBlob = (value: any) => {
  return getType(value) === 'Blob';
};

/**
 * Returns true if `value` is a boolean.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isBoolean = (value: any): value is boolean => {
  return getType(value) === 'Boolean';
};

/**
 * Returns true if `value` is a Date.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isDate = (value: any): value is Date => {
  return getType(value) === 'Date';
};

/**
 * Returns true if `value` is a Error.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isError = (value: any): value is Error => {
  return getType(value) === 'Error';
};

/**
 * Returns true if `value` is a File.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isFile = (value: any) => {
  return getType(value) === 'File';
};

/**
 * Returns true if `value` is a Function.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isFunction = (value: any): value is Function => {
  return getType(value) === 'Function';
};

/**
 * Returns true if `value` is a Map.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isMap = (value: any) => {
  return getType(value) === 'Map';
};

/**
 * Returns true if `value` is null.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isNull = (value: any): value is null => {
  return getType(value) === 'Null';
};

/**
 * Returns true if `value` is a number.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isNumber = (value: any): value is number => {
  return getType(value) === 'Number';
};

/**
 * Returns true if `value` is an object.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isObject = (value: any): value is { [key: string]: any } => {
  return getType(value) === 'Object';
};

/**
 * Returns true if `value` is a RegExp.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isRegExp = (value: any): value is RegExp => {
  return getType(value) === 'RegExp';
};

/**
 * Returns true if `value` is a Set.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isSet = (value: any) => {
  return getType(value) === 'Set';
};

/**
 * Returns true if `value` is a string.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isString = (value: any): value is string => {
  return getType(value) === 'String';
};

/**
 * Returns true if `value` is a symbol.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isSymbol = (value: any): value is symbol => {
  return getType(value) === 'Symbol';
};

/**
 * Returns true if `value` is undefined.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isUndefined = (value: any): value is undefined => {
  return getType(value) === 'Undefined';
};

/**
 * Returns true if `value` is a WeakMap.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isWeakMap = (value: any) => {
  return getType(value) === 'WeakMap';
};

/**
 * Returns true if `value` is a WeakSet.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isWeakSet = (value: any) => {
  return getType(value) === 'WeakSet';
};

/**
 * Returns true if `value` is a primitive.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isPrimitive = (
  value: any,
): value is boolean | null | undefined | number | string | symbol => {
  return (
    isBoolean(value) ||
    isNull(value) ||
    isUndefined(value) ||
    isNumber(value) ||
    isString(value) ||
    isSymbol(value)
  );
};

/**
 * Returns true if `value` is an array of booleans.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isArrayOfBooleans = (value: any): value is boolean[] => {
  if (!isArray(value) || !value.length) return false;
  return value.every((i) => isBoolean(i));
};

/**
 * Returns true if `value` is an array of dates.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isArrayOfDates = (value: any): value is Date[] => {
  if (!isArray(value) || !value.length) return false;
  return value.every((i) => isDate(i));
};

/**
 * Returns true if `value` is an array of numbers.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isArrayOfNumbers = (value: any): value is number[] => {
  if (!isArray(value) || !value.length) return false;
  return value.every((i) => isNumber(i));
};

/**
 * Returns true if `value` is an array of objects.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isArrayOfObjects = (value: any): value is any[] => {
  if (!isArray(value) || !value.length) return false;
  return value.every((i) => isObject(i));
};

/**
 * Returns true if `value` is an array of primitives.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isArrayOfPrimitives = (value: any): value is any[] => {
  if (!isArray(value) || !value.length) return false;
  return value.every((i) => isPrimitive(i));
};

/**
 * Returns true if `value` is an array of strings.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isArrayOfStrings = (value: any): value is string[] => {
  if (!isArray(value) || !value.length) return false;
  return value.every((i) => isString(i));
};

/**
 * Returns true if `value` is an empty array.
 *
 * @param value any[]
 * @returns `true` || `false`
 */
export const isEmptyArray = (value: any[]) => {
  return isArray(value) && !value.length;
};

/**
 * Returns true if `value` is an empty string.
 *
 * @param value string
 * @returns `true` || `false`
 */
export const isEmptyString = (value: string) => {
  if (!isString(value)) return false;
  if (/^\s*$/.test(value)) return true;
  if (value.length > 0) return false;
  return false;
};

/**
 * Returns true if `value` and `value2` are equals.
 *
 * @param value array, boolean, null, number or string
 * @param value2 array, boolean, null, number or string
 * @returns `true` || `false`
 */
export const isEqual = (
  value: any[] | boolean | null | undefined | number | string,
  value2: any[] | boolean | null | undefined | number | string,
) => {
  if (isUndefined(value)) return false;

  if (isArray(value) && isArray(value2)) {
    if (value.length !== value2.length) return false;
    if (value.length === value2.length) {
      return value.every((v, i) => v === value2[i]);
    }
  }

  return value === value2;
};

/**
 * Returns true if `value` is a finite number.
 *
 * @param value number
 * @returns `true` || `false`
 */
export const isFiniteNumber = (value: number) => {
  // eslint-disable-next-line no-restricted-globals
  return isNumber(value) && isFinite(value);
};

/**
 * Returns true if `value` is greater than `value2`.
 *
 * @param value number
 * @param value2 number
 * @returns `true` || `false`
 */
export const isGreaterThan = (value: number, value2: number) => {
  if (isNumber(value) && isNumber(value2)) return value > value2;
  return false;
};

/**
 * Returns true if `value` is a hexadecimal.
 *
 * @param value string
 * @returns `true` || `false`
 */
export const isHexadecimal = (value: string) => {
  if (!value) return false;
  if (value.length !== 3 && value.length !== 6) return false;
  const a = parseInt(value, 16);
  return a.toString(16) === value.toLowerCase();
};

/**
 * Returns true if `value` is an integer.
 *
 * @param value number
 * @returns `true` || `false`
 */
export const isInteger = (value: number) => {
  return Number.isInteger(value);
};

/**
 * Returns true if `value` is a valid IP.
 *
 * @param value string
 * @returns `true` || `false`
 */
export const isIP = (value: string) => {
  if (!isString(value)) return false;
  const regex = /^(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
  return regex.test(value);
};

/**
 * Returns true if `value` is less than `value2`.
 *
 * @param value number
 * @param value2 number
 * @returns `true` || `false`
 */
export const isLessThan = (value: number, value2: number) => {
  if (isNumber(value) && isNumber(value2)) return value < value2;
  return false;
};

/**
 * Returns true if `value` is an empty object.
 *
 * @param value any
 * @returns `true` || `false`
 */
export const isEmptyObject = (value: any) => {
  return getType(value) === 'Object' && Object.entries(value).length === 0;
};

/**
 * Returns true if `value` is a valid JSON.
 *
 * @param value string
 * @returns `true` || `false`
 */
export const isJSON = (value: string) => {
  try {
    const json = JSON.parse(value);
    return (json || json === null) && typeof json === 'object';
  } catch (e) {
    return false;
  }
};

/**
 * Returns true if `value2` key is in `value` object.
 *
 * @param value any
 * @param value2 string
 * @returns `true` || `false`
 */
export const hasKey = (value: any, value2: string) => {
  return isObject(value) && value2 in value;
};

/**
 * Returns true if `value2` value is in `value` object.
 *
 * @param value any
 * @param value2 string
 * @returns `true` || `false`
 */
export const hasValue = (value: any, value2: string) => {
  return isObject(value) && Object.keys(value).some((v) => value[v] === value2);
};
