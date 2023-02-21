---
title: Symbol.asyncIterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Symbol.asyncIterator
---

{{JSRef}}

The **`Symbol.asyncIterator`** static data property represents the well-known symbol specifying the method that returns the [async iterator](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) for an object. If this property is set on an object, it is an async iterable and can be used in a [`for await...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) loop.

{{EmbedInteractiveExample("pages/js/symbol-asynciterator.html", "taller")}}

## Value

The well-known symbol `@@asyncIterator`.

{{js_property_attributes(0, 0, 0)}}

## Description

The `Symbol.asyncIterator` symbol is a builtin symbol that is used to access an object's `@@asyncIterator` method. In order for an object to be async iterable, it must have a `Symbol.asyncIterator` key.

## Examples

### User-defined async iterables

You can define your own async iterable by setting the `[Symbol.asyncIterator]` property on an object.

```js
const myAsyncIterable = {
  async *[Symbol.asyncIterator]() {
    yield "hello";
    yield "async";
    yield "iteration!";
  },
};

(async () => {
  for await (const x of myAsyncIterable) {
    console.log(x);
  }
})();
// Logs:
// "hello"
// "async"
// "iteration!"
```

When creating an API, remember that async iterables are designed to represent something _iterable_ — like a stream of data or a list —, not to completely replace callbacks and events in most situations.

### Built-in async iterables

[`ReadableStream`](/en-US/docs/Web/API/ReadableStream) is the only built-in JavaScript object that has the `Symbol.asyncIterator` method set by default at the time of writing.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [for await...of](/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
