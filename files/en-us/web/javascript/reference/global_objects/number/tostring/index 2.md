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
{{jsxref("Object")}} object. (It does _not_ inherit
{{jsxref("Object.prototype.toString()")}}). For {{jsxref( "Number")}} objects, the
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
let count = 10

console.log(count.toString())    // displays '10'
console.log((17).toString())     // displays '17'
console.log((17.2).toString())   // displays '17.2'

let x = 6

console.log(x.toString(2))       // displays '110'
console.log((254).toString(16))  // displays 'fe'

console.log((-10).toString(2))   // displays '-1010'
console.log((-0xff).toString(2)) // displays '-11111111'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
