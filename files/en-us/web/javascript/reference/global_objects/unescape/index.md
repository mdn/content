---
title: unescape()
slug: Web/JavaScript/Reference/Global_Objects/unescape
page-type: javascript-function
status:
  - deprecated
browser-compat: javascript.builtins.unescape
---

{{jsSidebar("Objects")}}{{Deprecated_Header}}

> **Note:** `unescape()` is a non-standard function implemented by browsers and was only standardized for cross-engine compatibility. It is not required to be implemented by all JavaScript engines and may not work everywhere. Use {{jsxref("decodeURIComponent()")}} or {{jsxref("decodeURI()")}} if possible.

The **`unescape()`** function computes a new string in which hexadecimal escape sequences are replaced with the characters that they represent. The escape sequences might be introduced by a function like {{jsxref("escape()")}}.

## Syntax

```js-nolint
unescape(str)
```

### Parameters

- `str`
  - : A string to be decoded.

### Return value

A new string in which certain characters have been unescaped.

## Description

`unescape()` is a function property of the global object.

The `unescape()` function replaces any escape sequence with the character that it represents. Specifically, it replaces any escape sequence of the form `%XX` or `%uXXXX` (where `X` represents one hexadecimal digit) with the character that has the hexadecimal value `XX`/`XXXX`. If the escape sequence is not a valid escape sequence (for example, if `%` is followed by one or no hex digit), it is left as-is.

> **Note:** This function was used mostly for [URL encoding](https://en.wikipedia.org/wiki/URL_encoding) and is partly based on the escape format in {{rfc(1738)}}. The `unescape()` function does _not_ evaluate [escape sequences](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) in string literals. You can replace `\xXX` with `%XX` and `\uXXXX` with `%uXXXX` to get a string that can be handled by `unescape()`.

## Examples

### Using unescape()

```js
unescape("abc123"); // "abc123"
unescape("%E4%F6%FC"); // "äöü"
unescape("%u0107"); // "ć"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `unescape` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("decodeURI")}}
- {{jsxref("decodeURIComponent")}}
- {{jsxref("escape")}}
