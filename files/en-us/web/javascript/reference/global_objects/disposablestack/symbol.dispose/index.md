---
title: DisposableStack.prototype[Symbol.dispose]()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose
page-type: javascript-instance-method
browser-compat: javascript.builtins.DisposableStack.@@dispose
sidebar: jsref
---

The **`[Symbol.dispose]()`** method of {{jsxref("DisposableStack")}} instances implements the _disposable protocol_ and allows it to be disposed when used with {{jsxref("Statements/using", "using")}} or {{jsxref("Statements/await_using", "await using")}}. It is an alias for the {{jsxref("DisposableStack/dispose", "dispose()")}} method.

## Syntax

```js-nolint
disposableStack[Symbol.dispose]()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Declaring a stack with `using`

The `Symbol.dispose` method is intended to be automatically called in a `using` declaration.

```js
{
  using disposer = new DisposableStack();
  const resource = disposer.use(new Resource());
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
- {{jsxref("DisposableStack")}}
- {{jsxref("DisposableStack.prototype.dispose()")}}
