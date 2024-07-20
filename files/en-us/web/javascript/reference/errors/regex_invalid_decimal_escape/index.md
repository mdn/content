---
title: "SyntaxError: invalid decimal escape in regular expression"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_decimal_escape
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "invalid decimal escape in regular expression" occurs when a legacy [octal escape sequence](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) is used in a [Unicode-aware](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) regular expression pattern.

## Message

```plain
SyntaxError: Invalid regular expression: /\00/u: Invalid decimal escape (V8-based)
SyntaxError: invalid decimal escape in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid octal escape for Unicode pattern (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

In a regular expression, `\0` followed by another digit is a _legacy octal escape sequence_. The same syntax is banned in template strings and strict-mode string literals. In regexes, this feature is disabled by the Unicode-aware modes (`u` and `v`). `\0` _not_ followed by another digit is a valid escape sequence that represents the null character (U+0000).

`\` followed by a non-zero digit is a [backreference](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Backreference), and is invalid in Unicode-aware mode if it doesn't refer to a capturing group; see [invalid identity escape](/en-US/docs/Web/JavaScript/Reference/Errors/Regex_invalid_identity_escape) for more information.

## Examples

### Invalid cases

```js example-bad
/\00/u;
/\01/u;
```

### Valid cases

```js example-good
// If you want to match NULL followed by a digit, use a character class
/[\0]0/u;
// If you want to match a character by its character value, use \x
/\x01/u;
```

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Escape sequences](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences)
- [Character escape: `\n`, `\u{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
