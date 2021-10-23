---
title: Array.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Polyfill
browser-compat: javascript.builtins.Array.fill
---
{{JSRef}}

The **`fill()`** method changes all elements in an array to a static value, from a start index (default `0`) to an end index (default `array.length`).
It returns the modified array.

{{EmbedInteractiveExample("pages/js/array-fill.html")}}

## Syntax

```js
fill(value)
fill(value, start)
fill(value, start, end)
```

### Parameters

- `value`
  - : Value to fill the array with. (Note all elements in the array will be this exact value.)
- `start` {{optional_inline}}
  - : Start index (inclusive), default `0`.
- `end` {{optional_inline}}
  - : End index (exclusive), default `arr.length`.

### Return value

The modified array, filled with `value`.

## Description

- If `start` is negative, it is treated as `array.length + start`.
- If `end` is negative, it is treated as `array.length + end`.
- `fill` is intentionally generic: it does not require that its `this` value be an `Array` object.
- `fill` is a mutator method: it will change the array itself and return it, not a copy of it.
- If the first parameter is an object, each slot in the array will reference that object.

> **Note:** Using `Array.prototype.fill()` on an empty array would not modify it as the array has nothing to be modified.
> To use `Array.prototype.fill()` when declaring an array, make sure to assign slots to the array.
> [See example](#using_fill_to_populate_an_empty_array).


## Polyfill

```js
if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, 'fill', {
    value: function(value) {

      // Steps 1-2.
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      var O = Object(this);

      // Steps 3-5.
      var len = O.length >>> 0;

      // Steps 6-7.
      var start = arguments[1];
      var relativeStart = start >> 0;

      // Step 8.
      var k = relativeStart < 0 ?
        Math.max(len + relativeStart, 0) :
        Math.min(relativeStart, len);

      // Steps 9-10.
      var end = arguments[2];
      var relativeEnd = end === undefined ?
        len : end >> 0;

      // Step 11.
      var finalValue = relativeEnd < 0 ?
        Math.max(len + relativeEnd, 0) :
        Math.min(relativeEnd, len);

      // Step 12.
      while (k < finalValue) {
        O[k] = value;
        k++;
      }

      // Step 13.
      return O;
    }
  });
}
```

If you need to support truly obsolete JavaScript engines that don't support {{jsxref("Object.defineProperty")}}, it's best not to polyfill `Array.prototype` methods at all, as you can't make them non-enumerable.

## Examples

### Using fill

```js
[1, 2, 3].fill(4)                // [4, 4, 4]
[1, 2, 3].fill(4, 1)             // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2)          // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1)          // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3)          // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2)        // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN)      // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5)          // [1, 2, 3]
Array(3).fill(4)                 // [4, 4, 4]
[].fill.call({ length: 3 }, 4)   // {0: 4, 1: 4, 2: 4, length: 3}

// A single object, referenced by each slot of the array:
let arr = Array(3).fill({}) // [{}, {}, {}]
arr[0].hi = "hi"            // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

### Using fill() to create a matrix of all 1

This example shows how to create a matrix of all 1, like the `ones()` function of Octave or MATLAB.

```js
const arr = new Array(3);
for (let i=0; i<arr.length; i++) {
  arr[i] = new Array(4).fill(1); // Creating an array of size 4 and filled of 1
}
arr[0][0] = 10;
console.log(arr[0][0]); // 10
console.log(arr[1][0]); // 1
console.log(arr[2][0]); // 1
```

### Using fill() to populate an empty array

This example shows how to populate an array, setting all elements to a specific value.
The `end` parameter does not have to be specified.

```js
let tempGirls = Array(5).fill("girl",0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `Array.prototype.fill` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.fill()")}}
