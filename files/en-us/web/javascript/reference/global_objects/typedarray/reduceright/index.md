---
title: TypedArray.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.TypedArray.reduceRight
---
{{JSRef}}

The **`reduceRight()`** method applies a function against an
accumulator and each value of the typed array (from right-to-left) has to reduce it to a
single value. This method has the same algorithm as
{{jsxref("Array.prototype.reduceRight()")}}. _TypedArray_ is one of the
[typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) here.

## Syntax

```js
// Arrow function
reduceRight((accumulator, currentValue) => { /* ... */ } )
reduceRight((accumulator, currentValue, index) => { /* ... */ } )
reduceRight((accumulator, currentValue, index, array) => { /* ... */ } )
reduceRight((accumulator, currentValue, index, array) => { /* ... */ }, initialValue)

// Callback function
reduceRight(callbackFn)
reduceRight(callbackFn, initialValue)

// Inline callback function
reduceRight(function(accumulator, currentValue) { /* ... */ })
reduceRight(function(accumulator, currentValue, index) { /* ... */ })
reduceRight(function(accumulator, currentValue, index, array){ /* ... */ })
reduceRight(function(accumulator, currentValue, index, array) { /* ... */ }, initialValue)
```

### Parameters

- `callbackFn`

  - : Function to execute on each value in the typed array.

    The function is called with the following arguments:

    - `accumulator`
      - : The value previously returned in the last invocation of the callback, or `initialValue`, if supplied (see below).
    - `currentValue`
      - : The current element being processed in the typed array.
    - `index`
      - : The index of the current element being processed in the typed array.
    - `array`
      - : The typed array `reduceRight()` was called upon.

- `initialValue`
  - : Optional. Object to use as the first argument to the first call of the `callbackFn`.

### Return value

The value that results from the reduction.

## Description

The `reduceRight` method executes the `callbackFn`
function once for each element present in the typed array, excluding holes in the typed
array, receiving four arguments: the initial value (or value from the previous
`callbackFn` call), the value of the current element, the current
index, and the typed array over which iteration is occurring.

The call to the `reduceRight` callback would look something like this:

```js
typedarray.reduceRight((accumulator, currentValue, index, typedarray) => {
  // ...
});
```

The first time the function is called, the `accumulator` and
`currentValue` can be one of two values. If an
`initialValue` was provided in the call to
`reduceRight`, then `accumulator` will be equal to
`initialValue` and `currentValue` will be
equal to the last value in the typed array. If no `initialValue`
was provided, then `accumulator` will be equal to the last value
in the typed array and `currentValue` will be equal to the
second-to-last value.

If the typed array is empty and no `initialValue` was provided,
{{jsxref("TypeError")}} would be thrown. If the typed array has only one element
(regardless of position) and no `initialValue` was provided, or if
`initialValue` is provided but the typed array is empty, the solo
value would be returned without calling `callbackFn`.

## Examples

### Sum up all values within an array

```js
const total = new Uint8Array([0, 1, 2, 3]).reduceRight((a, b) => a + b);
// total === 6
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.reduceRight` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
