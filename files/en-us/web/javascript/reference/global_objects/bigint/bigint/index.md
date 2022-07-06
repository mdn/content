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
  - : Thrown if the parameter is a non-integral number.

- {{jsxref("TypeError")}}:
  - : Thrown if at least one of these conditions is met:
    - The parameter cannot be converted to a primitive.
    - After conversion to a primitive, the result is {{jsxref("undefined")}}, {{jsxref("Operators/null", "null")}}, {{jsxref("symbol")}}.

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
