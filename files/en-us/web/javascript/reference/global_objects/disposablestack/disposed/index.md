---
title: DisposableStack.prototype.disposed
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/disposed
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.DisposableStack.disposed
---

{{JSRef}}

The **`disposed`** accessor property of {{jsxref("DisposableStack")}} instances returns a boolean indicating whether or not this `DisposableStack` has been disposed. A stack can be disposed in one of the following ways:

- Calling its {{jsxref("DisposableStack/dispose", "dispose()")}} method
- Calling its {{jsxref("DisposableStack/move", "move()")}} method
- Declaring it with {{jsxref("Statements/using", "using")}}, which automatically calls the [`[Symbol.dispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose) method when the stack goes out of scope.

## Examples

### Checking if a stack is disposed

```js
const stack = new DisposableStack();
console.log(stack.disposed); // false
stack.dispose();
console.log(stack.disposed); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
