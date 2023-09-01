---
title: 'SyntaxError: "0"-prefixed octal literals and octal escape seq. are deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_octal
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)-only exception "0-prefixed octal literals and octal escape sequences are
deprecated; for octal literals use the "0o" prefix instead" occurs when deprecated octal
literals and octal escape sequences are used.

## Message

```plain
SyntaxError: Octal literals are not allowed in strict mode. (V8-based)
SyntaxError: "0"-prefixed octal literals are deprecated; use the "0o" prefix instead (Firefox)
SyntaxError: Decimal integer literals with a leading zero are forbidden in strict mode (Safari)

SyntaxError: Octal escape sequences are not allowed in strict mode. (V8-based)
SyntaxError: octal escape sequences can't be used in untagged template literals or in strict mode code (Firefox)
SyntaxError: The only valid numeric escape in strict mode is '\0' (Safari)
```

## Error type

{{jsxref("SyntaxError")}} in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) only.

## What went wrong?

Octal literals and octal escape sequences are deprecated and will throw a
{{jsxref("SyntaxError")}} in strict mode. The
standardized syntax uses a leading zero followed by a lowercase or uppercase Latin
letter "O" (`0o` or `0O`).

## Examples

### "0"-prefixed octal literals

```js-nolint example-bad
"use strict";

03;

// SyntaxError: "0"-prefixed octal literals are deprecated; use the "0o" prefix instead
```

### Octal escape sequences

```js-nolint example-bad
"use strict";

"\251";

// SyntaxError: octal escape sequences can't be used in untagged template literals or in strict mode code
```

### Valid octal numbers

Use a leading zero followed by the letter "o" or "O":

```js example-good
0o3;
```

For octal escape sequences, you can use hexadecimal escape sequences instead:

```js example-good
"\xA9";
```

## See also

- [Lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#octal)
