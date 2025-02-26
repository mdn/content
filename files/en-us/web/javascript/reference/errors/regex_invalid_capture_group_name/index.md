---
title: "SyntaxError: invalid capture group name in regular expression"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_capture_group_name
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "invalid capture group name in regular expression" occurs when a [named capturing group](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) or [named backreference](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) contains an invalid [identifier](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers).

## Message

```plain
SyntaxError: Invalid regular expression: /(?<1>)/: Invalid capture group name (V8-based)
SyntaxError: invalid capture group name in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid group specifier name (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

Each named capturing group must have a name that is a valid identifier. You cannot use arbitrary strings as the group identifier.

## Examples

### Invalid cases

```js example-bad
/(?<1>\d+) (?<2>\d+)/;
```

Or you might be building the regex dynamically:

```js example-bad
const tokenTypes = {
  "number literal": /\d+/,
  "string literal": /".+?"/,
  identifier: /[a-zA-Z_]\w*/,
};

const tokenPattern = new RegExp(
  Object.entries(tokenTypes)
    .map(([name, pattern]) => `(?<${name}>${pattern.source})`)
    .join("|"),
);
```

### Valid cases

```js example-good
/(?<group1>\d+) (?<group2>\d+)/;
```

If the regex is built dynamically, make sure the names are all valid identifiers. For example:

```js example-good
const tokenTypes = {
  numberLiteral: /\d+/,
  stringLiteral: /".+?"/,
  identifier: /[a-zA-Z_]\w*/,
};

const tokenPattern = new RegExp(
  Object.entries(tokenTypes)
    .map(([name, pattern]) => `(?<${name}>${pattern.source})`)
    .join("|"),
);
```

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Named capturing group: `(?<name>...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
