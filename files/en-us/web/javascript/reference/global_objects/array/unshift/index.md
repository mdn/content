---
title: Array.prototype.unshift()
slug: Web/JavaScript/Reference/Global_Objects/Array/unshift
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.unshift
---
{{JSRef}}

The **`unshift()`** method adds one or more elements to the
beginning of an array and returns the new length of the array.

{{EmbedInteractiveExample("pages/js/array-unshift.html")}}

## Syntax

```js
unshift(element0)
unshift(element0, element1)
unshift(element0, element1, /* … ,*/ elementN)
```

### Parameters

- `elementN`
  - : The elements to add to the front of the `arr`.

### Return value

The new {{jsxref("Array.length", "length")}} property of the object upon which the
method was called.

## Description

The `unshift()` method inserts the given values to the beginning of an
array-like object.

{{jsxref("Array.prototype.push()")}} has similar behavior to `unshift()`, but applied to the end of an array.

`Array.prototype.unshift()` is intentionally generic. This method can be
{{jsxref("Function.call", "called", "", 1)}} or {{jsxref("Function.apply", "applied",
  "", 1)}} to objects resembling arrays. Objects which do not contain a
`length` property—reflecting the last in a series of consecutive, zero-based
numerical properties—may not behave in any meaningful manner.

Please note that, if multiple elements are passed as parameters, they're inserted in
chunk at the beginning of the object, in the exact same order they were passed as
parameters. Hence, calling `unshift()` with `n`
arguments **once**, or calling it `n` times with
**1** argument (with a loop, for example), don't yield the same results.

See example:

```js
let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6]; // resetting the array

arr.unshift(1);
arr.unshift(2);
arr.unshift(3);

console.log(arr);
// [3, 2, 1, 4, 5, 6]
```

## Examples

### Using unshift()

```js
const arr = [1, 2];

arr.unshift(0);               // result of the call is 3, which is the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1);          // the new array length is 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-4, -3]);        // the new array length is 6
// arr is [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5]);  // the new array length is 8
// arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.unshift` in `core-js` with fixes of this method](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.concat()")}}
