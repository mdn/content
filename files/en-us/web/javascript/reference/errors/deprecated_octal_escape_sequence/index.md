---
title: "SyntaxError: octal escape sequences can't be used in untagged template literals or in strict mode code"
slug: Web/JavaScript/Reference/Errors/Deprecated_octal_escape_sequence
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "octal escape sequences can't be used in untagged template literals or in strict mode code" occurs when octal escape sequences are used in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) string literals or untagged template literals.

## Message

```plain
SyntaxError: Octal escape sequences are not allowed in strict mode. (V8-based)
SyntaxError: \8 and \9 are not allowed in strict mode. (V8-based)
SyntaxError: Octal escape sequences are not allowed in template strings. (V8-based)
SyntaxError: \8 and \9 are not allowed in template strings. (V8-based)
SyntaxError: octal escape sequences can't be used in untagged template literals or in strict mode code (Firefox)
SyntaxError: the escapes \8 and \9 can't be used in untagged template literals or in strict mode code (Firefox)
SyntaxError: The only valid numeric escape in strict mode is '\0' (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

The [string escape sequence](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) of the form `\` followed by any number of digits, except a single `0`, is deprecated. If you want to represent a character by its code point value, you should use the `\x` or `\u` escape sequence instead, such as `\x01` or `\u0001` instead of `\1`.

[Untagged template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals) are never allowed to contain octal escape sequences, whether in strict mode or not. However, _tagged_ template literals can contain any form of escape sequence, and will cause the template array received by the tag function to contain `undefined`.

## Examples

### Octal escape sequences

```js-nolint example-bad
"use strict";

"\251";

// SyntaxError: octal escape sequences can't be used in untagged template literals or in strict mode code
```

### Valid octal numbers

For octal escape sequences, you can use hexadecimal escape sequences instead:

```js example-good
"\xA9";
```

If you want to represent some source text literally without interpreting any escape sequence, use {{jsxref("String.raw")}}:

```js example-good
String.raw`\251`; // A string containing four characters
```

## See also

- [Lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences)
