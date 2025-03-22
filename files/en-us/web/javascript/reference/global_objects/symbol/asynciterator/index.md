---
title: Symbol.asyncIterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Symbol.asyncIterator
---

{{JSRef}}

The **`Symbol.asyncIterator`** static data property represents the [well-known symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.asyncIterator`. The [async iterable protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) looks up this symbol for the method that returns the async iterator for an object. In order for an object to be async iterable, it must have an `[Symbol.asyncIterator]` key.

{{InteractiveExample("JavaScript Demo: Symbol.asyncIterator", "taller")}}

```js interactive-example
const delayedResponses = {
  delays: [500, 1300, 3500],

  wait(delay) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  },

  async *[Symbol.asyncIterator]() {
    for (const delay of this.delays) {
      await this.wait(delay);
      yield `Delayed response for ${delay} milliseconds`;
    }
  },
};

(async () => {
  for await (const response of delayedResponses) {
    console.log(response);
  }
})();

// Expected output: "Delayed response for 500 milliseconds"
// Expected output: "Delayed response for 1300 milliseconds"
// Expected output: "Delayed response for 3500 milliseconds"
```

## Value

The well-known symbol `Symbol.asyncIterator`.

{{js_property_attributes(0, 0, 0)}}

## Examples

### User-defined async iterables

You can define your own async iterable by setting the `[Symbol.asyncIterator]()` property on an object.

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

There is no object in the core JavaScript language that is async iterable. Some web APIs, such as {{domxref("ReadableStream")}}, have the `Symbol.asyncIterator` method set by default.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [for await...of](/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
