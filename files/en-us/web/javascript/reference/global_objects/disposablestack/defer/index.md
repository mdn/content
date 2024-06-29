---
title: DisposableStack.prototype.defer()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/defer
page-type: javascript-instance-method
browser-compat: javascript.builtins.DisposableStack.defer
---

{{JSRef}}

The **`defer()`** method of {{jsxref("DisposableStack")}} instances takes a callback function to be called when the stack is disposed.

## Syntax

```js-nolint
defer(onDispose)
```

### Parameters

- `onDispose`
  - : A function that will be called when the stack is disposed.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `onDispose` is not a function.
- {{jsxref("ReferenceError")}}
  - : Thrown if the stack is already disposed.

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
