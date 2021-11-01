---
title: TypedArray.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/some
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.TypedArray.some
---
{{JSRef}}

The **`some()`** method tests whether some element in the typed
array passes the test implemented by the provided function. This method has the same
algorithm as {{jsxref("Array.prototype.some()")}}_._ _TypedArray_ is one
of the [typed
array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects) here.

{{EmbedInteractiveExample("pages/js/typedarray-some.html")}}

## Syntax

```js
// Arrow function
some((element) => { ... } )
some((element, index) => { ... } )
some((element, index, array) => { ... } )

// Callback function
some(callbackFn)
some(callbackFn, thisArg)

// Inline callback function
some(function(element) { ... })
some(function(element, index) { ... })
some(function(element, index, array){ ... })
some(function(element, index, array) { ... }, thisArg)
```

### Parameters

- `callbackFn`

  - : Function to test for each element, taking three arguments:

    - `element`
      - : The current element being processed in the typed array.
    - `index`
      - : The index of the current element being processed in the typed array.
    - `array`
      - : The typed array `some` was called upon.

- `thisArg`
  - : Optional. Value to use as `this` when executing `callback`.

### Return value

**`true`** if the callback function returns a [truthy](/en-US/docs/Glossary/truthy) value for any array element; otherwise,
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
`this` value.  The `this` value ultimately observable by
`callbackFn` is determined according to [the usual rules for
determining the `this` seen by a function](/en-US/docs/Web/JavaScript/Reference/Operators/this).

`some` does not mutate the typed array on which it is called.

## Polyfill

Since there is no global object with the name _TypedArray_, polyfilling must be
done on an "as needed" basis.

```js
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.some
if (!Uint8Array.prototype.some) {
  Object.defineProperty(Uint8Array.prototype, 'some', {
    value: Array.prototype.some
  });
}
```

If you need to support truly obsolete JavaScript engines that don't support
[`Object.defineProperty`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty),
it's best not to polyfill `Array.prototype` methods at all, as you can't make
them non-enumerable.

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

[Arrow
functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) provide a shorter syntax for the same test.

```js
new Uint8Array([2, 5, 8, 1, 4]).some(elem => elem > 10); // false
new Uint8Array([12, 5, 8, 1, 4]).some(elem => elem > 10); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `TypedArray.prototype.some` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
