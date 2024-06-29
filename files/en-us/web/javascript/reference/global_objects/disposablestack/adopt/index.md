---
title: DisposableStack.prototype.adopt()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/adopt
page-type: javascript-instance-method
browser-compat: javascript.builtins.DisposableStack.adopt
---

{{JSRef}}

The **`adopt()`** method of {{jsxref("DisposableStack")}} instances registers a value that doesn't implement the disposable protocol to the stack by providing a custom disposer function.

## Syntax

```js-nolint
adopt(value, onDispose)
```

### Parameters

- `value`
  - : Any value to be registered to the stack.
- `onDispose`
  - : A function that will be called when the stack is disposed. The function receives `value` as its only argument.

### Return value

The same `value` that was passed in.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `onDispose` is not a function.
- {{jsxref("ReferenceError")}}
  - : Thrown if the stack is already disposed.

## Description

The primary purpose of `adopt()` is to register a value that doesn't implement the disposable protocol to the stack. If the value is already disposable, you can use {{jsxref("DisposableStack/use", "use()")}} instead, which automatically uses the value's `[Symbol.dispose]()` method as the disposer.

`adopt(value, onDispose)` is almost the same as `defer(() => onDispose(value))`, but it allows you to declare the resource and register it on the same line. This way, there's minimal chance of an error happening between the resource creation and registration, which will cause the resource to leak.

```js example-good
using stack = new DisposableStack();
const handle = stack.adopt(new FileHandle("file.txt"), (handle) =>
  handle.close(),
);
```

```js example-bad
using stack = new DisposableStack();
const handle = new FileHandle("file.txt");
// If someone adds code in between these lines and an error occurs,
// the handle will leak.
stack.defer(() => handle.close());
```

It also allows you to reuse the same disposer function for multiple resources of the same type.

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
