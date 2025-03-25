---
title: Temporal.Instant.prototype.since()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/since
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Instant.since
---

{{JSRef}}{{SeeCompatTable}}

The **`since()`** method of {{jsxref("Temporal.Instant")}} instances returns a new {{jsxref("Temporal.Duration")}} object representing the duration from another instant (in a form convertible by {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}) to this instant. The duration is positive if the other instant is before this instant, and negative if after.

This method does `this - other`. To do `other - this`, use the {{jsxref("Temporal/Instant/until", "until()")}} method.

## Syntax

```js-nolint
since(other)
since(other, options)
```

### Parameters

- `other`
  - : A string or a {{jsxref("Temporal.Instant")}} instance representing an instant to subtract from this instant. It is converted to a `Temporal.Instant` object using the same algorithm as {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}.
- `options` {{optional_inline}}
  - : An object containing the options for {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}}, which includes `largestUnit`, `roundingIncrement`, `roundingMode`, and `smallestUnit`. `largestUnit` and `smallestUnit` only accept the units: `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"`, or their singular forms. For `largestUnit`, the default value `"auto"` means `"seconds"` or `smallestUnit`, whichever is greater. For `smallestUnit`, the default value is `"nanoseconds"`.

### Return value

A new {{jsxref("Temporal.Duration")}} object representing the duration _since_ `other` to this instant. The duration is positive if `other` is before this instant, and negative if after.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if any of the options is invalid.

## Examples

### Using since()

```js
const lastUpdated = Temporal.Instant.fromEpochMilliseconds(1735235418000);
const now = Temporal.Now.instant();
const duration = now.since(lastUpdated, { smallestUnit: "minute" });
console.log(`Last updated ${duration.toLocaleString("en-US")} ago`);
```

### Balancing the resulting duration

Because an instant does not carry calendar information, the resulting duration avoids [calendar durations](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations), which are ambiguous without a calendar and time reference. Therefore, the result is [unbalanced](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing) because `hours` may be greater than `24`. To balance the duration, [round](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/round) the resulting duration again with the desired `largestUnit`, passing a `relativeTo` that carries the calendar information.

```js
const lastUpdated = Temporal.Instant.fromEpochMilliseconds(1735235418000);
const now = Temporal.Now.instant();
const duration = now.since(lastUpdated, { smallestUnit: "minutes" });
const roundedDuration = duration.round({
  largestUnit: "years",
  // Use the ISO calendar; you can convert to another calendar using
  // withCalendar()
  relativeTo: now.toZonedDateTimeISO("UTC"),
});
console.log(`Last updated ${roundedDuration.toLocaleString("en-US")} ago`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}}
- {{jsxref("Temporal/Instant/subtract", "Temporal.Instant.prototype.subtract()")}}
- {{jsxref("Temporal/Instant/until", "Temporal.Instant.prototype.until()")}}
