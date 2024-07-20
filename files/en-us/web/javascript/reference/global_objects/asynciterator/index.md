---
title: AsyncIterator
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator
page-type: javascript-class
browser-compat: javascript.builtins.AsyncIterator
---

{{JSRef}}

An **`AsyncIterator`** object is an object that conforms to the [async iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) by providing a `next()` method that returns a promise fulfilling to an iterator result object. The `AsyncIterator.prototype` object is a hidden global object that all built-in async iterators inherit from. It provides an [`[Symbol.asyncIterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator) method that returns the async iterator object itself, making the async iterator also [async iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols).

Note that `AsyncIterator` is _not_ a global object, although it will be in the future with the [async iterator helpers proposal](https://github.com/tc39/proposal-async-iterator-helpers). The `AsyncIterator.prototype` object shared by all built-in async iterators can be obtained with the following code:

```js
const AsyncIteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf(Object.getPrototypeOf((async function* () {})())),
);
```

## Description

Currently, the only built-in JavaScript async iterator is the {{jsxref("AsyncGenerator")}} object returned by [async generator functions](/en-US/docs/Web/JavaScript/Reference/Statements/async_function*). There are some other built-in async iterators in web API, such as the one of a {{domxref("ReadableStream")}}.

Each of these async iterators have a distinct prototype object, which defines the `next()` method used by the particular async iterator. All of these prototype objects inherit from `AsyncIterator.prototype`, which provides an [`[Symbol.asyncIterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) method that returns the async iterator object itself, making the async iterator also [async iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols).

> **Note:** `AsyncIterator.prototype` does not implement [`[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator), so async iterators are not [sync iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) by default.

## Instance methods

- [`AsyncIterator.prototype[Symbol.asyncIterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator)
  - : Returns the async iterator object itself. This allows async iterator objects to also be async iterable.

## Examples

### Using an async iterator as an async iterable

All built-in async iterators are also async iterable, so you can use them in a `for await...of` loop:

```js
const asyncIterator = (async function* () {
  yield 1;
  yield 2;
  yield 3;
})();
(async () => {
  for await (const value of asyncIterator) {
    console.log(value);
  }
})();
// Logs: 1, 2, 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/async_function*", "async function*")}}
- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
