---
title: 'SyntaxError: "0"-prefixed octal literals are deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_octal_literal
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)-only exception "0-prefixed octal literals are deprecated; use the "0o" prefix instead" occurs when deprecated octal literals (`0` followed by digits) are used.

## Message

```plain
SyntaxError: Octal literals are not allowed in strict mode. (V8-based)
SyntaxError: Decimals with leading zeros are not allowed in strict mode. (V8-based)
SyntaxError: Unexpected number (V8-based)
SyntaxError: "0"-prefixed octal literals are deprecated; use the "0o" prefix instead (Firefox)
SyntaxError: Decimal integer literals with a leading zero are forbidden in strict mode (Safari)
```

## Error type

{{jsxref("SyntaxError")}} in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) only.

## What went wrong?

Octal literals are deprecated. When you prefix a decimal integer with `0`, you actually change it to an octal literal, which may be surprising. The standardized syntax uses a leading zero followed by a lowercase or uppercase Latin letter "O" (`0o` or `0O`).

Leading zeros are always forbidden, even when the literal is not valid octal literal syntax (such as when the literal contains the digits `8` or `9`, or it has a decimal point). A number literal may only start with `0` if that 0 is its units place.

## Examples

### "0"-prefixed octal literals

```js-nolint example-bad
"use strict";

03;

// SyntaxError: "0"-prefixed octal literals are deprecated; use the "0o" prefix instead
```

### Valid octal numbers

Use a leading zero followed by the letter "o" or "O":

```js example-good
0o3;
```

## See also

- [Lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#octal)
