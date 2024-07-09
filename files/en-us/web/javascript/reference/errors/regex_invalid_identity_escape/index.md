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

## Examples

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Escape sequences](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences)
