---
title: "SyntaxError: nothing to repeat"
slug: Web/JavaScript/Reference/Errors/Regex_nothing_to_repeat
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "nothing to repeat" or "invalid quantifier in regular expression" occurs when a [quantifier](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) in a regular expression is applied to nothing or applied to an [assertion](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#assertions).

## Message

```plain
SyntaxError: Invalid regular expression: /\b+/: Nothing to repeat (V8-based)
SyntaxError: Invalid regular expression: /(?=)+/u: Invalid quantifier (V8-based)
SyntaxError: nothing to repeat (Firefox)
SyntaxError: invalid quantifier in regular expression (Firefox)
SyntaxError: Invalid regular expression: nothing to repeat (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

[Quantifiers](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) are used to specify how many times a character or group of characters can appear in a regular expression. For example, `a{3}` matches the character `a` exactly three times. Therefore, if the thing preceding the quantifier is not something that matches characters, the quantifier is invalid. For example: quantifiers at the start of a [capturing group](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group), at the start of a [disjunction alternative](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction), etc., cannot repeat anything. [Assertions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#assertions) don't consume characters, so it also doesn't make sense to repeat them.

In [Unicode-unaware mode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode), there's a deprecated syntax that allows the [lookahead assertions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) to be quantified. This is a deprecated syntax and you should not rely on it.

## Examples

### Invalid cases

```js example-bad
/\b+/; // \b is a word boundary assertion, it doesn't consume characters
/(*hello*)/;
```

### Valid cases

```js example-good
/b+/; // b is a character, it can be repeated
/(\*hello\*)/; // Escape the asterisks to match them literally
```

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Quantifier: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
