---
title: "SyntaxError: incomplete quantifier in regular expression"
slug: Web/JavaScript/Reference/Errors/Regex_incomplete_quantifier
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "incomplete quantifier in regular expression" occurs when a regular expression pattern contains a `{`, but it does not start a valid [quantifier](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier).

## Message

```plain
SyntaxError: Invalid regular expression: /1{/u: Incomplete quantifier (V8-based)
SyntaxError: incomplete quantifier in regular expression (Firefox)
SyntaxError: Invalid regular expression: incomplete {} quantifier for Unicode pattern (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

## Examples

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Quantifier: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
