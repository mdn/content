---
title: Symbol.iterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/iterator
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Symbol
  - Polyfill
browser-compat: javascript.builtins.Symbol.iterator
---
{{JSRef}}

The well-known **`Symbol.iterator`** symbol specifies the default iterator for an object. Used by [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of).

{{EmbedInteractiveExample("pages/js/symbol-iterator.html")}}

## Description

Whenever an object needs to be iterated (such as at the beginning of a `for..of` loop), its `@@iterator` method is called with no arguments, and the returned **iterator** is used to obtain the values to be iterated.

Some built-in types have a default iteration behavior, while other types (such as {{jsxref("Object")}}) do not. The built-in types with a `@@iterator` method are:

- {{jsxref("Array.@@iterator", "Array.prototype[@@iterator]()")}}
- {{jsxref("TypedArray.@@iterator", "TypedArray.prototype[@@iterator]()")}}
- {{jsxref("String.@@iterator", "String.prototype[@@iterator]()")}}
- {{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}
- {{jsxref("Set.@@iterator", "Set.prototype[@@iterator]()")}}

See also [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) for more information.

{{js_property_attributes(0,0,0)}}

## Examples

### User-defined iterables

We can make our own iterables like this:

```js
const myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable] // [1, 2, 3]
```

Or iterables can be defined directly inside a class or object using a [computed property](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names):

```js
class Foo {
  *[Symbol.iterator] () {
    yield 1;
    yield 2;
    yield 3;
  }
}

const someObj = {
  *[Symbol.iterator] () {
    yield 'a';
    yield 'b';
  }
}

console.log(...new Foo); // 1, 2, 3
console.log(...someObj); // 'a', 'b'
```

### Non-well-formed iterables

If an iterable's `@@iterator` method does not return an iterator object, then it is a non-well-formed iterable. Using it as such is likely to result in runtime exceptions or buggy behavior:

```js example-bad
const nonWellFormedIterable = {};
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable] // TypeError: [Symbol.iterator]() returned a non-object value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Symbol.iterator` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Array.@@iterator", "Array.prototype[@@iterator]()")}}
- {{jsxref("TypedArray.@@iterator", "TypedArray.prototype[@@iterator]()")}}
- {{jsxref("String.@@iterator", "String.prototype[@@iterator]()")}}
- {{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}
- {{jsxref("Set.@@iterator", "Set.prototype[@@iterator]()")}}
