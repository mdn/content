---
title: AsyncDisposableStack.prototype.use()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/use
page-type: javascript-instance-method
browser-compat: javascript.builtins.AsyncDisposableStack.use
---

{{JSRef}}

The **`use()`** method of {{jsxref("AsyncDisposableStack")}} instances registers a value that implements the [async disposable protocol](/en-US/docs/Web/JavaScript/Guide/Resource_management) to the stack.

See {{jsxref("DisposableStack.prototype.use()")}} for general information about the `use()` method.

## Syntax

```js-nolint
use(value)
```

### Parameters

- `value`
  - : The value to register to the stack. Must contain a `[Symbol.asyncDispose]()` or `[Symbol.dispose]()` method.

### Return value

The same `value` that was passed in.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `value` does not contain a `[Symbol.asyncDispose]()` or `[Symbol.dispose]()` method.
- {{jsxref("ReferenceError")}}
  - : Thrown if the stack is already disposed.

## Examples

### Using use()

This function reads a file (as a Node.js [`FileHandle`](https://nodejs.org/api/fs.html#class-filehandle)) and returns its contents. The file handle is automatically closed when the function completes, given that the `FileHandle` class implements an `[Symbol.asyncDispose]()` method that asynchronously closes the file.

```js
async function readFileContents(path) {
  await using stack = new AsyncDisposableStack();
  const handle = stack.use(fs.open(path));
  const data = await handle.read();
  return data;
  // The stack is disposed here, which causes handle to be closed too
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.adopt()")}}
- {{jsxref("AsyncDisposableStack.prototype.defer()")}}
