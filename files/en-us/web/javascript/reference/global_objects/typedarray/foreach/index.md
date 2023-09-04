---
title: TypedArray.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/forEach
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.forEach
---

{{JSRef}}

The **`forEach()`** method of {{jsxref("TypedArray")}} instances executes a provided function once for each typed array element. This method has the same algorithm as {{jsxref("Array.prototype.forEach()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-foreach.html")}}

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameters

- `callbackFn`
  - : A function to execute for each element in the typed array. Its return value is discarded. The function is called with the following arguments:
    - `element`
      - : The current element being processed in the typed array.
    - `index`
      - : The index of the current element being processed in the typed array.
    - `array`
      - : The typed array `forEach()` was called upon.
- `thisArg` {{optional_inline}}
  - : A value to use as `this` when executing `callbackFn`. See [iterative methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Return value

None ({{jsxref("undefined")}}).

## Description

See {{jsxref("Array.prototype.forEach()")}} for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Logging the contents of a typed array

The following code logs a line for each element in a typed array:

```js
function logArrayElements(element, index, array) {
  console.log(`a[${index}] = ${element}`);
}

new Uint8Array([0, 1, 2, 3]).forEach(logArrayElements);
// Logs:
// a[0] = 0
// a[1] = 1
// a[2] = 2
// a[3] = 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.forEach` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
