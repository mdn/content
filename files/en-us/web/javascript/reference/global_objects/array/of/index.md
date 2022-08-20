---
title: Array.of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - Polyfill
browser-compat: javascript.builtins.Array.of
---
{{JSRef}}

The **`Array.of()`** method creates a new `Array`
instance from a variable number of arguments, regardless of number or type of the
arguments.

The difference between **`Array.of()`** and the
**`Array`** constructor is in the handling of integer arguments:
**`Array.of(7)`** creates an array with a single element,
`7`, whereas **`Array(7)`** creates an empty array
with a `length` property of `7`. (That implies an array of `7` empty slots, not slots with actual {{jsxref("undefined")}} values.)

```js
Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3);    // [1, 2, 3]
```

## Syntax

```js
Array.of(element0)
Array.of(element0, element1)
Array.of(element0, element1, /* … ,*/ elementN)
```

### Parameters

- `elementN`
  - : Elements used to create the array.

### Return value

A new {{jsxref("Array")}} instance.

## Examples

### Using Array.of

```js
Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.of` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [A polyfill](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
- {{jsxref("Array")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of()")}}
- [`Array.of()` & `Array.from()` proposal](https://gist.github.com/rwaldron/1074126)
- [`Array.of()` polyfill](https://gist.github.com/rwaldron/3186576)
