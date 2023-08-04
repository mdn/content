---
title: "RangeError: BigInt division by zero"
slug: Web/JavaScript/Reference/Errors/BigInt_division_by_zero
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "BigInt division by zero" occurs when a {{jsxref("BigInt")}} is divided by `0n`.

## Message

```plain
RangeError: Division by zero (V8-based)
RangeError: BigInt division by zero (Firefox)
RangeError: 0 is an invalid divisor value. (Safari)
```

## Error type

{{jsxref("RangeError")}}.

## What went wrong?

The divisor of a [division](/en-US/docs/Web/JavaScript/Reference/Operators/Division) or [remainder](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder) operator is `0n`. In {{jsxref("Number")}} arithmetic, this produces [`Infinity`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity), but there's no "infinity value" in BigInts, so an error is issued. Check if the divisor is `0n` before doing the division.

## Examples

### Division by 0n

```js example-bad
const a = 1n;
const b = 0n;
const quotient = a / b;
// RangeError: BigInt division by zero
```

Instead, check if the divisor is `0n` first, and either issue an error with a better message, or fallback to a different value, like `Infinity` or `undefined`.

```js example-good
const a = 1n;
const b = 0n;
const quotient = b === 0n ? undefined : a / b;
```

## See also

- [`BigInt`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [Division](/en-US/docs/Web/JavaScript/Reference/Operators/Division)
- [Remainder](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
