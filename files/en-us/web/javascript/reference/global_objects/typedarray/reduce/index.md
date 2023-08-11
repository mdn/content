---
title: TypedArray.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduce
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.reduce
---

{{JSRef}}

The **`reduce()`** method of {{jsxref("TypedArray")}} instances executes a user-supplied "reducer" callback function on each element of the typed array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the typed array is a single value. This method has the same algorithm as {{jsxref("Array.prototype.reduce()")}}.

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

The value that results from running the "reducer" callback function to completion over the entire array.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the typed array contains no elements and `initialValue` is not provided.

## Description

See {{jsxref("Array.prototype.reduce()")}} for more details. This method is not generic and can only be called on typed array instances.

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
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.group()")}}
- {{jsxref("TypedArray.prototype.groupToMap()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.flat()")}}
- {{jsxref("TypedArray.prototype.flatMap()")}}
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Array.prototype.reduce()")}}
