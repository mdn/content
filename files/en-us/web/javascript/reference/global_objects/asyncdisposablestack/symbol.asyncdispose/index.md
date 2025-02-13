---
title: AsyncDisposableStack.prototype[Symbol.asyncDispose]()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose
page-type: javascript-instance-method
browser-compat: javascript.builtins.AsyncDisposableStack.@@asyncDispose
---

{{JSRef}}

The **`[Symbol.asyncDispose]()`** method of {{jsxref("AsyncDisposableStack")}} instances implements the _async disposable protocol_ and allows it to be disposed when used with {{jsxref("Statements/await_using", "await using")}}. It is an alias for the {{jsxref("AsyncDisposableStack/disposeAsync", "disposeAsync()")}} method.

## Syntax

```js-nolint
asyncDisposableStack[Symbol.asyncDispose]()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Declaring a stack with `await using`

The `Symbol.asyncDispose` method is intended to be automatically called in a `await using` declaration.

```js
async function doSomething() {
  await using stack = new AsyncDisposableStack();
  const resource = stack.use(new Resource());
  resource.doSomething();
  // stack is disposed here immediately before the function exits
  // which causes the resource to be disposed
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.disposeAsync()")}}
