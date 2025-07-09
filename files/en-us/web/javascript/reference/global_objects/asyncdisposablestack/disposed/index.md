---
title: AsyncDisposableStack.prototype.disposed
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/disposed
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.AsyncDisposableStack.disposed
---

{{JSRef}}

The **`disposed`** accessor property of {{jsxref("AsyncDisposableStack")}} instances returns a boolean indicating whether or not this `AsyncDisposableStack` has been disposed. A stack can be disposed in one of the following ways:

- Calling its {{jsxref("AsyncDisposableStack/dispose", "dispose()")}} method
- Calling its {{jsxref("AsyncDisposableStack/move", "move()")}} method
- Declaring it with {{jsxref("Statements/await_using", "await using")}}, which automatically calls the [`[Symbol.asyncDispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose) method when the stack goes out of scope.

## Examples

### Checking if a stack is disposed

```js
const disposer = new AsyncDisposableStack();
console.log(disposer.disposed); // false
await disposer.disposeAsync();
console.log(disposer.disposed); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
