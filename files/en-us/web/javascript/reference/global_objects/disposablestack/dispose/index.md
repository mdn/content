---
title: DisposableStack.prototype.dispose()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/dispose
page-type: javascript-instance-method
browser-compat: javascript.builtins.DisposableStack.dispose
---

{{JSRef}}

The **`dispose()`** method of {{jsxref("DisposableStack")}} instances disposes this stack by calling all disposers registered to it in reverse order of registration. If the stack is already disposed, this method does nothing.

## Syntax

```js-nolint
dispose()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Disposing a stack

Here we push three disposers to the stack, using the {{jsxref("DisposableStack/use", "use()")}}, {{jsxref("DisposableStack/adopt", "adopt()")}}, and {{jsxref("DisposableStack/defer", "defer()")}} methods. When `dispose()` is called, the disposers are called in reverse order of registration.

Note that usually you don't need to call `dispose()` manually. Declare the stack with {{jsxref("Statements/using", "using")}}, and its [`[Symbol.dispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose) method will be automatically called when the stack goes out of scope.

```js
class Resource {
  dispose() {
    console.log("Resource disposed");
  }
  [Symbol.dispose]() {
    console.log("Resource disposed via Symbol.dispose");
  }
}

function doSomething() {
  const stack = new DisposableStack();
  const resource = stack.use(new Resource());
  const resource2 = stack.adopt(new Resource(), (resource) =>
    resource.dispose(),
  );
  stack.defer(() => console.log("Deferred disposer"));
  stack.dispose();
  // Logs in order:
  // Deferred disposer
  // Resource disposed
  // Resource disposed via Symbol.dispose
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
- {{jsxref("DisposableStack.prototype.defer()")}}
- {{jsxref("DisposableStack.prototype.use()")}}
- [`DisposableStack.prototype[Symbol.dispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose)
