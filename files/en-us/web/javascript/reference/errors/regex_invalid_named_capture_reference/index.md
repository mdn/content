---
title: "SyntaxError: invalid named capture reference in regular expression"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_named_capture_reference
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "invalid named capture reference in regular expression" occurs when a regular expression pattern contains a [named backreference](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) that does not refer to a [named capture group](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) before it. The similar error message "invalid named reference in regular expression" is thrown when the sequence `\k` is encountered but is not followed by `<`.

## Message

```plain
SyntaxError: Invalid regular expression: /\k<x>/u: Invalid named capture referenced (V8-based)
SyntaxError: invalid named capture reference in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid \k<> named backreference (Safari)

SyntaxError: Invalid regular expression: /\k/u: Invalid named reference (V8-based)
SyntaxError: invalid named reference in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid escaped character for Unicode pattern (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

## Examples

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Named backreference: `\k<name>`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Named capturing group: `(?<name>...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
