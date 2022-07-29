---
title: 'RangeError: argument is not a valid code point'
slug: Web/JavaScript/Reference/Errors/Not_a_codepoint
tags:
  - Error
  - Errors
  - JavaScript
  - RangeError
---
{{jsSidebar("Errors")}}

The JavaScript exception "Invalid code point" occurs when {{jsxref("NaN")}} values,
negative Integers (-1), non-Integers (5.4), or values larger than 0x10FFFF (1114111) are
used with {{jsxref("String.fromCodePoint()")}}.

## Message

```
RangeError: Invalid code point -1 (V8-based)
RangeError: -1 is not a valid code point (Firefox)
RangeError: Arguments contain a value that is out of range of code points (Safari)
```

## Error type

{{jsxref("RangeError")}}

## What went wrong?

{{jsxref("String.fromCodePoint()")}} throws this error when passed {{jsxref("NaN")}}
values, negative Integers (-1), non-Integers (5.4), or values larger than 0x10FFFF
(1114111).

A [code point](https://en.wikipedia.org/wiki/Code_point) is a value in the
Unicode codespace; that is, the range of integers from `0` to
`0x10FFFF`.

## Examples

### Invalid cases

```js example-bad
String.fromCodePoint('_');      // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1);       // RangeError
String.fromCodePoint(3.14);     // RangeError
String.fromCodePoint(3e-2);     // RangeError
String.fromCodePoint(NaN);      // RangeError
```

### Valid cases

```js example-good
String.fromCodePoint(42);       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
String.fromCodePoint(194564);   // "\uD87E\uDC04"
String.fromCodePoint(0x1D306, 0x61, 0x1D307) // "\uD834\uDF06a\uD834\uDF07"
```

## See also

- {{jsxref("String.fromCodePoint()")}}
