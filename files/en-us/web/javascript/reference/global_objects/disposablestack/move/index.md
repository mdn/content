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

### Claiming ownership of a stack

```js
function consumeStack(stack) {
  using newStack = stack.move(); // newStack now owns the disposers
  console.log(stack.disposed); // true
  console.log(newStack.disposed); // false
  // newStack is disposed here immediately before the function exits
}

const stack = new DisposableStack();
console.log(stack.disposed); // false
consumeStack(stack);
console.log(stack.disposed); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("DisposableStack")}}
- {{jsxref("DisposableStack.prototype.dispose()")}}
