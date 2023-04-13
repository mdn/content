---
title: Iterator
slug: Web/JavaScript/Reference/Global_Objects/Iterator
page-type: javascript-class
browser-compat: javascript.builtins.Iterator
---

{{JSRef}}

An **`Iterator`** object is an object that conforms to the [iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) by providing a `next()` method that returns an iterator result object. The `Iterator.prototype` object is a hidden global object that all built-in iterators inherit from. It provides a [`@@iterator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/@@iterator) method that returns the iterator object itself, making the iterator also [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

Note that `Iterator` is _not_ a global object, although it will be in the future with the [iterator helpers proposal](https://github.com/tc39/proposal-iterator-helpers). The `Iterator.prototype` object shared by all built-in iterators can be obtained with the following code:

```js
const IteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf([].values()),
);
```

## Description

The following are all built-in JavaScript iterators:

- The _Array Iterator_ returned by {{jsxref("Array.prototype.values()")}}, {{jsxref("Array.prototype.keys()")}}, {{jsxref("Array.prototype.entries()")}}, [`Array.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator), {{jsxref("TypedArray.prototype.values()")}}, {{jsxref("TypedArray.prototype.keys()")}}, {{jsxref("TypedArray.prototype.entries()")}}, [`TypedArray.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator), and [`arguments[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/@@iterator).
- The _String Iterator_ returned by [`String.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator).
- The _Map Iterator_ returned by {{jsxref("Map.prototype.values()")}}, {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.entries()")}}, and [`Map.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator).
- The _Set Iterator_ returned by {{jsxref("Set.prototype.values()")}}, {{jsxref("Set.prototype.keys()")}}, {{jsxref("Set.prototype.entries()")}}, and [`Set.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator).
- The _RegExp String Iterator_ returned by [`RegExp.prototype[@@matchAll]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll) and {{jsxref("String.prototype.matchAll()")}}.
- The {{jsxref("Generator")}} object returned by [generator functions](/en-US/docs/Web/JavaScript/Reference/Statements/function*).
- The _Segments Iterator_ returned by the [`[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/@@iterator) method of the [`Segments`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) object returned by [`Intl.Segmenter.prototype.segment()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment).

Each of these iterators have a distinct prototype object, which defines the `next()` method used by the particular iterator. For example, all string iterator objects inherit from a hidden object `StringIteratorPrototype`, which has a `next()` method that iterates this string by code points. `StringIteratorPrototype` also has a [`@@toStringTag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property whose initial value is the string `"String Iterator"`. This property is used in {{jsxref("Object.prototype.toString()")}}. Similarly, other iterator prototypes also have their own `@@toStringTag` values, which are the same as the names given above.

All of these prototype objects inherit from `Iterator.prototype`, which provides a [`@@iterator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) method that returns the iterator object itself, making the iterator also [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

## Instance methods

- [`Iterator.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/@@iterator)
  - : Returns the iterator object itself. This allows iterator objects to also be iterable.

## Examples

### Using an iterator as an iterable

All built-in iterators are also iterable, so you can use them in a `for...of` loop:

```js
const arrIterator = [1, 2, 3].values();
for (const value of arrIterator) {
  console.log(value);
}
// Logs: 1, 2, 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{JSxRef("Statements/function*", "function*")}}
- [The Iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
