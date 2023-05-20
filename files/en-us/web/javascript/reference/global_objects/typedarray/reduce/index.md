---
title: TypedArray.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduce
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.reduce
---

{{JSRef}}

The **`reduce()`** method applies a function against an
accumulator and each value of the typed array (from left-to-right) has to reduce it to a
single value. This method has the same algorithm as
{{jsxref("Array.prototype.reduce()")}}. _TypedArray_ is one of the
[typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) here.

{{EmbedInteractiveExample("pages/js/typedarray-reduce.html")}}

## Syntax

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### Parameters

- `callbackFn`
  - : A function to execute for each element in the typed array. Its return value becomes the value of the `accumulator` parameter on the next invocation of `callbackFn`. For the last invocation, the return value becomes the return value of `reduce()`. The function is called with the following arguments:
    - `accumulator`
      - : The value resulting from the previous call to `callbackFn`. On first call, `initialValue` if specified, otherwise the value of `array[0]`.
    - `currentValue`
      - : The value of the current element. On first call, the value of `array[0]` if an `initialValue` was specified, otherwise the value of `array[1]`.
    - `currentIndex`
      - : The index position of `currentValue` in the typed array. On first call, `0` if `initialValue` was specified, otherwise `1`.
    - `array`
      - : The typed array `reduce()` was called upon.
- `initialValue` {{optional_inline}}
  - : A value to which `accumulator` is initialized the first time the callback is called.
    If `initialValue` is specified, `callbackFn` starts executing with the first value in the typed array as `currentValue`.
    If `initialValue` is _not_ specified, `accumulator` is initialized to the first value in the typed array, and `callbackFn` starts executing with the second value in the typed array as `currentValue`. In this case, if the typed array is empty (so that there's no first value to return as `accumulator`), an error is thrown.

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
const total = new Uint8Array([0, 1, 2, 3]).reduce((a, b) => a + b);
// total === 6
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.reduce` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Array.prototype.reduce()")}}
