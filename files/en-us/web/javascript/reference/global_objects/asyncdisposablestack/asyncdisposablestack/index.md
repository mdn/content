---
title: AsyncDisposableStack() constructor
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/AsyncDisposableStack
page-type: javascript-constructor
browser-compat: javascript.builtins.AsyncDisposableStack.AsyncDisposableStack
---

{{JSRef}}

The **`AsyncDisposableStack()`** constructor creates {{jsxref("AsyncDisposableStack")}} objects.

## Syntax

```js-nolint
new AsyncDisposableStack()
```

> **Note:** `AsyncDisposableStack()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

None.

### Return value

A new `AsyncDisposableStack` object.

## Examples

### Creating an AsyncDisposableStack

```js
const stack = new AsyncDisposableStack();
stack.defer(() => console.log("Disposed!"));
await stack.disposeAsync();
// Logs: Disposed!
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
