---
title: AsyncDisposableStack.prototype.adopt()
short-title: adopt()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/adopt
page-type: javascript-instance-method
browser-compat: javascript.builtins.AsyncDisposableStack.adopt
sidebar: jsref
---

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

This function creates a file handle (as a Node.js [`FileHandle`](https://nodejs.org/api/fs.html#class-filehandle)), that gets closed when the function completes. We suppose that the file handle does not implement the async disposable protocol (in reality it does), so we use `adopt()` to register it to the stack. Because the `handle.close()` method returns a promise, we need to use an `AsyncDisposableStack` so that the disposal gets awaited.

```js
async function readFile(path) {
  await using disposer = new AsyncDisposableStack();
  const handle = disposer.adopt(
    fs.open(path),
    async (handle) => await handle.close(),
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
