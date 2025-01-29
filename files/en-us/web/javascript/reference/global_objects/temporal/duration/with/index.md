---
title: Temporal.Duration.prototype.with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/with
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Duration.with
---

{{JSRef}}{{SeeCompatTable}}

The **`with()`** method of {{jsxref("Temporal.Duration")}} instances returns a new `Temporal.Duration` object representing this duration with some fields replaced by new values. Because all `Temporal` objects are designed to be immutable, this method essentially functions as the setter for the duration's fields.

## Syntax

```js-nolint
with(info)
```

### Parameters

- `info`
  - : An object containing at least one of the properties recognized by {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}: `years`, `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`, `microseconds`, `nanoseconds`. Unspecified properties use the values from the original duration.

### Return value

A new `Temporal.Duration` object, where the fields specified in `info` that are not `undefined` are replaced by the corresponding values, and the rest of the fields are copied from the original duration.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - Any of the recognized properties in the `info` object is not an integer (including non-finite values).
    - A [calendar unit](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (years, months, weeks) has an absolute value ≥ 2<sup>32</sup>.
    - The non-calendar part of the duration (days and below), when expressed in seconds, has an absolute value ≥ 2<sup>53</sup>.
- {{jsxref("TypeError")}}
  - : Thrown in one of the following cases:
    - The `info` object is not an object.
    - All of the recognized properties in the `info` object are `undefined`.

## Examples

### Using with()

You can use `with()` to achieve fine-grained control over the fields of a `Temporal.Duration` object. For example, you can manually [balance](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing) a duration only on one unit, which `round()` does not offer:

```js
function balanceMinutes(duration) {
  const { hours, minutes } = duration;
  const totalMinutes = hours * 60 + minutes;
  const balancedMinutes = totalMinutes % 60;
  const balancedHours = (totalMinutes - balancedMinutes) / 60;
  return duration.with({ hours: balancedHours, minutes: balancedMinutes });
}

const d1 = Temporal.Duration.from({ hours: 100, minutes: 100, seconds: 100 });
const d2 = balanceMinutes(d1);
console.log(d2.hours); // 101
console.log(d2.minutes); // 40
console.log(d2.seconds); // 100; remains unbalanced
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}
- {{jsxref("Temporal/Duration/add", "Temporal.Duration.prototype.add()")}}
- {{jsxref("Temporal/Duration/subtract", "Temporal.Duration.prototype.subtract()")}}
- {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}}
