---
title: DisposableStack() constructor
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/DisposableStack
page-type: javascript-constructor
browser-compat: javascript.builtins.DisposableStack.DisposableStack
---

{{JSRef}}

The **`DisposableStack()`** constructor creates {{jsxref("DisposableStack")}} objects.

## Syntax

```js-nolint
new DisposableStack()
```

> [!NOTE]
> `DisposableStack()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

None.

### Return value

A new `DisposableStack` object.

## Examples

### Creating an DisposableStack

```js
const disposer = new DisposableStack();
disposer.defer(() => console.log("Disposed!"));
disposer.dispose();
// Logs: Disposed!
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
