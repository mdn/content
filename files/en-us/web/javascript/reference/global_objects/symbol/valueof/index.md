---
title: Symbol.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/valueOf
page-type: javascript-instance-method
browser-compat: javascript.builtins.Symbol.valueOf
---

{{JSRef}}

The **`valueOf()`** method of {{jsxref("Symbol")}} values returns this symbol value.

{{EmbedInteractiveExample("pages/js/symbol-prototype-valueof.html")}}

## Syntax

```js-nolint
valueOf()
```

### Return value

The primitive value of the specified {{jsxref("Symbol")}} object.

## Description

The `valueOf()` method of {{jsxref("Symbol")}} returns the primitive value of a Symbol object as a Symbol data type.

JavaScript calls the `valueOf()` method to convert an object to a primitive value. You rarely need to invoke the `valueOf()` method yourself; JavaScript automatically invokes it when encountering an object where a primitive value is expected.

## Examples

### Using valueOf()

```js
const sym = Symbol("example");
sym === sym.valueOf(); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.valueOf()")}}
