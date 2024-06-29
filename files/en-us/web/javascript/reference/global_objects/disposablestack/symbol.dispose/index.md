---
title: DisposableStack.prototype[Symbol.dispose]()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose
page-type: javascript-instance-method
browser-compat: javascript.builtins.DisposableStack.@@dispose
---

{{JSRef}}

The **`[Symbol.dispose]()`** method of {{jsxref("DisposableStack")}} instances implements the _disposable protocal_ and allows it to be disposed when used with {{jsxref("Statements/using", "using")}} or {{jsxref("Statements/await_using", "await using")}}. It is an alias for the {{jsxref("DisposableStack/dispose", "dispose()")}} method.

## Syntax

```js-nolint
disposableStack[Symbol.dispose]()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Disposing an iterator

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
