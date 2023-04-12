---
title: Symbol.prototype[@@toPrimitive]()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive
page-type: javascript-instance-method
browser-compat: javascript.builtins.Symbol.@@toPrimitive
---

{{JSRef}}

The **`[@@toPrimitive]()`** method converts a Symbol object to
a primitive value.

## Syntax

```js-nolint
Symbol()[Symbol.toPrimitive](hint)
```

### Return value

The primitive value of the specified {{jsxref("Symbol")}} object.

## Description

The `[@@toPrimitive]()` method of {{jsxref("Symbol")}} returns the primitive
value of a Symbol object as a Symbol data type. The `hint`
argument is not used.

JavaScript calls the `[@@toPrimitive]()` method to convert an object to a
primitive value. You rarely need to invoke the `[@@toPrimitive]()` method
yourself; JavaScript automatically invokes it when encountering an object where a
primitive value is expected.

## Examples

### Using @@toPrimitive

```js
const sym = Symbol("example");
sym === sym[Symbol.toPrimitive](); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Symbol.toPrimitive")}}
