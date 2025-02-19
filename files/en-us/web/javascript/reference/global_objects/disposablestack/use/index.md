---
title: DisposableStack.prototype.use()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/use
page-type: javascript-instance-method
browser-compat: javascript.builtins.DisposableStack.use
---

{{JSRef}}

The **`use()`** method of {{jsxref("DisposableStack")}} instances registers a value that implements the [disposable protocol](/en-US/docs/Web/JavaScript/Guide/Resource_management) to the stack.

## Syntax

```js-nolint
use(value)
```

### Parameters

- `value`
  - : The value to register to the stack. Must contain a `[Symbol.dispose]()` method.

### Return value

The same `value` that was passed in.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `value` does not contain a `[Symbol.dispose]()` method.
- {{jsxref("ReferenceError")}}
  - : Thrown if the stack is already disposed.

## Description

The primary purpose of `use()` is to register a value that implements the disposable protocol to the stack, as the equivalent of the {{jsxref("Statements/using", "using")}} declaration. If the value does not implement the disposable protocol (it doesn't have the `[Symbol.dispose]()` method), use {{jsxref("DisposableStack/adopt", "adopt()")}} instead, passing a callback that calls the resource's cleanup method.

You should make your resource registered as soon as it's declared. This means you should always wrap your resource acquisition expression in `use()`, instead of extracting it to a separate statement.

```js example-bad
using stack = new DisposableStack();
const handle = new FileHandle("file.txt");
stack.use(handle);
```

## Examples

### Using use()

This function reads a file and returns its contents. The file handle is automatically closed when the function completes, assuming the `FileHandle` class implements an `[Symbol.dispose]()` method that synchronously closes the file.

```js
function readFileContents(path) {
  using stack = new DisposableStack();
  const handle = stack.use(new FileHandle(path));
  const data = handle.read();
  return data;
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
