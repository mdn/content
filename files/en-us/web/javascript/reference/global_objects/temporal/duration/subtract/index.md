---
title: Temporal.Duration.prototype.subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/subtract
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Duration.subtract
---

{{JSRef}}{{SeeCompatTable}}

The **`subtract()`** method of {{jsxref("Temporal.Duration")}} instances returns a new `Temporal.Duration` object with the difference between this duration and a given duration. It is equivalent to [adding](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add) the [negated](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated) value of the other duration.

## Syntax

```js-nolint
subtract(other)
```

### Parameters

- `other`
  - : A string, an object, or a {{jsxref("Temporal.Duration")}} instance representing a duration to add to this duration. It is converted to a `Temporal.Duration` object using the same algorithm as {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}.

### Return value

A new `Temporal.Duration` object representing the difference of this duration and `other`.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - Either `this` or `other` is a [calendar duration](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (it has a non-zero `years`, `months`, or `weeks`), because calendar durations are ambiguous without a calendar and time reference.
    - The difference of `this` and `other` overflows the maximum or underflows the minimum representable duration, which is ±2<sup>53</sup> seconds.

## Examples

### Using subtract()

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -20 });

const d3 = d1.subtract(d2);
console.log(d3.toString()); // "PT2H50M"
```

For more examples and caveats, see the [`add()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add) method.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/add", "Temporal.Duration.prototype.add()")}}
- {{jsxref("Temporal/Duration/negated", "Temporal.Duration.prototype.negated()")}}
