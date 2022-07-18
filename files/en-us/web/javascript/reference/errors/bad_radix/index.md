---
title: 'RangeError: radix must be an integer'
slug: Web/JavaScript/Reference/Errors/Bad_radix
tags:
  - Error
  - Errors
  - JavaScript
  - RangeError
---
{{jsSidebar("Errors")}}

The JavaScript exception "radix must be an integer at least 2 and no greater than 36"
occurs when the optional `radix` parameter of the
{{jsxref("Number.prototype.toString()")}} or
the {{jsxref("BigInt.prototype.toString()")}} method was specified and is not between 2
and 36.

## Message

```
RangeError: toString() radix argument must be between 2 and 36 (V8-based & Safari)
RangeError: radix must be an integer at least 2 and no greater than 36 (Firefox)
```

## Error type

{{jsxref("RangeError")}}

## What went wrong?

The optional `radix` parameter of the
{{jsxref("Number.prototype.toString()")}} or
the {{jsxref("BigInt.prototype.toString()")}} method was specified. Its value must be an
integer (a number) between 2 and 36, specifying the base of the number system to be used
for representing numeric values. For example, the decimal (base 10) number 169 is
represented in hexadecimal (base 16) as A9.

Why is this parameter's value limited to 36? A radix that is larger than 10 uses
alphabetical characters as digits; therefore, the radix can't be larger than 36, since
the Latin alphabet (used by English and many other languages) only has 26 characters.

The most common radixes:

- 2 for [binary numbers](https://en.wikipedia.org/wiki/Binary_number),
- 8 for [octal numbers](https://en.wikipedia.org/wiki/Octal),
- 10 for [decimal numbers](https://en.wikipedia.org/wiki/Decimal),
- 16 for [hexadecimal numbers](https://en.wikipedia.org/wiki/Hexadecimal).

## Examples

### Invalid cases

```js example-bad
(42).toString(0);
(42).toString(1);
(42).toString(37);
(42).toString(150);
// You cannot use a string like this for formatting:
(12071989).toString('MM-dd-yyyy');
```

### Valid cases

```js example-good
(42).toString(2);     // "101010" (binary)
(13).toString(8);     // "15"     (octal)
(0x42).toString(10);  // "66"     (decimal)
(100000).toString(16) // "186a0"  (hexadecimal)
```

## See also

- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("BigInt.prototype.toString()")}}
