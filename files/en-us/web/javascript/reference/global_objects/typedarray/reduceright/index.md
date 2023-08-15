---
title: TypedArray.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.reduceRight
---

{{JSRef}}

The **`reduceRight()`** method of {{jsxref("TypedArray")}} instances applies a function against an accumulator and each value of the typed array (from right-to-left) to reduce it to a single value. This method has the same algorithm as {{jsxref("Array.prototype.reduceRight()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-reduceright.html")}}

## Syntax

```js-nolint
reduceRight(callbackFn)
reduceRight(callbackFn, initialValue)
```

### Parameters

- `callbackFn`
  - : A function to execute for each element in the typed array. Its return value becomes the value of the `accumulator` parameter on the next invocation of `callbackFn`. For the last invocation, the return value becomes the return value of `reduceRight()`. The function is called with the following arguments:
    - `accumulator`
      - : The value resulting from the previous call to `callbackFn`. On first call, `initialValue` if specified, otherwise the array's last element's value.
    - `currentValue`
      - : The current element being processed in the typed array.
    - `index`
      - : The index of the current element being processed in the typed array.
    - `array`
      - : The typed array `reduceRight()` was called upon.
- `initialValue` {{optional_inline}}
  - : Value to use as accumulator to the first call of the `callbackFn`. If no initial value is supplied, the last element in the typed array will be used and skipped. Calling `reduceRight()` on an empty typed array without an initial value creates a `TypeError`.

### Return value

The value that results from the reduction.

## Description

See {{jsxref("Array.prototype.reduceRight()")}} for more details. This method is not generic and can only be called on typed array instances.

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
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.group()")}}
- {{jsxref("TypedArray.prototype.groupToMap()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.flat()")}}
- {{jsxref("TypedArray.prototype.flatMap()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
