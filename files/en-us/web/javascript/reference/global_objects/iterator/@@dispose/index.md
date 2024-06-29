---
title: Iterator.prototype[Symbol.dispose]()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose
page-type: javascript-instance-method
browser-compat: javascript.builtins.Iterator.@@dispose
---

{{JSRef}}

The **`[Symbol.dispose]()`** method of {{jsxref("Iterator")}} instances implements the _disposable protocal_ and allows it to be disposed when used with {{jsxref("Statements/using", "using")}} or {{jsxref("Statements/await_using", "await using")}}. It calls the `return` method of `this`, if it exists.

## Syntax

```js-nolint
iterator[Symbol.dispose]()
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
