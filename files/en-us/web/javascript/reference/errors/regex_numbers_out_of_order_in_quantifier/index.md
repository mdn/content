---
title: "SyntaxError: numbers out of order in {} quantifier."
slug: Web/JavaScript/Reference/Errors/Regex_numbers_out_of_order_in_quantifier
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "numbers out of order in {} quantifier" occurs when a [quantifier](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) in a regular expression uses the `{n,m}` syntax but `m` is less than `n`.

## Message

```plain
SyntaxError: Invalid regular expression: /1{2,1}/: numbers out of order in {} quantifier (V8-based)
SyntaxError: numbers out of order in {} quantifier. (Firefox)
SyntaxError: Invalid regular expression: numbers out of order in {} quantifier (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

The `{n,m}` syntax in a regular expression is used to specify that the preceding item is to be matched at least `n` times, but not more than `m` times. If `m` is less than `n`, the quantifier is nonsensical because, for example, a character cannot appear at least 2 times but not more than 1 time. Therefore, an error is thrown.

## Examples

### Invalid examples

```js example-bad
/1{2,1}/;
```

### Valid examples

```js example-good
/1{1,2}/;
```

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Quantifier: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
