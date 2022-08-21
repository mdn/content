---
title: Symbol.asyncIterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator
tags:
  - ECMAScript 2018
  - JavaScript
  - Property
  - Reference
  - Symbol
  - asynchronous
browser-compat: javascript.builtins.Symbol.asyncIterator
---
{{JSRef}}

The **`Symbol.asyncIterator`** well-known symbol specifies the default [async iterator](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) for an object. If this property is set on an object, it is an async iterable and can be used in a [`for await...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) loop.

## Description

The `Symbol.asyncIterator` symbol is a builtin symbol that is used to access an object's `@@asyncIterator` method. In order for an object to be async iterable, it must have a `Symbol.asyncIterator` key.

{{js_property_attributes(0,0,0)}}

## Examples

### User-defined async iterables

You can define your own async iterable by setting the `[Symbol.asyncIterator]` property on an object.

```js
const myAsyncIterable = {
  async *[Symbol.asyncIterator]() {
    yield "hello";
    yield "async";
    yield "iteration!";
  }
};

(async () => {
  for await (const x of myAsyncIterable) {
    console.log(x);
    // expected output:
    //    "hello"
    //    "async"
    //    "iteration!"
  }
})();
```

When creating an API, remember that async iterables are designed to represent something _iterable_ — like a stream of data or a list —, not to completely replace callbacks and events in most situations.

### Built-in async iterables

There are currently no built-in JavaScript objects that have the `[Symbol.asyncIterator]` key set by default. However, WHATWG Streams are set to be the first built-in object to be async iterable, with `[Symbol.asyncIterator]` recently landing in the spec.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [for await...of](/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
