---
title: String.prototype.charCodeAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
tags:
  - JavaScript
  - Method
  - Reference
  - String
  - Unicode
browser-compat: javascript.builtins.String.charCodeAt
---
{{JSRef}}

The **`charCodeAt()`** method returns
an integer between `0` and `65535` representing the UTF-16 code
unit at the given index.

{{EmbedInteractiveExample("pages/js/string-charcodeat.html", "shorter")}}

The UTF-16 code unit matches the Unicode code point for code points which can be
represented in a single UTF-16 code unit. If the Unicode code point cannot be
represented in a single UTF-16 code unit (because its value is greater than
`0xFFFF`) then the code unit returned will be _the first part of a
surrogate pair_ for the code point. If you want the entire code point value, use
{{jsxref("Global_Objects/String/codePointAt", "codePointAt()")}}.

## Syntax

```js
charCodeAt(index)
```

### Parameters

- `index`
  - : An integer greater than or equal to `0` and less than the
    `length` of the string. If `index` is not a number,
    it defaults to `0`.

### Return value

A number representing the UTF-16 code unit value of the character at the given
`index`. If `index` is out of range,
`charCodeAt()` returns {{jsxref("Global_Objects/NaN", "NaN")}}.

## Description

Unicode code points range from `0` to `1114111`
(`0x10FFFF`). The first 128 Unicode code points are a direct match of the
ASCII character encoding. (For information on Unicode, see the [JavaScript Guide](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#unicode).)

> **Note:** `charCodeAt()` will always return a value that is
> less than `65536`. This is because the higher code points are represented
> by _a pair_ of (lower valued) "surrogate" pseudo-characters which are used to
> comprise the real character.
>
> Because of this, in order to examine (or reproduce) the full character for individual
> character values of `65536` or greater, for such characters, it is
> necessary to retrieve not only `charCodeAt(i)`, but also
> `charCodeAt(i+1)` (as if manipulating a string with two
> letters), or to use `codePointAt(i)` instead. See examples 2 and
> 3 (below).

`charCodeAt()` returns {{jsxref("Global_Objects/NaN", "NaN")}} if the given
index is less than `0`, or if it is equal to or greater than the
`length` of the string.

Backward compatibility: In historic versions (like JavaScript 1.2) the
`charCodeAt()` method returns a number indicating the ISO-Latin-1 codeset
value of the character at the given index. The ISO-Latin-1 codeset ranges from
`0` to `255`. The first `0` to `127` are a
direct match of the ASCII character set.

## Examples

### Using charCodeAt()

The following example returns `65`, the Unicode value for A.

```js
'ABC'.charCodeAt(0)  // returns 65
```

### Fixing charCodeAt() to handle non-Basic-Multilingual-Plane characters if their presence earlier in the string is unknown

This version might be used in for loops and the like when it is unknown whether non-BMP
characters exist before the specified index position.

```js
function fixedCharCodeAt(str, idx) {
  // ex. fixedCharCodeAt('\uD800\uDC00', 0); // 65536
  // ex. fixedCharCodeAt('\uD800\uDC00', 1); // false
  idx = idx || 0;
  const code = str.charCodeAt(idx);
  let hi, low;

  // High surrogate (could change last hex to 0xDB7F
  // to treat high private surrogates
  // as single characters)
  if (0xD800 <= code && code <= 0xDBFF) {
    hi = code;
    low = str.charCodeAt(idx + 1);
    if (isNaN(low)) {
      throw 'High surrogate not followed by ' +
        'low surrogate in fixedCharCodeAt()';
    }
    return (
      (hi - 0xD800) * 0x400) +
      (low - 0xDC00) + 0x10000;
  }
  if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
    // We return false to allow loops to skip
    // this iteration since should have already handled
    // high surrogate above in the previous iteration
    return false;
    // hi = str.charCodeAt(idx - 1);
    // low = code;
    // return ((hi - 0xD800) * 0x400) +
    //   (low - 0xDC00) + 0x10000;
  }
  return code;
}
```

### Fixing charCodeAt() to handle non-Basic-Multilingual-Plane characters if their presence earlier in the string is known

```js
function knownCharCodeAt(str, idx) {
  str += '';
  const end = str.length;

  const surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  while ((surrogatePairs.exec(str)) !== null) {
    const li = surrogatePairs.lastIndex;
    if (li - 2 < idx) {
      idx++;
    } else {
      break;
    }
  }

  if (idx >= end || idx < 0) {
    return NaN;
  }

  const code = str.charCodeAt(idx);

  if (0xD800 <= code && code <= 0xDBFF) {
    const hi = code;
    const low = str.charCodeAt(idx + 1);
    // Go one further, since one of the "characters"
    // is part of a surrogate pair
    return ((hi - 0xD800) * 0x400) +
      (low - 0xDC00) + 0x10000;
  }
  return code;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.codePointAt()")}}
