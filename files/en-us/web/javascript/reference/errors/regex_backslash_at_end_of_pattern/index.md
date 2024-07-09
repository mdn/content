---
title: "SyntaxError: \\ at end of pattern"
slug: Web/JavaScript/Reference/Errors/Regex_backslash_at_end_of_pattern
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "\ at end of pattern" occurs when a regular expression pattern ends with an unescaped backslash (`\`). In a regex literal, the backslash would cause the closing slash `/` to be a literal character, so this can only appear when using the {{jsxref("RegExp/RegExp", "RegExp()")}} constructor.

## Message

```plain
SyntaxError: Invalid regular expression: /\/: \ at end of pattern (V8-based)
SyntaxError: \ at end of pattern (Firefox)
SyntaxError: Invalid regular expression: \ at end of pattern (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

## Examples

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Escape sequences](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences)
