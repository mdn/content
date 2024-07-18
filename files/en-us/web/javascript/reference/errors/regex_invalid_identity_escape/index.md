---
title: "SyntaxError: invalid identity escape in regular expression"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_identity_escape
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "invalid identity escape in regular expression" occurs when a [Unicode-aware](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) regular expression pattern contains an [escape sequence](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) that does not represent a recognized escape sequence.

## Message

```plain
SyntaxError: Invalid regular expression: /\q/u: Invalid escape (V8-based)
SyntaxError: invalid identity escape in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid escaped character for Unicode pattern (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

In Unicode-unaware mode, `\` could be used to escape any character, including those without a defined meaning. In these cases, the escaped character represents itself. For example, `\q` would match the character `q`. This severely limits the ability to add new escape sequences in the future, so in Unicode-aware mode, only recognized escape sequences are allowed. Do not add `\` redundantly.

This error is also thrown when the `\x` [character escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) is not followed by two hexadecimal digits.

For an exhaustive list of available escape sequences, see the [regular expressions reference](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences). For a table of which characters can appear literally escaped or unescaped in each context, see [literal characters](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character).

## Examples

### Invalid cases

```js example-bad
/[\f\v\n\t\ ]/u;
```

### Valid cases

```js example-good
// There's no need to escape the space
/[\f\v\n\t ]/u;
```

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Escape sequences](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences)
- [Character escape: `\n`, `\u{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Literal character: `a`, `b`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
