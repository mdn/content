---
title: Temporal.Duration.prototype.negated()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Duration.negated
---

{{JSRef}}{{SeeCompatTable}}

The **`negated()`** method of {{jsxref("Temporal.Duration")}} instances returns a new `Temporal.Duration` object with the negated value of this duration (all fields keep the same magnitude, but sign becomes reversed).

## Syntax

```js-nolint
negated()
```

### Parameters

None.

### Return value

A new `Temporal.Duration` object, where all fields have the same magnitude as this duration, but the sign is reversed (positive fields become negative, and vice versa).

## Examples

### Using negated()

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -30 });

console.log(d1.negated().toString()); // "-PT1H30M"
console.log(d2.negated().toString()); // "PT1H30M"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/abs", "Temporal.Duration.prototype.abs()")}}
- {{jsxref("Temporal/Duration/sign", "Temporal.Duration.prototype.sign")}}
