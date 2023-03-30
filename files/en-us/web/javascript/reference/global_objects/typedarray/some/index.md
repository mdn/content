---
title: TypedArray.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/some
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.some
---

{{JSRef}}

The **`some()`** method tests whether some element in the typed
array passes the test implemented by the provided function. This method has the same
algorithm as {{jsxref("Array.prototype.some()")}}. _TypedArray_ is one
of the [typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) here.

{{EmbedInteractiveExample("pages/js/typedarray-some.html")}}

## Syntax

```js-nolint
some(callbackFn)
some(callbackFn, thisArg)
```

### Parameters

- `callbackFn`
  - : A function to execute for each element in the typed array. It should return a [truthy](/en-US/docs/Glossary/Truthy) value to indicate the element passes the test, and a [falsy](/en-US/docs/Glossary/Falsy) value otherwise. The function is called with the following arguments:
    - `element`
      - : The current element being processed in the typed array.
    - `index`
      - : The index of the current element being processed in the typed array.
    - `array`
      - : The typed array `some()` was called upon.
- `thisArg` {{optional_inline}}
  - : A value to use as `this` when executing `callbackFn`. See [iterative methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Return value

**`true`** if the callback function returns a [truthy](/en-US/docs/Glossary/Truthy) value for any array element; otherwise,
**`false`**.

## Description

The `some` method executes the `callbackFn` function once for each
element present in the typed array until it finds one where `callbackFn`
returns a true value. If such an element is found, `some` immediately returns
`true`. Otherwise, `some` returns `false`.

`callbackFn` is invoked with three arguments: the value of the element, the
index of the element, and the array object being traversed.

If a `thisArg` parameter is provided to `some`, it will be passed
to `callbackFn` when invoked, for use as its `this` value.
Otherwise, the value `undefined` will be passed for use as its
`this` value. The `this` value ultimately observable by
`callbackFn` is determined according to
[the usual rules for determining the `this` seen by a function](/en-US/docs/Web/JavaScript/Reference/Operators/this).

`some` does not mutate the typed array on which it is called.

## Examples

### Testing size of all typed array elements

The following example tests whether any element in the typed array is bigger than 10.

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}
new Uint8Array([2, 5, 8, 1, 4]).some(isBiggerThan10); // false
new Uint8Array([12, 5, 8, 1, 4]).some(isBiggerThan10); // true
```

### Testing typed array elements using arrow functions

[Arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) provide a shorter syntax for the same test.

```js
new Uint8Array([2, 5, 8, 1, 4]).some((elem) => elem > 10); // false
new Uint8Array([12, 5, 8, 1, 4]).some((elem) => elem > 10); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.some` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
