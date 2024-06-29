---
title: DisposableStack.prototype.move()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/move
page-type: javascript-instance-method
browser-compat: javascript.builtins.DisposableStack.move
---

{{JSRef}}

The **`move()`** method of {{jsxref("DisposableStack")}} instances creates a new `DisposableStack` instance that contains the same disposers as this stack, and then marks this stack as disposed (without calling any disposers).

## Syntax

```js-nolint
move()
```

### Parameters

None.

### Return value

A new {{jsxref("DisposableStack")}} instance.

### Exceptions

- {{jsxref("ReferenceError")}}
  - : Thrown if the stack is already disposed.

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
