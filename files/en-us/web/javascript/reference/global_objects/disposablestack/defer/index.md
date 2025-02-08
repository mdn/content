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
  - : A function that will be called when the stack is disposed. The function receives no arguments.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `onDispose` is not a function.
- {{jsxref("ReferenceError")}}
  - : Thrown if the stack is already disposed.

## Description

The primary purpose of `defer()` is to register a cleanup callback that's not specific to the disposal of a particular resource. If the callback is specific to a resource, you should use {{jsxref("DisposableStack/use", "use()")}} or {{jsxref("DisposableStack/adopt", "adopt()")}} instead. You can also use `defer` when the resource is not claimed within your code:

```js
function consumeResource(someResource) {
  using stack = new DisposableStack();
  stack.defer(() => someResource.dispose());
  // Do something with someResource
}
```

## Examples

### Using defer()

This function sets a simple lock to prevent multiple async operations from running at the same time. The lock is released when the function completes.

```js
let isLocked = false;

async function requestWithLock(url, options) {
  if (isLocked) {
    return undefined;
  }
  using stack = new DisposableStack();
  isLocked = true;
  stack.defer(() => (isLocked = false));
  return fetch(url, options);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("DisposableStack")}}
- {{jsxref("DisposableStack.prototype.adopt()")}}
- {{jsxref("DisposableStack.prototype.use()")}}
