---
title: AsyncDisposableStack.prototype.adopt()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/adopt
page-type: javascript-instance-method
browser-compat: javascript.builtins.AsyncDisposableStack.adopt
---

{{JSRef}}

The **`adopt()`** method of {{jsxref("AsyncDisposableStack")}} instances registers a value that doesn't implement the async disposable protocol to the stack by providing a custom disposer function.

See {{jsxref("DisposableStack.prototype.adopt()")}} for general information about the `adopt()` method.

## Syntax

```js-nolint
adopt(value, onDispose)
```

### Parameters

- `value`
  - : Any value to be registered to the stack.
- `onDispose`
  - : A function that will be called when the stack is disposed. The function receives `value` as its only argument, and it can return a promise which gets awaited.

### Return value

The same `value` that was passed in.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `onDispose` is not a function.
- {{jsxref("ReferenceError")}}
  - : Thrown if the stack is already disposed.

## Examples

### Using adopt()

This function creates a file handle that gets closed when the function completes. The file handle does not implement the async disposable protocol, so we use `adopt()` to register it to the stack.

```js
async function readFile(fileName) {
  await using stack = new AsyncDisposableStack();
  const handle = stack.adopt(new FileHandle(fileName), (handle) =>
    handle.close(),
  );
  const data = await handle.read();
  // The handle.close() method is called and awaited here before exiting
  return data;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.defer()")}}
- {{jsxref("AsyncDisposableStack.prototype.use()")}}
