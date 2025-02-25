---
title: String.fromCharCode()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCharCode
page-type: javascript-static-method
browser-compat: javascript.builtins.String.fromCharCode
---

{{JSRef}}

The **`String.fromCharCode()`** static method returns a string created from the specified sequence of UTF-16 code units.

{{InteractiveExample("JavaScript Demo: String.fromCharCode()", "shorter")}}

```js interactive-example
console.log(String.fromCharCode(189, 43, 190, 61));
// Expected output: "½+¾="
```

## Syntax

```js-nolint
String.fromCharCode()
String.fromCharCode(num1)
String.fromCharCode(num1, num2)
String.fromCharCode(num1, num2, /* …, */ numN)
```

### Parameters

- `num1`, …, `numN`
  - : A number between `0` and `65535` (`0xFFFF`) representing a UTF-16 code unit. Numbers greater than `0xFFFF` are truncated to the last 16 bits. No validity checks are performed.

### Return value

A string of length `N` consisting of the `N` specified UTF-16 code units.

## Description

Because `fromCharCode()` is a static method of `String`, you always use it as `String.fromCharCode()`, rather than as a method of a `String` value you created.

Unicode code points range from `0` to `1114111` (`0x10FFFF`). `charCodeAt()` always returns a value that is less than `65536`, because the higher code points are represented by _a pair_ of 16-bit surrogate pseudo-characters. Therefore, in order to produce a full character with value greater than `65535`, it is necessary to provide two code units (as if manipulating a string with two characters). For information on Unicode, see [UTF-16 characters, Unicode code points, and grapheme clusters](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

Because `fromCharCode()` only works with 16-bit values (same as the `\u` escape sequence), a surrogate pair is required in order to return a supplementary character. For example, both `String.fromCharCode(0xd83c, 0xdf03)` and `"\ud83c\udf03"` return code point `U+1F303` "Night with Stars". While there is a mathematical relationship between the supplementary code point value (e.g. `0x1f303`) and both surrogate values that represent it (e.g., `0xd83c` and `0xdf03`), it does require an extra step to either calculate or look up the surrogate pair values every time a supplementary code point is to be used. For this reason, it's more convenient to use {{jsxref("String.fromCodePoint()")}}, which allows for returning supplementary characters based on their actual code point value. For example, `String.fromCodePoint(0x1f303)` returns code point `U+1F303` "Night with Stars".

## Examples

### Using fromCharCode()

BMP characters, in UTF-16, use a single code unit:

```js
String.fromCharCode(65, 66, 67); // returns "ABC"
String.fromCharCode(0x2014); // returns "—"
String.fromCharCode(0x12014); // also returns "—"; the digit 1 is truncated and ignored
String.fromCharCode(8212); // also returns "—"; 8212 is the decimal form of 0x2014
```

Supplementary characters, in UTF-16, require two code units (i.e. a surrogate pair):

```js
String.fromCharCode(0xd83c, 0xdf03); // Code Point U+1F303 "Night with
String.fromCharCode(55356, 57091); // Stars" === "\uD83C\uDF03"

String.fromCharCode(0xd834, 0xdf06, 0x61, 0xd834, 0xdf07); // "\uD834\uDF06a\uD834\uDF07"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
