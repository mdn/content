---
title: 'RangeError: x can''t be converted to BigInt because it isn''t an integer'
slug: Web/JavaScript/Reference/Errors/Cant_be_converted_to_BigInt_because_it_isnt_an_integer
tags:
  - Error
  - Errors
  - JavaScript
  - RangeError
---
{{jsSidebar("Errors")}}

The JavaScript exception "x can't be converted to BigInt because it isn't an integer" occurs when the [`BigInt()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) function is used on a number that isn't an integer.

## Message

```
RangeError: The number 1.5 cannot be converted to a BigInt because it is not an integer (V8-based & Firefox)
RangeError: Not an integer (Safari)
```

## Error type

{{jsxref("RangeError")}}.

## What went wrong?

When using the [`BigInt()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) function to convert a number to a BigInt, the number must be an integer (such that [`Number.isInteger`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger) returns true).

## Examples

### Invalid cases

```js example-bad
const a = BigInt(1.5);
// RangeError: The number 1.5 cannot be converted to a BigInt because it is not an integer
const b = BigInt(NaN);
// RangeError: NaN cannot be converted to a BigInt because it is not an integer
```

### Valid cases

```js example-good
const a = BigInt(1);
```

## See also

- [`BigInt()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)
- [`Number.isInteger`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
