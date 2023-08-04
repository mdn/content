---
title: String.fromCodePoint()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
page-type: javascript-static-method
browser-compat: javascript.builtins.String.fromCodePoint
---

{{JSRef}}

The **`String.fromCodePoint()`** static method returns a string created from the specified sequence of code points.

{{EmbedInteractiveExample("pages/js/string-fromcodepoint.html","shorter")}}

## Syntax

```js-nolint
String.fromCodePoint(num1)
String.fromCodePoint(num1, num2)
String.fromCodePoint(num1, num2, /* …, */ numN)
```

### Parameters

- `numN`
  - : An integer between `0` and `0x10FFFF` (inclusive) representing a Unicode code point.

### Return value

A string created by using the specified sequence of code points.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if `numN` is not an integer, is less than `0`, or is greater than `0x10FFFF` after being converted to a number.

## Description

Because `fromCodePoint()` is a static method of `String`, you always use it as `String.fromCodePoint()`, rather than as a method of a `String` value you created.

Unicode code points range from `0` to `1114111` (`0x10FFFF`). In UTF-16, each string index is a code unit with value `0` – `65535`. Higher code points are represented by _a pair_ of 16-bit surrogate pseudo-characters. Therefore, `fromCodePoint()` may return a string whose [`length`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) (in UTF-16 code units) is larger than the number of arguments passed. For information on Unicode, see [UTF-16 characters, Unicode code points, and grapheme clusters](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

## Examples

### Using fromCodePoint()

Valid input:

```js
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // "\u0404" === "Є"
String.fromCodePoint(0x2f804); // "\uD87E\uDC04"
String.fromCodePoint(194564); // "\uD87E\uDC04"
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // "\uD834\uDF06a\uD834\uDF07"
```

Invalid input:

```js
String.fromCodePoint("_"); // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1); // RangeError
String.fromCodePoint(3.14); // RangeError
String.fromCodePoint(3e-2); // RangeError
String.fromCodePoint(NaN); // RangeError
```

### Compared to fromCharCode()

{{jsxref("String.fromCharCode()")}} cannot return supplementary characters (i.e. code points `0x010000` – `0x10FFFF`) by specifying their code point. Instead, it requires the UTF-16 surrogate pair in order to return a supplementary character:

```js
String.fromCharCode(0xd83c, 0xdf03); // Code Point U+1F303 "Night with
String.fromCharCode(55356, 57091); // Stars" === "\uD83C\uDF03"
```

`String.fromCodePoint()`, on the other hand, can return 4-byte supplementary characters, as well as the more common 2-byte BMP characters, by specifying their code point (which is equivalent to the UTF-32 code unit):

```js
String.fromCodePoint(0x1f303); // or 127747 in decimal
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.fromCodePoint` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
