---
title: "SyntaxError: invalid regexp group"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_group
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "invalid regexp group" occurs when the sequence `(?` does not start a valid group syntax. Recognized group syntaxes that start with `(?` include:

- `(?:` for [non-capturing groups](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- `(?=` for [positive lookahead](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- `(?!` for negative lookahead
- `(?<=` for [positive lookbehind](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- `(?<!` for negative lookbehind
- `(?<` for [named capturing groups](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- `(?-i:`, `(?i:`, `(?m:`, `(?ims-:`, etc. for [modifiers](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)

`(?` followed by any other character would cause this error.

## Message

```plain
SyntaxError: Invalid regular expression: /(?1)/: Invalid group (V8-based)
SyntaxError: invalid regexp group (Firefox)
SyntaxError: Invalid regular expression: unrecognized character after (? (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

`?` is not an [atom](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#atoms), so it does not make sense to appear at the start of a [capturing group](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) (`?` is a [quantifier](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) and should be placed after an atom). Maybe you want to match the `?` character literally, in which case you should escape it with a backslash (`\?`). Maybe you remembered the regex syntax wrong, and you intend to use one of the recognized group syntaxes listed above. Maybe you are using a feature that is not supported by the current JavaScript engine.

## Examples

### Invalid cases

```js example-bad
/Hello(?|!)/;
// This is Perl syntax
/(?[\p{Thai}&\p{Digit}])/;
```

### Valid cases

```js example-good
/Hello(\?|!)/;
// This is JavaScript syntax for character set operations
/[\p{Thai}&&\p{Digit}]/v;
```

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Capturing group: `(...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Lookahead assertion: `(?=...)`, `(?!...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind assertion: `(?<=...)`, `(?<!...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Modifier: `(?ims-ims:...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
- [Named capturing group: `(?<name>...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Non-capturing group: `(?:...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
