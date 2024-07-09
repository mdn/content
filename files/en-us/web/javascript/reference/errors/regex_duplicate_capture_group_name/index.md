---
title: "SyntaxError: duplicate capture group name in regular expression"
slug: Web/JavaScript/Reference/Errors/Regex_duplicate_capture_group_name
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "duplicate capture group name in regular expression" occurs when a regular expression pattern contains two or more [named capture groups](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) with the same name, and these capture groups could be matched at the same time.

## Message

```plain
SyntaxError: Invalid regular expression: /(?<a>)(?<a>)/: Duplicate capture group name (V8-based)
SyntaxError: duplicate capture group name in regular expression (Firefox)
SyntaxError: Invalid regular expression: duplicate group specifier name (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

## Examples

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Named capturing group: `(?<name>...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
