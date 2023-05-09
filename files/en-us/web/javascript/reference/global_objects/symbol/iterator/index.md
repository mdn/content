---
title: Symbol.iterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/iterator
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Symbol.iterator
---

{{JSRef}}

The **`Symbol.iterator`** static data property represents the [well-known symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `@@iterator`. The [iterable protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) looks up this symbol for the method that returns the iterator for an object. In order for an object to be iterable, it must have an `@@iterator` key.

{{EmbedInteractiveExample("pages/js/symbol-iterator.html")}}

## Value

The well-known symbol `@@iterator`.

{{js_property_attributes(0, 0, 0)}}

## Description

Whenever an object needs to be iterated (such as at the beginning of a `for...of` loop), its `@@iterator` method is called with no arguments, and the returned **iterator** is used to obtain the values to be iterated.

Some built-in types have a default iteration behavior, while other types (such as {{jsxref("Object")}}) do not. Some built-in types with a `@@iterator` method are:

- [`Array.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)
- [`TypedArray.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator)
- [`String.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)
- [`Map.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator)
- [`Set.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator)

See also [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) for more information.

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
[...myIterable]; // [1, 2, 3]
```

Or iterables can be defined directly inside a class or object using a [computed property](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names):

```js
class Foo {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
}

const someObj = {
  *[Symbol.iterator]() {
    yield "a";
    yield "b";
  },
};

console.log(...new Foo()); // 1, 2, 3
console.log(...someObj); // 'a', 'b'
```

### Non-well-formed iterables

If an iterable's `@@iterator` method does not return an iterator object, then it is a non-well-formed iterable. Using it as such is likely to result in runtime exceptions or buggy behavior:

```js example-bad
const nonWellFormedIterable = {};
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Symbol.iterator` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [`Array.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)
- [`TypedArray.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator)
- [`String.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)
- [`Map.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator)
- [`Set.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator)
- [`arguments[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/@@iterator)
- [`Segments.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/@@iterator)
