---
title: TypedArray.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/every
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.every
---

{{JSRef}}

The **`every()`** method of {{jsxref("TypedArray")}} instances tests whether all elements in the typed array pass the test implemented by the provided function. It returns a Boolean value. This method has the same algorithm as {{jsxref("Array.prototype.every()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-every.html")}}

## Syntax

```js-nolint
every(callbackFn)
every(callbackFn, thisArg)
```

### Parameters

- `callbackFn`
  - : A function to execute for each element in the typed array. It should return a [truthy](/en-US/docs/Glossary/Truthy) value to indicate the element passes the test, and a [falsy](/en-US/docs/Glossary/Falsy) value otherwise. The function is called with the following arguments:
    - `element`
      - : The current element being processed in the typed array.
    - `index`
      - : The index of the current element being processed in the typed array.
    - `array`
      - : The typed array `every()` was called upon.
- `thisArg` {{optional_inline}}
  - : A value to use as `this` when executing `callbackFn`. See [iterative methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Return value

`true` if `callbackFn` returns a {{Glossary("truthy")}} value for every array element. Otherwise, `false`.

## Description

See {{jsxref("Array.prototype.every()")}} for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Testing size of all typed array elements

The following example tests whether all elements in the typed array are bigger than 9.

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
new Uint8Array([12, 5, 8, 130, 44]).every(isBigEnough); // false
new Uint8Array([12, 54, 18, 130, 44]).every(isBigEnough); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.every` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("Array.prototype.every()")}}
