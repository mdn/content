---
title: TypedArray.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduce
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.TypedArray.reduce
---
{{JSRef}}

The **`reduce()`** method applies a function against an
accumulator and each value of the typed array (from left-to-right) has to reduce it to a
single value. This method has the same algorithm as
{{jsxref("Array.prototype.reduce()")}}. _TypedArray_ is one of the [typed
array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects) here.

{{EmbedInteractiveExample("pages/js/typedarray-reduce.html")}}

## Syntax

```js
// Arrow function
reduce((accumulator, currentValue) => { ... } )
reduce((accumulator, currentValue, index) => { ... } )
reduce((accumulator, currentValue, index, array) => { ... } )
reduce((accumulator, currentValue, index, array) => { ... }, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Inline callback function
reduce(function(accumulator, currentValue) { ... })
reduce(function(accumulator, currentValue, index) { ... })
reduce(function(accumulator, currentValue, index, array){ ... })
reduce(function(accumulator, currentValue, index, array) { ... }, initialValue)
```

### Parameters

- `callbackFn`

  - : Function to execute on each value in the typed array, taking four arguments:

    - `accumulator`
      - : The value previously returned in the last invocation of the callback, or
        `initialValue`, if supplied (see below).
    - `currentValue`
      - : The current element being processed in the typed array.
    - `index`
      - : The index of the current element being processed in the typed array.
    - `array`
      - : The typed array `reduce()` was called upon.

- `initialValue`
  - : Optional. Object to use as the first argument to the first call of the
    `callbackFn`.

### Return value

The value that results from the reduction.

## Description

The `reduce` method executes the `callbackFn` function
once for each element present in the typed array, excluding holes in the typed array,
receiving four arguments: the initial value (or value from the previous
`callbackFn` call), the value of the current element, the current
index, and the typed array over which iteration is occurring.

The first time the callback is called, `accumulator` and
`currentValue` can be one of two values. If
`initialValue` is provided in the call to `reduce`,
then `accumulator` will be equal to
`initialValue` and `currentValue` will be
equal to the first value in the typed array. If no `initialValue`
was provided, then `accumulator` will be equal to the first
value in the typed array and `currentValue` will be equal to the
second.

If the typed array is empty and no `initialValue` was provided,
{{jsxref("TypeError")}} would be thrown. If the typed array has only one element
(regardless of position) and no `initialValue` was provided, or if
`initialValue` is provided but the typed array is empty, the solo
value would be returned without calling `callbackFn`.

## Examples

### Sum up all values within an array

```js
var total = new Uint8Array([0, 1, 2, 3]).reduce(function(a, b) {
  return a + b;
});
// total == 6
```

## Polyfill

This method uses the same algorithm as {{jsxref("Array.prototype.reduce()")}}, so the
same polyfill can be used here: replace `Array.prototype.reduce` with
`TypedArray.prototype.reduce`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `TypedArray.prototype.reduce` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Array.prototype.reduce()")}}
