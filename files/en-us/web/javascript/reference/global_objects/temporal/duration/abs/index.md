---
title: Temporal.Duration.prototype.abs()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/abs
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Duration.abs
---

{{JSRef}}{{SeeCompatTable}}

The **`abs()`** method of {{jsxref("Temporal.Duration")}} instances returns a new `Temporal.Duration` object with the absolute value of this duration (all fields have the same magnitude, but sign becomes positive).

## Syntax

```js-nolint
abs()
```

### Parameters

None.

### Return value

A new `Temporal.Duration` object with the absolute value of this duration, which is either the same as this duration if it is already positive, or its [negation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated) if it is negative.

## Examples

### Using abs()

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -30 });

console.log(d1.abs().toString()); // "PT1H30M"
console.log(d2.abs().toString()); // "PT1H30M"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/negated", "Temporal.Duration.prototype.negated()")}}
- {{jsxref("Temporal/Duration/sign", "Temporal.Duration.prototype.sign")}}
