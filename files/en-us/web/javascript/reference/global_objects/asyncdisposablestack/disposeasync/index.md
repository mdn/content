---
title: AsyncDisposableStack.prototype.disposeAsync()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/disposeAsync
page-type: javascript-instance-method
browser-compat: javascript.builtins.AsyncDisposableStack.disposeAsync
---

{{JSRef}}

The **`disposeAsync()`** method of {{jsxref("AsyncDisposableStack")}} instances disposes this stack by calling all disposers registered to it in reverse order of registration, awaiting for each one's completion before calling the next one. If the stack is already disposed, this method does nothing.

## Syntax

```js-nolint
disposeAsync()
```

### Parameters

None.

### Return value

A new {{jsxref("Promise")}} that resolves with `undefined` when all registered disposers have completed in sequence.

### Exceptions

`disposeAsync()` never synchronously throws an error. The returned promise may reject with one of the following errors:

- {{jsxref("SuppressedError")}}
  - : Thrown if multiple disposers in the stack threw an error. If only one error is thrown, it is rethrown as-is. Otherwise, for each additional error, a new {{jsxref("SuppressedError")}} is created, with the original error as the `suppressed` property, and the new error as the `error` property.

## Examples

### Disposing a stack

Here we push three disposers to the stack, using the {{jsxref("AsyncDisposableStack/use", "use()")}}, {{jsxref("AsyncDisposableStack/adopt", "adopt()")}}, and {{jsxref("AsyncDisposableStack/defer", "defer()")}} methods. When `disposeAsync()` is called, the disposers are called in reverse order of registration.

Note that usually you don't need to call `disposeAsync()` manually. Declare the stack with {{jsxref("Statements/await_using", "await using")}}, and its [`[Symbol.asyncDispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose) method will be automatically called when the stack goes out of scope.

```js
class Resource {
  #doDisposal() {
    // Imagine more meaningful disposal logic here
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }
  async dispose() {
    await this.#doDisposal();
    console.log("Resource disposed");
  }
  async [Symbol.asyncDispose]() {
    await this.#doDisposal();
    console.log("Resource disposed via Symbol.asyncDispose");
  }
}

async function doSomething() {
  const stack = new AsyncDisposableStack();
  const resource = stack.use(new Resource());
  const resource2 = stack.adopt(new Resource(), (resource) =>
    resource.dispose(),
  );
  stack.defer(() => console.log("Deferred disposer"));
  stack.disposeAsync();
  // Logs in order:
  // Deferred disposer
  // Resource disposed
  // Resource disposed via Symbol.dispose
}

doSomething();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.adopt()")}}
- {{jsxref("AsyncDisposableStack.prototype.defer()")}}
- {{jsxref("AsyncDisposableStack.prototype.use()")}}
- [`AsyncDisposableStack.prototype[Symbol.asyncDispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose)
