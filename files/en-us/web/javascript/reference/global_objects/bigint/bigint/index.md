---
title: BigInt() constructor
slug: Web/JavaScript/Reference/Global_Objects/BigInt/BigInt
page-type: javascript-constructor
browser-compat: javascript.builtins.BigInt.BigInt
---

{{JSRef}}

The **`BigInt()`** function returns primitive values of type BigInt.

## Syntax

```js-nolint
BigInt(value)
```

> **Note:** `BigInt()` can only be called without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to construct it with `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `value`
  - : The numeric value of the object being created. It may be a string, an integer, a boolean, or another `BigInt`.

### Return value

A {{jsxref("BigInt")}} value. Number values must be integers and are converted to BigInts. The boolean value `true` becomes `1n`, and `false` becomes `0n`. Strings are parsed as if they are source text for integer literals, which means they can have leading and trailing whitespaces and can be prefixed with `0b`, `0o`, or `0x`.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the parameter is a non-integral number.
- {{jsxref("TypeError")}}
  - : Thrown if at least one of these conditions is met:
    - The parameter cannot be converted to a primitive.
    - After conversion to a primitive, the result is {{jsxref("undefined")}}, {{jsxref("Operators/null", "null")}}, {{jsxref("symbol")}}.
- {{jsxref("SyntaxError")}}
  - : Thrown if the parameter is a string that cannot be parsed as a `BigInt`.

## Examples

### Using BigInt() to convert a number to a BigInt

`BigInt()` is the only case where a number can be converted to a BigInt without throwing, because it's very explicit. However, only integers are allowed.

```js
BigInt(123); // 123n
BigInt(123.3); // RangeError: The number 123.3 cannot be converted to a BigInt because it is not an integer
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
