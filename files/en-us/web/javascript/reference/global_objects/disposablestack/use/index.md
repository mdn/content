---
title: DisposableStack.prototype.use()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/use
page-type: javascript-instance-method
status:
  - non-standard
browser-compat: javascript.builtins.DisposableStack.use
sidebar: jsref
---

{{non-standard_header}}

The **`use()`** method of {{jsxref("DisposableStack")}} instances registers a value that implements the [disposable protocol](/en-US/docs/Web/JavaScript/Guide/Resource_management) to the stack.

## Syntax

```js-nolint
use(value)
```

### Parameters

- `value`
  - : The value to register to the stack. Must either contain a `[Symbol.dispose]()` method, or be `null` or `undefined`.

### Return value

The same `value` that was passed in.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `value` is not `null` or `undefined`, and does not contain a `[Symbol.dispose]()` method.
- {{jsxref("ReferenceError")}}
  - : Thrown if the stack is already disposed.

## Description

The primary purpose of `use()` is to register a value that implements the disposable protocol to the stack, as the equivalent of the {{jsxref("Statements/using", "using")}} declaration. If the value does not implement the disposable protocol (it doesn't have the `[Symbol.dispose]()` method), use {{jsxref("DisposableStack/adopt", "adopt()")}} instead, passing a callback that calls the resource's cleanup method.

You should make your resource registered as soon as it's declared. This means you should always wrap your resource acquisition expression in `use()`, instead of extracting it to a separate statement.

```js example-bad
using disposer = new DisposableStack();
const reader = stream.getReader();
disposer.use(reader);
```

## Examples

### Using use()

This code consumes a {{domxref("ReadableStream")}} via a {{domxref("ReadableStreamDefaultReader")}}. The reader is automatically closed when the function completes, assuming it implements an `[Symbol.dispose]()` method that synchronously releases the lock on the stream.

```js
{
  using disposer = new DisposableStack();
  const reader = disposer.use(stream.getReader());
  const { value, done } = reader.read();
  if (!done) {
    // Process the value
  }
  // The reader.releaseLock() method is called here before exiting
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("DisposableStack")}}
- {{jsxref("DisposableStack.prototype.adopt()")}}
- {{jsxref("DisposableStack.prototype.defer()")}}
