---
title: Iterator.from()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/from
page-type: javascript-static-method
browser-compat: javascript.builtins.Iterator.from
---

{{JSRef}}

The **`Iterator.from()`** static method creates a new {{jsxref("Iterator")}} object from an iterator or iterable object.

## Syntax

```js-nolint
from(object)
```

### Parameters

- `object`
  - : An object that implements the [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) protocol or the [iterator](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) protocol.

### Return value

If `object` is an iterable, its `[Symbol.iterator]()` method is called to obtain the iterator. Otherwise, `object` is assumed to be an iterator. If the iterator is already {{jsxref("Operators/instanceof", "instanceof")}} {{jsxref("Iterator")}} (which means it has `Iterator.prototype` in its prototype chain), it is returned directly. Otherwise, a new {{jsxref("Iterator")}} object is created that wraps the original iterator.

## Description

This method exists to convert custom iterators, probably exported by libraries, to [proper iterators](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator#proper_iterators). All iterator objects returned by `Iterator.from()` inherit from a common prototype object, which has the following methods:

- `next()`
  - : Calls the underlying iterator's `next()` method and returns the result.
- `return()`
  - : Calls the underlying iterator's `return()` method and returns the result, or returns `{ value: undefined, done: true }` if the underlying iterator doesn't have a `return()` method.

## Examples

### Converting an iterable to a proper iterator

Because `obj` is already an iterable that returns a proper iterator when its `[Symbol.iterator]()` method is called, `Iterator.from(obj)` returns the same iterator.

```js
const iterator = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

const obj = {
  [Symbol.iterator]() {
    return iterator;
  },
};

const iterator2 = Iterator.from(obj);
console.log(iterator2 === iterator); // true
```

Because `obj2` is an iterable that returns a non-proper iterator when its `[Symbol.iterator]()` method is called, `Iterator.from(obj2)` returns a new iterator that wraps the original iterator.

```js
const iterator = {
  current: 0,
  next() {
    return { value: this.current++, done: false };
  },
};

const obj2 = {
  [Symbol.iterator]() {
    return iterator;
  },
};

const iterator2 = Iterator.from(obj2);
console.log(iterator2 === iterator); // false
console.log(iterator2.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
```

### Converting an iterator to a proper iterator

Because `obj` is already a proper iterator, `Iterator.from(obj)` returns itself.

```js
const obj = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

const iterator = Iterator.from(obj);
console.log(iterator === obj); // true
```

Because `obj2` is a non-proper iterator, `Iterator.from(obj2)` returns a new iterator that wraps the original iterator.

```js
const obj2 = {
  current: 0,
  next() {
    return { value: this.current++, done: false };
  },
};

const iterator = Iterator.from(obj2);
console.log(iterator === obj2); // false
console.log(iterator.next()); // { value: 0, done: false }
console.log(obj2.next()); // { value: 1, done: false }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Iterator.from` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Array.from()")}}
