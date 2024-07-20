---
title: "SyntaxError: raw bracket is not allowed in regular expression with unicode flag"
slug: Web/JavaScript/Reference/Errors/Regex_raw_bracket
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "raw bracket is not allowed in regular expression with unicode flag" occurs when a [Unicode-aware](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) regular expression pattern contains a raw bracket (`{`, `}`, `]`) that is not part of a [quantifier](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) or [character class](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class).

## Message

```plain
SyntaxError: Invalid regular expression: /{/u: Lone quantifier brackets (V8-based)
SyntaxError: raw bracket is not allowed in regular expression with unicode flag (Firefox)
SyntaxError: Invalid regular expression: incomplete {} quantifier for Unicode pattern (Safari)
SyntaxError: Invalid regular expression: unmatched ] or } bracket for Unicode pattern (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

In Unicode-unaware mode, `{`, `}`, and `]` that are not part of a quantifier or character class are treated as literal characters. This may hide errors in your code and is therefore deprecated and disallowed in Unicode-aware mode. You should either check whether you have invalid syntax or you should [escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) the characters to match them literally.

If `{` appears in a context that accepts a [quantitier](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier), it is treated as the start of a quantifier. If what follows it is not a valid quantifier, another syntax error, [incomplete quantifier](/en-US/docs/Web/JavaScript/Reference/Errors/Regex_incomplete_quantifier), is thrown.

## Examples

### Invalid cases

```js example-bad
/{{MDN_Macro}}/u;
/\[sic]/u;
```

### Valid cases

```js example-good
// All { and } need to be escaped
/\{\{MDN_Macro\}\}/u;
// The ] needs to be escaped
/\[sic\]/u;
```

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Character class: `[...]`, `[^...]`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Character escape: `\n`, `\u{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Quantifier: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
