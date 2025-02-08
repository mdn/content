---
title: AsyncIterator.prototype[Symbol.asyncDispose]()
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncDispose
page-type: javascript-instance-method
browser-compat: javascript.builtins.AsyncIterator.@@asyncDispose
---

{{JSRef}}

The **`[Symbol.asyncDispose]()`** method of {{jsxref("AsyncIterator")}} instances implements the _async disposable protocol_ and allows it to be disposed when used with {{jsxref("Statements/await_using", "await using")}}. It calls and awaits the `return()` method of `this`, if it exists.

## Syntax

```js-nolint
asyncIterator[Symbol.asyncDispose]()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Disposing an async iterator

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also
