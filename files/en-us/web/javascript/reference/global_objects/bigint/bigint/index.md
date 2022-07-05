---
title: BigInt() constructor
slug: Web/JavaScript/Reference/Global_Objects/BigInt/BigInt
tags:
  - BigInt
  - Constructor
  - JavaScript
  - Reference
browser-compat: javascript.builtins.BigInt.BigInt
---
{{JSRef}}

The **`BigInt()`** constructor returns a value of type
**bigint**.

## Syntax

```js
BigInt(value);
```

### Parameters

- `value`
  - : The numeric value of the object being created. May be a string or an integer.

> **Note:** `BigInt()` is not used with the
> {{JSxRef("Operators/new", "new")}} operator.

### Exceptions

- {{jsxref("RangeError")}}:
  - : If the argument is a non-integral number.

- {{jsxref("TypeError")}}:
  - : If the argument cannot be converted to a primitive, or if after conversion to a primitive, the result is an object, {{jsxref("undefined")}}, {{jsxref("null")}}, {{jsxref("symbol")}}.

- {{jsxref("SyntaxError")}}:
  - : If the argument is a string that cannot be parsed as a `BigInt`.

## Examples

### Creating a new BigInt

```js
BigInt(123);
// 123n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("BigInt")}} class
