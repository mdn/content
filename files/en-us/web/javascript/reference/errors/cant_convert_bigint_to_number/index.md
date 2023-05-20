---
title: "TypeError: can't convert BigInt to number"
slug: Web/JavaScript/Reference/Errors/Cant_convert_BigInt_to_number
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "can't convert BigInt to number" occurs when an arithmetic operation involves a mix of {{jsxref("BigInt")}} and {{jsxref("Number")}} values.

## Message

```
TypeError: Cannot mix BigInt and other types, use explicit conversions (V8-based)
TypeError: BigInts have no unsigned right shift, use >> instead (V8-based)
TypeError: can't convert BigInt to number (Firefox)
TypeError: Invalid mix of BigInt and other type in addition/multiplication/…. (Safari)
TypeError: BigInt does not support >>> operator (Safari)
```

## Error type

{{jsxref("TypeError")}}.

## What went wrong?

The two sides of an arithmetic operator must both be BigInts or both not. If an operation involves a mix of BigInts and numbers, it's ambiguous whether the result should be a BigInt or number, since there may be loss of precision in both cases.

The error can also happen if the [unsigned right shift operator (`>>>`)](/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) is used between two BigInts. In Firefox, the message is the same: "can't convert BigInt to number".

## Examples

### Mixing numbers and BigInts in operations

```js example-bad
const sum = 1n + 1;
// TypeError: can't convert BigInt to number
```

Instead, explicitly coerce one side to a BigInt or number.

```js example-good
const sum = 1n + BigInt(1);
const sum2 = Number(1n) + 1;
```

### Using unsigned right shift on BigInts

```js example-bad
const a = 4n >>> 2n;
// TypeError: can't convert BigInt to number
```

Use normal right shift instead.

```js example-good
const a = 4n >> 2n;
```

## See also

- [`BigInt`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
