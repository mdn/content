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

A `{` character in a regular expression pattern starts a [quantifier](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier). A valid quantifier is in the form `{n}`, `{n,}`, or `{n,m}`, where `n` and `m` are non-negative integers and `m` is not less than `n`. If the `{` character does not start a valid quantifier, a `SyntaxError` occurs.

In Unicode-unaware mode, this syntax causes the `{` to become a literal character instead of generating an error, but this is a [deprecated syntax](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) and you should not rely on it.

## Examples

### Invalid cases

```js example-bad
/1{/u;
/1{a}/u;
/1{}/u;
/1{1,2,3}/u;
/1{1, 2}/u;
```

### Valid cases

```js example-good
/1{1}/u;
/1{1,}/u;
/1{1,2}/u;
```

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Quantifier: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
