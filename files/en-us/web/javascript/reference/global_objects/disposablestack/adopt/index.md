---
title: DisposableStack.prototype.adopt()
short-title: adopt()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/adopt
page-type: javascript-instance-method
browser-compat: javascript.builtins.DisposableStack.adopt
sidebar: jsref
---

The **`adopt()`** method of {{jsxref("DisposableStack")}} instances registers a value that doesn't implement the disposable protocol to the stack by providing a custom disposer function.

## Syntax

```js-nolint
adopt(value, onDispose)
```

### Parameters

- `value`
  - : Any value to be registered to the stack.
- `onDispose`
  - : A function that will be called when the stack is disposed. The function receives `value` as its only argument.

### Return value

The same `value` that was passed in.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `onDispose` is not a function.
- {{jsxref("ReferenceError")}}
  - : Thrown if the stack is already disposed.

## Description

The primary purpose of `adopt()` is to register a value that doesn't implement the disposable protocol to the stack. If the value is already disposable, you can use {{jsxref("DisposableStack/use", "use()")}} instead, which automatically uses the value's `[Symbol.dispose]()` method as the disposer.

`adopt(value, onDispose)` is almost the same as `defer(() => onDispose(value))`, but it allows you to declare the resource and register it on the same line. This way, there's minimal chance of an error happening between the resource creation and registration, which will cause the resource to leak.

```js example-good
using disposer = new DisposableStack();
const reader = disposer.adopt(stream.getReader(), (reader) =>
  reader.releaseLock(),
);
```

```js example-bad
using disposer = new DisposableStack();
const reader = stream.getReader();
// If someone adds code in between these lines and an error occurs,
// the stream will be locked forever.
disposer.defer(() => reader.close());
```

In the same spirit of "make your resource registered as soon as it's declared", you should always wrap your resource acquisition expression in `adopt()`, instead of extracting it to a separate statement.

```js example-bad
using disposer = new DisposableStack();
const reader = stream.getReader();
disposer.adopt(reader, (reader) => reader.close());
```

## Examples

### Using adopt()

This code consumes a {{domxref("ReadableStream")}} via a {{domxref("ReadableStreamDefaultReader")}}. The reader does not implement the disposable protocol, so we use `adopt()` to register it to the stack.

```js
{
  using disposer = new DisposableStack();
  const reader = disposer.adopt(stream.getReader(), (reader) =>
    reader.releaseLock(),
  );
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
- {{jsxref("DisposableStack.prototype.defer()")}}
- {{jsxref("DisposableStack.prototype.use()")}}
