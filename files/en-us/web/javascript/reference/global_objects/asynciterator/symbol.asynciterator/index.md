---
title: AsyncIterator.prototype[Symbol.asyncIterator]()
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator
page-type: javascript-instance-method
browser-compat: javascript.builtins.AsyncIterator.@@asyncIterator
---

{{JSRef}}

The **`[Symbol.asyncIterator]()`** method of {{jsxref("AsyncIterator")}} instances implements the [async iterable protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) and allows built-in async iterators to be consumed by most syntaxes expecting async iterables, such as [`for await...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) loops. It returns the value of [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this), which is the async iterator object itself.

{{EmbedInteractiveExample("pages/js/map-prototype-@@iterator.html")}}

## Syntax

```js-nolint
asyncIterator[Symbol.asyncIterator]()
```

### Parameters

None.

### Return value

The value of [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this), which is the async iterator object itself.

## Examples

### Iteration using for await...of loop

Note that you seldom need to call this method directly. The existence of the `[Symbol.asyncIterator]()` method makes all built-in async iterators [async iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), and iterating syntaxes like the `for await...of` loop automatically calls this method to obtain the async iterator to loop over.

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

- [`for await...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
