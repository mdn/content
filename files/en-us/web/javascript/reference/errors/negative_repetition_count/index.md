---
title: 'RangeError: repeat count must be non-negative'
slug: Web/JavaScript/Reference/Errors/Negative_repetition_count
tags:
  - Error
  - Errors
  - JavaScript
  - RangeError
---
{{jsSidebar("Errors")}}

The JavaScript exception "repeat count must be non-negative" occurs when the
{{jsxref("String.prototype.repeat()")}} method is used with a `count`
argument that is a negative number.

## Message

```
RangeError: Invalid count value: -1 (V8-based)
RangeError: repeat count must be non-negative (Firefox)
RangeError: String.prototype.repeat argument must be greater than or equal to 0 and not be Infinity (Safari)
```

## Error type

{{jsxref("RangeError")}}

## What went wrong?

The {{jsxref("String.prototype.repeat()")}} method has been used. It has a
`count` parameter indicating the number of times to repeat the string. It
must be between 0 and less than positive {{jsxref("Infinity")}} and cannot be a negative
number. The range of allowed values can be described like this: \[0, +∞).

## Examples

### Invalid cases

```js example-bad
'abc'.repeat(-1); // RangeError
```

### Valid cases

```js example-good
'abc'.repeat(0);    // ''
'abc'.repeat(1);    // 'abc'
'abc'.repeat(2);    // 'abcabc'
'abc'.repeat(3.5);  // 'abcabcabc' (count will be converted to integer)
```

## See also

- {{jsxref("String.prototype.repeat()")}}
