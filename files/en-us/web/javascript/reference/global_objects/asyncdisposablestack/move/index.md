---
title: AsyncDisposableStack.prototype.move()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/move
page-type: javascript-instance-method
browser-compat: javascript.builtins.AsyncDisposableStack.move
---

{{JSRef}}

The **`move()`** method of {{jsxref("AsyncDisposableStack")}} instances creates a new `AsyncDisposableStack` instance that contains the same disposers as this stack, and then marks this stack as disposed (without calling any disposers).

## Syntax

```js-nolint
move()
```

### Parameters

None.

### Return value

A new {{jsxref("AsyncDisposableStack")}} instance.

### Exceptions

- {{jsxref("ReferenceError")}}
  - : Thrown if the stack is already disposed.

## Examples

### Claiming ownership of a stack

```js
async function consumeStack(stack) {
  await using newStack = stack.move(); // newStack now owns the disposers
  console.log(stack.disposed); // true
  console.log(newStack.disposed); // false
  // newStack is disposed here immediately before the function exits
}

const stack = new AsyncDisposableStack();
console.log(stack.disposed); // false
await consumeStack(stack);
console.log(stack.disposed); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.dispose()")}}
