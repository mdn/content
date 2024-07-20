---
title: "SyntaxError: invalid unicode escape in regular expression"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_unicode_escape
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "invalid unicode escape in regular expression" occurs when the `\c` and `\u` [character escapes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) are not followed by valid characters.

## Message

```plain
SyntaxError: Invalid regular expression: /\u{123456}/u: Invalid Unicode escape (V8-based)
SyntaxError: invalid unicode escape in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid Unicode code point \u{} escape (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

In [Unicode-aware mode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) mode, the `\c` [escape sequence](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) must be followed by a letter from `A` to `Z` or `a` to `z`, and the `\u` escape sequence must either be followed by 4 hexadecimal digits, or 1 to 6 hexadecimal digits enclosed in curly braces (`{}`). Furthermore, when using the `\u{xxx}` escape sequence, the digits must represent a valid Unicode code point, which means its value cannot exceed `10FFFF`.

## Examples

### Invalid cases

```js example-bad
/\u{123456}/u; // Unicode code point is too large
/\u65/u; // Not enough digits
/\c1/u; // Not a letter
```

### Valid cases

```js example-good
/\u0065/u; // Lowercase "e"
/\u{1F600}/u; // Grinning face emoji
/\cA/u; // U+0001 (Start of Heading)
```

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Character escape: `\n`, `\u{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
