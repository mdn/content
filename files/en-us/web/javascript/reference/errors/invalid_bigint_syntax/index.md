---
title: 'SyntaxError: invalid BigInt syntax'
slug: Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
---
{{jsSidebar("Errors")}}

The JavaScript exception "invalid BigInt syntax" occurs when a string value is being coerced to a {{jsxref("BigInt")}} but it failed to be parsed as an integer.

## Message

```
SyntaxError: Cannot convert x to a BigInt (V8-based)
SyntaxError: invalid BigInt syntax (Firefox)
SyntaxError: Failed to parse String to BigInt (Safari)
```

## Error type

{{jsxref("SyntaxError")}}.

## What went wrong?

When using the [`BigInt()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) function to convert a string to a BigInt, the string will be parsed in the same way as source code, and the resulting value must be an integer value.

## Examples

### Invalid cases

```js example-bad
const a = BigInt("1.5");
const b = BigInt("1n");
const c = BigInt.asIntN(4, "8n");
// SyntaxError: invalid BigInt syntax
```

### Valid cases

```js example-good
const a = BigInt("1");
const b = BigInt("  1   ");
const c = BigInt.asIntN(4, "8");
```

## See also

- [`BigInt`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
