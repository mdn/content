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

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
