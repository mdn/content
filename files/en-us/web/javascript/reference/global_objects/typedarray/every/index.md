---
title: TypedArray.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/every
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.TypedArray.every
---
{{JSRef}}

The **`every()`** method tests whether all elements in the
typed array pass the test implemented by the provided function. This method has the same
algorithm as {{jsxref("Array.prototype.every()")}}_._ _TypedArray_ is one
of the [typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) here.

{{EmbedInteractiveExample("pages/js/typedarray-every.html")}}

## Syntax

```js
// Arrow function
every((element) => { /* ... */ } )
every((element, index) => { /* ... */ } )
every((element, index, array) => { /* ... */ } )

// Callback function
every(callbackFn)
every(callbackFn, thisArg)

// Inline callback function
every(function(element) { /* ... */ })
every(function(element, index) { /* ... */ })
every(function(element, index, array){ /* ... */ })
every(function(element, index, array) { /* ... */ }, thisArg)
```

### Parameters

- `callbackFn`

  - : A function to test for each element.

    The function is called with the following arguments:

    - `element`
      - : The current element being processed in the typed array.
    - `index`
      - : The index of the current element being processed in the typed array.
    - `array`
      - : The typed array `every` was called upon.

- `thisArg` {{Optional_inline}}
  - : A value to use as `this` when executing `callbackFn`.

### Return value

`true` if the callback function returns a {{Glossary("truthy")}} value for
every array element; otherwise, `false`.

## Description

The `every` method executes the provided `callbackFn`
function once for each element present in the typed array until it finds the one where
`callbackFn` returns a {{Glossary("falsy")}} value. If such an
element is found, the `every` method immediately returns `false`.
Otherwise, if `callbackFn` returns a {{Glossary("truthy")}} value
for all elements, `every` returns `true`.

`callbackFn` is invoked with three arguments: the value of the
element, the index of the element, and the typed array object being traversed.

If a `thisArg` parameter is provided to `every`, it
will be used as callback's `this` value. Otherwise, the value
`undefined` will be used as its `this` value. The
`this` value ultimately observable by `callbackFn` is
determined according to
[the usual rules for determining the `this` seen by a function](/en-US/docs/Web/JavaScript/Reference/Operators/this).

`every` does not mutate the typed array on which it is called.

## Examples

### Testing size of all typed array elements

The following example tests whether all elements in the typed array are bigger than 9.

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
new Uint8Array([12, 5, 8, 130, 44]).every(isBigEnough);   // false
new Uint8Array([12, 54, 18, 130, 44]).every(isBigEnough); // true
```

### Testing typed array elements using arrow functions

[Arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) provide a shorter syntax for the same test.

```js
new Uint8Array([12, 5, 8, 130, 44]).every((elem) => elem >= 10); // false
new Uint8Array([12, 54, 18, 130, 44]).every((elem) => elem >= 10); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.every` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.every()")}}
