---
title: "RangeError: precision is out of range"
slug: Web/JavaScript/Reference/Errors/Precision_range
tags:
  - Error
  - Errors
  - JavaScript
  - RangeError
---

{{jsSidebar("Errors")}}

The JavaScript exception "precision is out of range" occurs when a number that's
outside of the range of 0 and 20 (or 21) was passed into `toFixed` or
`toPrecision`.

## Message

```js
RangeError: The number of fractional digits is out of range (Edge)
RangeError: The precision is out of range (Edge)
RangeError: precision {0} out of range (Firefox)
RangeError: toExponential() argument must be between 0 and 20 (Chrome)
RangeError: toFixed() digits argument must be between 0 and 20 (Chrome)
RangeError: toPrecision() argument must be between 1 and 21 (Chrome)
```

## Error type

{{jsxref("RangeError")}}

## What went wrong?

There was an out of range precision argument in one of these methods:

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}

The allowed range for these methods is usually between 0 and 20 (or 21). However, the
ECMAScript specification allows to extend this range.

| Method                                         | Firefox (SpiderMonkey) | Chrome, Opera (V8) |
| ---------------------------------------------- | ---------------------- | ------------------ |
| {{jsxref("Number.prototype.toExponential()")}} | 0 to 100               | 0 to 20            |
| {{jsxref("Number.prototype.toFixed()")}}       | -20 to 100             | 0 to 20            |
| {{jsxref("Number.prototype.toPrecision()")}}   | 1 to 100               | 1 to 21            |

## Examples

### Invalid cases

```js example-bad
(77.1234).toExponential(-1); // RangeError
(77.1234).toExponential(101); // RangeError

(2.34).toFixed(-100); // RangeError
(2.34).toFixed(1001); // RangeError

(1234.5).toPrecision(-1); // RangeError
(1234.5).toPrecision(101); // RangeError
```

### Valid cases

```js example-good
(77.1234).toExponential(4); // 7.7123e+1
(77.1234).toExponential(2); // 7.71e+1

(2.34).toFixed(1); // 2.3
(2.35).toFixed(1); // 2.4 (note that it rounds up in this case)

(5.123456).toPrecision(5); // 5.1235
(5.123456).toPrecision(2); // 5.1
(5.123456).toPrecision(1); // 5
```

## See also

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
