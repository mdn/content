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
  - : The numeric value of the object being created. It may be a string, an integer, a boolean, or another `BigInt`.

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
  - : Thrown if the parameter is a string that cannot be parsed as a `BigInt`.

## Description

The `BigInt` constructor converts its input to a BigInt value. Number values must be integers. `true` becomes `1n`, and `false` becomes `0n`. Strings are parsed as if they are source text for integer literals, which means they can have leading and trailing whitespaces, and can be prefixed with `0b`, `0o`, or `0x`.

## Examples

### Creating a new BigInt

```js
BigInt(123);
// 123n
```

### Using string values

```js
BigInt("123"); // 123n
BigInt("0b10101"); // 4161n, which is 10101 in binary
BigInt("0o123"); // 83n, which is 123 in octal
BigInt("0x123"); // 291n, which is 123 in hexadecimal
BigInt("  123  "); // 123n, leading and trailing whitespaces are allowed
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("BigInt")}} class
