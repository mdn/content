---
title: String.prototype.toWellFormed()
slug: Web/JavaScript/Reference/Global_Objects/String/toWellFormed
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.toWellFormed
---

{{JSRef}}

The **`toWellFormed()`** method of {{jsxref("String")}} values returns a string where all [lone surrogates](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) of this string are replaced with the Unicode replacement character U+FFFD.

## Syntax

```js-nolint
toWellFormed()
```

### Return value

A new string that is a copy of this string, with all lone surrogates replaced with the Unicode replacement character U+FFFD. If `str` [is well formed](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/isWellFormed), a new string is still returned (essentially a copy of `str`).

## Description

Strings in JavaScript are UTF-16 encoded. UTF-16 encoding has the concept of _surrogate pairs_, which is introduced in detail in the [UTF-16 characters, Unicode code points, and grapheme clusters](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) section.

`toWellFormed()` iterates through the code units of this string, and replaces any lone surrogates with the [Unicode replacement character](<https://en.wikipedia.org/wiki/Specials_(Unicode_block)#Replacement_character>) U+FFFD `�`. This ensures that the returned string is well-formed and can be used in functions that expect well-formed strings, such as {{jsxref("encodeURI")}}. Compared to a custom implementation, `toWellFormed()` is more efficient, as engines can directly access the internal representation of strings.

When ill-formed strings are used in certain contexts, such as {{domxref("TextEncoder")}}, they are automatically converted to well-formed strings using the same replacement character. When lone surrogates are rendered, they are also rendered as the replacement character (a diamond with a question mark inside).

## Examples

### Using toWellFormed()

```js
const strings = [
  // Lone leading surrogate
  "ab\uD800",
  "ab\uD800c",
  // Lone trailing surrogate
  "\uDFFFab",
  "c\uDFFFab",
  // Well-formed
  "abc",
  "ab\uD83D\uDE04c",
];

for (const str of strings) {
  console.log(str.toWellFormed());
}
// Logs:
// "ab�"
// "ab�c"
// "�ab"
// "c�ab"
// "abc"
// "ab😄c"
```

### Avoiding errors in encodeURI()

{{jsxref("encodeURI")}} throws an error if the string passed is not well-formed. This can be avoided by using `toWellFormed()` to convert the string to a well-formed string first.

```js
const illFormed = "https://example.com/search?q=\uD800";

try {
  encodeURI(illFormed);
} catch (e) {
  console.log(e); // URIError: URI malformed
}

console.log(encodeURI(illFormed.toWellFormed())); // "https://example.com/search?q=%EF%BF%BD"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.toWellFormed` in `core-js`](https://github.com/zloirock/core-js#well-formed-unicode-strings)
- {{jsxref("String.prototype.isWellFormed()")}}
- {{jsxref("String.prototype.normalize()")}}
