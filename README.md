<h1 align="center"><img src="https://raw.githubusercontent.com/stevenpersia/tinyboo/master/logo.png" alt="tinyboo" /></h1>

## Overview

Utilities library for type checking and **other useful things**. Already more than **35 functions**. Each function returns **false** or **true**, that's it. Perfect for front and back ends. 👻

- **0 dependencies** 🌱
- **Super lightweight (~45 kB)** ⚡
- **Easy to use** 🤘
- **Tested** 🛠
- **TypeScript supported** 🌞

**Roadmap** : `isUrl`, `isAbsoluteUrl`, `isRelativeUrl`, `isGif`, `isJpg`, `isPng`, `isPdf`, `isSvg`, `isWebp`, `isHtml`, `isZip`, `isRar`, `isEmptyObject`, `isMatch`, `isJson`, `hasKey`, `hasValue`, ...

## Installation

Install package :

```sh
yarn add tinyboo
# or
npm install tinyboo
```

Import what you need :

```js
import { isEmptyArray, isIP, isGreaterThan } from 'tinyboo';
```

And have fun !

## Usage

### Type checkers

```js
isArray([]); // → true
isBlob(new Blob()); // → true
isBoolean(false); // → true
isDate(new Date()); // → true
isError(new Error()); // → true
isFile(new File()); // → true
isFunction(() => {}); // → true
isMap(new Map()); // → true
isNull(null); // → true
isNumber(1); // → true
isObject({}); // → true
isRegExp(/^foo(bar)?$/); // → true
isSet(new Set()); // → true
isString('foo'); // → true
isSymbol(Symbol()); // → true
isUndefined(undefined); // → true
isWeakMap(new WeakMap()); // → true
isWeakSet(new WeakSet()); // → true
isPrimitive('foo'); // → true
```

### Arrays

```js
isArrayOfBooleans([true, false]); // → true
isArrayOfDates([new Date(), new Date()]); // → true
isArrayOfNumbers([1, 2, 3]); // → true
isArrayOfObjects([{}, {}]); // → true
isArrayOfPrimitives(['foo', 1]); // → true
isArrayOfStrings(['bar', '1']); // → true
```

### Numbers

```js
isFiniteNumber(2); // → true
isGreaterThan(700, 500); // → true
isInteger(21); // → true
isLessThan(300, 500); // → true
```

### Others

```js
isEmptyArray([]); // → true
isEmptyString(' '); // → true
isEqual('foo', 'foo'); // → true
isHexadecimal('F1F1F1'); // → true
isIP('210.23.51.230'); // → true
```

## More examples

### `isEqual` - works with array, boolean, null, number and string

```js
// Array
isEqual([1, 'foo', 'bar'], [1, 'foo', 'bar']); // → true
isEqual([1, 'foo', 'bar'], ['foo', 1, 'bar']); // → false

// Boolean
isEqual(false, false); // → true
isEqual(true, false); // → false

// Null
isEqual(null, null); // → true
isEqual(null, 'foo'); // → false

// Number
isEqual(1, 1); // → true
isEqual(1, '1'); // → false

// String
isEqual('foo', 'foo'); // → true
isEqual('foo', 'bar'); // → false
```

### `isIP` - only works with string

```js
isIP('127.0.0.0'); // → true
isIP('0.0.0.0'); // → true
isIP('255.255.255.255'); // → true

isIP('192.168'); // → false
isIP(19216801); // → false
isIP('127.000.000.000'); // → false
```

## Star, Fork, Clone & Contribute

Feel free to contribute on this repository. If my work helps you, please give me back with a star. This means a lot to me and keeps me going!
