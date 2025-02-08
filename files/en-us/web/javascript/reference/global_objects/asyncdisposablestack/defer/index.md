---
title: AsyncDisposableStack.prototype.defer()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/defer
page-type: javascript-instance-method
browser-compat: javascript.builtins.AsyncDisposableStack.defer
---

{{JSRef}}

The **`defer()`** method of {{jsxref("AsyncDisposableStack")}} instances takes a callback function to be called and awaited when the stack is disposed.

See {{jsxref("DisposableStack.prototype.defer()")}} for general information about the `defer()` method.

## Syntax

```js-nolint
defer(onDispose)
```

### Parameters

- `onDispose`
  - : A function that will be called when the stack is disposed. The function receives no arguments and can return a promise which gets awaited.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `onDispose` is not a function.
- {{jsxref("ReferenceError")}}
  - : Thrown if the stack is already disposed.

## Examples

### Using defer()

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("DisposableStack")}}
- {{jsxref("DisposableStack.prototype.adopt()")}}
- {{jsxref("DisposableStack.prototype.use()")}}
