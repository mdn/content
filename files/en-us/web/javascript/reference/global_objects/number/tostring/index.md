---
title: Number.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toString
tags:
  - JavaScript
  - Method
  - Number
  - Prototype
browser-compat: javascript.builtins.Number.toString
---
{{JSRef}}

The **`toString()`** method returns a string representing the
specified {{jsxref("Number")}} object.

{{EmbedInteractiveExample("pages/js/number-tostring.html")}}

## Syntax

```js
toString()
toString(radix)
```

### Parameters

- `radix` {{optional_inline}}
  - : An integer in the range `2` through `36` specifying the base
    to use for representing numeric values.

### Return value

A string representing the specified {{jsxref("Number")}} object.

### Exceptions

- {{jsxref("RangeError")}}
  - : If `toString()` is given a `radix` less than
    `2` or greater than `36`, a {{jsxref("RangeError")}} is thrown.

## Description

The {{jsxref("Number")}} object overrides the `toString()` method of the
{{jsxref("Object")}}. For {{jsxref("Number")}} objects, the
`toString()` method returns a string representation of the object in the
specified radix.

The `toString()` method parses its first argument, and attempts to return a
string representation in the specified `radix` (base). For radices
above `10`, the letters of the alphabet indicate numerals greater than 9. For
example, for hexadecimal numbers (base 16), `a` through `f` are
used.

If the `radix` is not specified, the preferred radix is assumed
to be `10`.

If the `numObj` is negative, the sign is preserved. This is the
case even if the radix is `2`; the string returned is the positive binary
representation of the `numObj` preceded by a `-` sign,
**not** the two's complement of the `numObj`.

If the `numObj` is not a whole number, the 'dot' sign is used to
separate the decimal places.

## Examples

### Using toString

```js
const count = 10;

console.log(count.toString());    // displays '10'
console.log((17).toString());     // displays '17'
console.log((17.2).toString());   // displays '17.2'

const x = 6;

console.log(x.toString(2));       // displays '110'
console.log((254).toString(16));  // displays 'fe'

console.log((-10).toString(2));   // displays '-1010'
console.log((-0xff).toString(2)); // displays '-11111111'
```

### Converting radix of number strings

If you have a string representing a number in a non-decimal radix, you can use [`parseInt()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) and `toString()` to convert it to a different radix.

```js
const hex = "CAFEBABE";
const bin = parseInt(hex, 16).toString(2); // "11001010111111101011101010111110"
```

Beware of loss of precision: if the original number string is too large (larger than [`Number.MAX_SAFE_INTEGER`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER), for example), you should use a [`BigInt`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) instead. However, the `BigInt` constructor only has support for strings representing number literals (i.e. strings starting with `0b`, `0o`, `0x`). In case your original radix is not one of binary, octal, decimal, or hexadecimal, you may need to hand-write your radix converter, or use a library.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
