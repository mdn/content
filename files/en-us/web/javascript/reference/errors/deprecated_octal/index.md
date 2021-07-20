---
title: 'SyntaxError: "0"-prefixed octal literals and octal escape seq. are deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_octal
tags:
  - Error
  - JavaScript
  - Strict Mode
  - SyntaxError
---
{{jsSidebar("Errors")}}

The JavaScript [strict
mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)-only exception "0-prefixed octal literals and octal escape sequences are
deprecated; for octal literals use the "0o" prefix instead" occurs when deprecated octal
literals and octal escape sequences are used.

## Message

```js
SyntaxError: Octal numeric literals and escape characters not allowed in strict mode (Edge)
SyntaxError:
"0"-prefixed octal literals and octal escape sequences are deprecated;
for octal literals use the "0o" prefix instead
```

## Error type

{{jsxref("SyntaxError")}} in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) only.

## What went wrong?

Octal literals and octal escape sequences are deprecated and will throw a
{{jsxref("SyntaxError")}} in strict mode. With ECMAScript 2015 and later, the
standardized syntax uses a leading zero followed by a lowercase or uppercase Latin
letter "O" (`0o` or `0O)`.

## Examples

### "0"-prefixed octal literals

```js example-bad
"use strict";

03;

// SyntaxError: "0"-prefixed octal literals and octal escape sequences
// are deprecated
```

### Octal escape sequences

```js example-bad
"use strict";

"\251";

// SyntaxError: "0"-prefixed octal literals and octal escape sequences
// are deprecated
```

### Valid octal numbers

Use a leading zero followed by the letter "o" or "O":

```js example-good
0o3;
```

For octal escape sequences, you can use hexadecimal escape sequences instead:

```js example-good
'\xA9';
```

## See also

- [Lexical
  grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#octal)
- [Warning: 08/09 is
  not a legal ECMA-262 octal constant](/en-US/docs/Web/JavaScript/Reference/Errors/Bad_octal)
